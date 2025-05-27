import { Block } from "baseui/block"
import { useEditor, useObjects } from "@layerhub-io/react"
import { PLACEMENT, StatefulTooltip } from "baseui/tooltip"
import { Button, SIZE, KIND } from "baseui/button"
import { useEffect, useState } from "react"
import { fabric } from "fabric"
import { nanoid } from "nanoid"
import { Delete } from "baseui/icon"
import { Check } from 'baseui/icon';

const Crop = () => {
    const editor = useEditor()
    const objects = useObjects() as fabric.Image[]
    const canvas = editor.canvas.canvas;
    const [originalObject, setOriginalObject] = useState<fabric.Image | null>(null);
    const [cropRect, setCropRect] = useState<fabric.Rect | null>(null);

    useEffect(() => {
        if (!canvas) return;
        const findImageToCrop = () => {
            const allObjects = canvas.getObjects();
            const imageToCrop = allObjects.find(obj =>
                obj.metadata?.action === 'isCut' && obj.type !== 'rect'
            ) as fabric.Image;

            if (imageToCrop && (!originalObject || originalObject.id !== imageToCrop.id)) {
                setOriginalObject(imageToCrop);
            }
        };
        findImageToCrop();
        const handleObjectModified = () => {
            findImageToCrop();
        };

        canvas.on('object:modified', handleObjectModified);

        return () => {
            canvas.off('object:modified', handleObjectModified);
        };
    }, [canvas, objects, originalObject]);

    useEffect(() => {
        const detectCropRect = () => {
            if (canvas) {
                const activeObject = canvas.getActiveObject()
                setCropRect(activeObject);
            }
        };

        detectCropRect();
        const handleSelectionCreated = (e: any) => {
            if (e.selected && e.selected[0] && e.selected[0].name === 'cropRect') {
                setCropRect(e.selected[0]);
                if (!originalObject) {
                    const objects = canvas.getObjects();
                    const original = objects.find(obj => obj !== e.selected[0] && obj.visible);
                    if (original) {
                        setOriginalObject(original as fabric.Image);
                        console.log('Original detectado en selección: ', original);
                    }
                }
            }
        };

        canvas.on('selection:created', handleSelectionCreated);
        canvas.on('selection:updated', handleSelectionCreated);

        return () => {
            canvas.off('selection:created', handleSelectionCreated);
            canvas.off('selection:updated', handleSelectionCreated);
        };


    }, [canvas]);

    function applyCrop() {
        if (!canvas || !cropRect || !originalObject) {
            console.error("No se pueden encontrar todos los elementos necesarios para recortar");
            return;
        }

        const rect = cropRect.getBoundingRect(true);
        const img = originalObject.getBoundingRect(true);

        const normalizedRect = {
            left: Math.min(rect.left, rect.left + rect.width),
            top: Math.min(rect.top, rect.top + rect.height),
            width: Math.abs(rect.width),
            height: Math.abs(rect.height),
        };

        const scaleX = originalObject.scaleX || 1;
        const scaleY = originalObject.scaleY || 1;

        const cropX = (normalizedRect.left - img.left) / scaleX;
        const cropY = (normalizedRect.top - img.top) / scaleY;
        const cropWidth = normalizedRect.width / scaleX;
        const cropHeight = normalizedRect.height / scaleY;

        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        if (originalObject.getElement && typeof originalObject.getElement === 'function') {
            const imgElement = originalObject.getElement();

            tempCanvas.width = cropWidth;
            tempCanvas.height = cropHeight;

            tempCtx!.drawImage(
                imgElement,
                cropX, cropY, cropWidth, cropHeight,
                0, 0, cropWidth, cropHeight
            );

            fabric.Image.fromURL(tempCanvas.toDataURL(), async function (newImage) {
                newImage.set({
                    id: nanoid(),
                    left: normalizedRect.left,
                    top: normalizedRect.top,
                    originX: 'left',
                    originY: 'top',
                    type: 'StaticImage'
                });
                if (originalObject.metadata) {
                    delete originalObject.metadata.action;
                }
                newImage.set({
                    name: originalObject.name,
                    metadata: {
                        ...originalObject.metadata
                    }
                })
                canvas.add(newImage);
                canvas.setActiveObject(newImage);

                await canvas.remove(originalObject);
                canvas.remove(cropRect);

                // Limpiar estados
                setOriginalObject(null);
                setCropRect(null);

                canvas.requestRenderAll();
            });
        } else {
            console.error("No se puede obtener el elemento de la imagen");
        }
    }
    const cancelCropping = () => {
        canvas.remove(cropRect!);
        setCropRect(null);
        setOriginalObject(null);
    }

    return (
        <Block
            $style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                padding: "0 12px",
                justifyContent: "center",
            }}
        >
            <StatefulTooltip placement={PLACEMENT.bottom} showArrow={true} accessibilityType="tooltip" content="">
                <Block
                    $style={{
                        display: "flex",
                        gap: "12px",
                        justifyContent: "center",
                    }}
                    overrides={{ Block: { style: { zIndex: 20 } } }}
                >
                    <Button
                        onClick={applyCrop}
                        kind={KIND.tertiary}
                        size={SIZE.compact}
                        style={{
                            minWidth: "80px",  // Ancho mínimo mayor
                            padding: "7px",
                        }}>
                        <Check size={24} />
                    </Button>
                    <Button
                        onClick={cancelCropping}
                        kind={KIND.tertiary}
                        size={SIZE.mini}
                        style={{
                            marginTop: "0px",
                            height: "40px",
                        }}>
                        <Delete size={24} />
                    </Button>
                </Block>
            </StatefulTooltip>
        </Block>
    )
}

export default Crop