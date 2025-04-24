import { Block } from "baseui/block"
import { useEditor, useObjects } from "@layerhub-io/react"
import { PLACEMENT, StatefulTooltip } from "baseui/tooltip"
import { Button, SIZE, KIND } from "baseui/button"
import { useEffect, useState } from "react"
import { ILayer } from "@layerhub-io/types"
import { fabric } from "fabric"


const Crop = () => {
    const editor = useEditor()
    const objects = useObjects() as fabric.Rect[]
    const canvas = editor.canvas.canvas;
    const [originalObject, setOriginalObject] = useState<fabric.Rect | null>(null);
    const [cropRect, setCropRect] = useState<fabric.Rect | null>(null);

    const original = objects.filter(obj => {
        console.log("Objeto:", obj.id, obj.type, obj);
        return obj.metadata?.type === 'isCut';
    })[0]

    useEffect(() => {
        // Buscar el rectángulo de recorte entre los objetos del canvas
        const detectCropRect = () => {
            if (canvas) {
                const activeObject = canvas.getActiveObject()
                console.log(activeObject)
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
                    setOriginalObject(original);
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


    const applyCrop = async () => {
        if (!canvas || !cropRect) return;

        const active = original;
        if (!active) return;

        const rectBounds = cropRect.getBoundingRect(true);
        const imageBounds = active.getBoundingRect(true);

        const scaleX = active.scaleX || 1;
        const scaleY = active.scaleY || 1;

        // Determinar extremos del rectángulo
        const x1 = rectBounds.left;
        const x2 = rectBounds.left + rectBounds.width;
        const y1 = rectBounds.top;
        const y2 = rectBounds.top + rectBounds.height;

        // Normalizar coordenadas: asegurarse de que left < right, top < bottom
        const left = Math.min(x1, x2);
        const right = Math.max(x1, x2);
        const top = Math.min(y1, y2);
        const bottom = Math.max(y1, y2);

        // Desplazamiento del rect relativo a la imagen
        const offsetX = rectBounds.left - imageBounds.left;
        const offsetY = rectBounds.top - imageBounds.top;

        // Ahora calcular el crop con las coordenadas normalizadas
        const cropX = (left - imageBounds.left) / scaleX;
        const cropY = (top - imageBounds.top) / scaleY;
        const cropWidth = (right - left) / scaleX;
        const cropHeight = (bottom - top) / scaleY;

        await active.set({
            width: cropWidth,
            height: cropHeight,
            scaleX: 1,
            scaleY: 1,
            left: rectBounds.left,
            top: rectBounds.top,
        });

        // Store custom crop properties in metadata or data field
        await active.set('metadata', {
            ...active.metadata,
            cropX,
            cropY,
        });
        canvas.remove(cropRect);
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