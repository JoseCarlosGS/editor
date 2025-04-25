import { Block } from "baseui/block"
import { useEditor, useObjects } from "@layerhub-io/react"
import { PLACEMENT, StatefulTooltip } from "baseui/tooltip"
import { Button, SIZE, KIND } from "baseui/button"
import { useEffect, useState } from "react"
import { ILayer } from "@layerhub-io/types"
import { fabric } from "fabric"


const Crop = () => {
    const editor = useEditor()
    const objects = useObjects() as fabric.Image[]
    const canvas = editor.canvas.canvas;
    const [originalObject, setOriginalObject] = useState<fabric.Image | null>(null);
    const [cropRect, setCropRect] = useState<fabric.Rect | null>(null);

    let original = objects.filter(obj => {
        //console.log("Objeto:", obj.id, obj.type, obj);
        return obj.metadata?.type === 'isCut';
    })[0]

    useEffect(() => {
        // Buscar el rectángulo de recorte entre los objetos del canvas
        const detectCropRect = () => {
            if (canvas) {
                const activeObject = canvas.getActiveObject()
                //console.log(activeObject)
                setCropRect(activeObject);
            }
        };

        detectCropRect();


        // También podemos agregar un listener para cuando cambie la selección
        const handleSelectionCreated = (e: any) => {
            if (e.selected && e.selected[0] && e.selected[0].name === 'cropRect') {
                setCropRect(e.selected[0]);
                // Buscar el objeto original
                const objects = canvas.getObjects();
                const original = objects.find(obj => obj !== e.selected[0] && obj.visible);
                if (original) {
                    setOriginalObject(original as fabric.Image);
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

    function applyCrop3() {
        const rect = cropRect!.getBoundingRect(true); // Coordenadas absolutas del recorte
        const img = original.getBoundingRect(true);   // Coordenadas absolutas de la imagen original

        // if (rect.top != img.top) {
        //     if (rect.height != img.height + 2)
        //         console.log("arrastre vertical de arriba hacia abajo")
        // }
        // else {
        //     if (rect.height != img.height + 2)
        //         console.log("arrastre vertical de abajo hacia arriba")
        // }
        // if (Math.floor(rect.left) != Math.floor(img.left)) {
        //     if (rect.width != img.width + 2)
        //         console.log("arrastre horizontal de izquierda a derecha")
        // }
        // else {
        //     if (rect.width != img.width + 2)
        //         console.log("arrastre horizontal de derecha a izquierda")
        // }

        // Normalizar el rectángulo para que siempre sea desde top-left
        const normalizedRect = {
            left: Math.min(rect.left, rect.left + rect.width),
            top: Math.min(rect.top, rect.top + rect.height),
            width: Math.abs(rect.width),
            height: Math.abs(rect.height),
        };

        const scaleX = original.scaleX || 1;
        const scaleY = original.scaleY || 1;

        const cropX = (normalizedRect.left - img.left) / scaleX;
        const cropY = (normalizedRect.top - img.top) / scaleY;
        const cropWidth = normalizedRect.width / scaleX;
        const cropHeight = normalizedRect.height / scaleY;

        original.set({
            cropX: cropX,
            cropY: cropY,
            originX: 'left',
            originY: 'top',
            width: cropWidth,
            height: cropHeight,
            scaleX: 1,
            scaleY: 1,
            left: normalizedRect.left,
            top: normalizedRect.top,
        });

        canvas.remove(cropRect!);
        canvas.requestRenderAll();
    }


    function applyCrop() {
        if (!canvas || !cropRect || !original) return;

        console.log("original", original)

        const rect = cropRect.getBoundingRect(true); // Coordenadas absolutas del recorte
        const img = original.getBoundingRect(true);   // Coordenadas absolutas de la imagen original

        // Normalizar el rectángulo para que siempre sea desde top-left
        const normalizedRect = {
            left: Math.min(rect.left, rect.left + rect.width),
            top: Math.min(rect.top, rect.top + rect.height),
            width: Math.abs(rect.width),
            height: Math.abs(rect.height),
        };

        const scaleX = original.scaleX || 1;
        const scaleY = original.scaleY || 1;

        const cropX = (normalizedRect.left - img.left) / scaleX;
        const cropY = (normalizedRect.top - img.top) / scaleY;
        const cropWidth = normalizedRect.width / scaleX;
        const cropHeight = normalizedRect.height / scaleY;

        // Crear un canvas temporal para hacer el recorte real
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        // Si original es de tipo fabric.Image
        if (original.getElement && typeof original.getElement === 'function') {
            const imgElement = original.getElement();

            // Establecer dimensiones del canvas temporal
            tempCanvas.width = cropWidth;
            tempCanvas.height = cropHeight;

            // Dibujar solo la porción recortada en el canvas temporal
            tempCtx!.drawImage(
                imgElement,
                cropX, cropY, cropWidth, cropHeight,
                0, 0, cropWidth, cropHeight
            );

            // Crear una nueva imagen con el contenido recortado
            fabric.Image.fromURL(tempCanvas.toDataURL(), function (newImage) {
                // Configurar la nueva imagen con las propiedades correctas
                newImage.set({
                    left: normalizedRect.left,
                    top: normalizedRect.top,
                    originX: 'left',
                    originY: 'top',
                    type: 'StaticImage'
                });

                // Reemplazar la imagen original con la nueva en el canvas
                canvas.remove(original);
                canvas.add(newImage);
                canvas.setActiveObject(newImage);

                console.log('nueva', newImage)

                // Actualizar la referencia a la imagen original para futuros recortes
                original = newImage;
                original.set({
                    metadata: {
                        type: ""
                    }
                })
                canvas.remove(cropRect);
            });
        }
    }

    const applyCrop1 = () => {
        if (!canvas || !cropRect) return;

        const active = original;
        if (!active) return;

        const rectBounds = cropRect.getBoundingRect(true);
        const imageBounds = active.getBoundingRect(true);

        const tempCanvas = document.createElement('canvas');

        // Obtener las coordenadas del área de recorte
        const cropLeft = cropRect.left;
        const cropTop = cropRect.top;
        const cropWidth = cropRect.width;
        const cropHeight = cropRect.height;

        console.log('left: ', cropLeft, 'top: ', cropTop, 'width:: ', cropWidth, 'height: ', cropHeight)
        console.log('left: ', active.left, 'top: ', active.top, 'width: ', active.width, 'height: ', active.height)

        // Exportar el área de recorte como una imagen usando toDataURL
        const croppedImage = active.toDataURL({
            left: cropLeft,
            top: cropTop,
            width: cropWidth,
            height: cropHeight,
        });

        // Crear una nueva imagen a partir de los datos recortados
        fabric.Image.fromURL(croppedImage, (img) => {
            img.set({
                left: cropLeft,
                top: cropTop,
                scaleX: cropWidth! / img.width!,
                scaleY: cropHeight! / img.height!,
                type: "StaticImage"
            });

            // Reemplazar el objeto activo con la nueva imagen recortada
            canvas.remove(active);
            canvas.add(img);

            canvas.remove(canvas.getActiveObject()!)
            // Limpiar el área de recorte
        });
    };

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
                justifyContent: "flex-end",
            }}
        >
            <StatefulTooltip placement={PLACEMENT.bottom} showArrow={true} accessibilityType="tooltip" content="Unlock">
                <Block
                    $style={{
                        display: "flex",
                        gap: "8px",
                        marginTop: "12px"
                    }}
                    overrides={{ Block: { style: { position: "absolute", top: "12px", right: "12px", zIndex: 20 } } }}
                >
                    <Button onClick={applyCrop} size="compact" kind="primary">
                        Aplicar
                    </Button>
                    <Button onClick={cancelCropping} size="compact" kind="secondary">
                        Cancelar
                    </Button>
                </Block>
            </StatefulTooltip>
        </Block>
    )
}

export default Crop