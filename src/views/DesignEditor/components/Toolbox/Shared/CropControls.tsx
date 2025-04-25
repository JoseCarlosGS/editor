import React, { useState } from "react"
import { Input } from "baseui/input"
import { Button } from "baseui/button"
import { Block } from "baseui/block"
import { useActiveObject, useEditor } from "@layerhub-io/react"
import { Modal, ModalBody, ModalHeader, ModalFooter } from "baseui/modal"
import { ILayer } from "@layerhub-io/types"
import { fabric } from "fabric"
import { useEffect } from "react"

const CropControls = () => {
    const editor = useEditor()
    const canvas = editor.canvas.canvas;

    const [isOpen, setIsOpen] = useState(false)

    const [cropRect, setCropRect] = useState<fabric.Rect | null>(null);
    const [originalObject, setOriginalObject] = useState<fabric.Rect | null>(null);
    const [isCropping, setIsCropping] = useState(false)
    const [handles, setHandles] = useState<fabric.Circle[]>([]);

    useEffect(() => {
        if (!canvas) return;

        // Escuchar eventos de selección en el lienzo
        const onSelection = () => {
            if (isCropping && originalObject) {
                // Forzar el foco al objeto activo original
                //canvas.setActiveObject(originalObject);
            }
        };

        canvas.on("selection:created", onSelection);
        canvas.on("selection:updated", onSelection);

        return () => {
            canvas.off("selection:created", onSelection);
            canvas.off("selection:updated", onSelection);
        };
    }, [canvas, isCropping, originalObject]);

    const createCropArea = async () => {

        console.log("creando area de corte")
        const active = canvas.getActiveObject();

        setOriginalObject(active);
        if (!active) {
            alert("Selecciona un objeto para recortar.");
            return;
        }
        const cropRect = new fabric.Rect({
            left: active.left,
            top: active.top,
            width: active.width! * active.scaleX!,
            height: active.height! * active.scaleY!,
            fill: "rgba(0, 0, 0, 0.3)",
            stroke: "white",
            strokeWidth: 2,
            selectable: true,
            hasControls: true,
            hasBorders: true,
            //type: "StaticPath",
            name: "croparea",
        });
        await canvas.add(cropRect);

        editor.objects.update({ metadata: { "type": "isCut" } })

        canvas.setActiveObject(cropRect);
        //canvas.setActiveObject(active);
        //canvas.setActiveObject(crop)
        setCropRect(cropRect);
        setIsCropping(true);
        //editor.state.isCropping = true;
        //editor.objects.lock()
    }

    const removeCropArea = () => {
        if (!canvas || !cropRect) return;

        canvas.remove(cropRect);
        setCropRect(null);
        setIsCropping(false);
        setOriginalObject(null);
    };

    const cancelCropping = () => {
        removeCropArea();
    }

    const applyCropv1 = () => {
        if (!cropRect) return;

        const activeObject = canvas.getObjects().find(obj => obj !== cropRect && obj.type !== 'cropRect');

        if (!activeObject) return;

        // Obtener dimensiones del área de recorte
        const { left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight } = cropRect;

        // Obtener dimensiones del objeto original
        const { left: objLeft, top: objTop } = activeObject;

        // Calcular las coordenadas relativas del recorte respecto al objeto
        const relativeLeft = cropLeft! - objLeft!;
        const relativeTop = cropTop! - objTop!;

        // Crear un canvas temporal para realizar el recorte
        const tempCanvas = document.createElement('canvas');
        const tempContext = tempCanvas.getContext('2d');

        // Convertir el objeto activo a una imagen
        activeObject.clone((clonedObj: any) => {
            // Restablecer posición para el canvas temporal
            clonedObj.set({
                left: 0,
                top: 0
            });

            // Configurar el canvas temporal
            tempCanvas.width = cropWidth!;
            tempCanvas.height = cropHeight!;

            // Limpiar el canvas temporal
            tempContext!.clearRect(0, 0, tempCanvas.width, tempCanvas.height);

            // Dibujar solo el área de recorte en el canvas temporal
            clonedObj.render(tempContext, {
                left: -relativeLeft,
                top: -relativeTop,
                width: cropWidth,
                height: cropHeight
            });

            // Convertir el resultado a una URL de datos
            const dataURL = tempCanvas.toDataURL('image/png');

            // Crear una nueva imagen con el contenido recortado
            fabric.Image.fromURL(dataURL, (img) => {
                img.set({
                    left: cropLeft,
                    top: cropTop
                });

                // Eliminar el objeto original y el rectángulo de recorte
                canvas.remove(activeObject);
                canvas.remove(cropRect);

                // Añadir la nueva imagen recortada
                canvas.add(img);
                canvas.setActiveObject(img);
                canvas.renderAll();

                // Restablecer el estado
                setCropRect(null);
                setIsCropping(false);
                setIsOpen(false);

                // Reactivar la selección de objetos
            });
        });
    }

    const applyCrop = () => {
        if (!canvas || !cropRect) return;

        const active = canvas.getActiveObject();
        if (!active) return;

        const tempCanvas = document.createElement('canvas');

        // Obtener las coordenadas del área de recorte
        const cropLeft = cropRect.left;
        const cropTop = cropRect.top;
        const cropWidth = cropRect.width;
        const cropHeight = cropRect.height;

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

            // Limpiar el área de recorte
            removeCropArea();
        });
    };

    return (
        <Block>
            {!isCropping ? (
                <Button onClick={createCropArea} size="compact">
                    Recortar Visualmente
                </Button>
            ) : (
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
            )}
        </Block>
    )
}

export default CropControls
