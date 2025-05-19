import React, { useState } from "react"
import { Button, KIND, SIZE } from "baseui/button"
import { Block } from "baseui/block"
import { useEditor } from "@layerhub-io/react"
import { fabric } from "fabric"
import { useEffect } from "react"
import CropIcon from "~/components/Icons/CropIcon"
import useAppContext from "~/hooks/useAppContext"
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen"

const CropControls = () => {
    const { setActiveSubMenu } = useAppContext()
    const setIsSideBarOpen = useSetIsSidebarOpen()
    const editor = useEditor()
    const canvas = editor.canvas.canvas;

    const [cropRect, setCropRect] = useState<fabric.Rect | null>(null);
    const [originalObject, setOriginalObject] = useState<fabric.Rect | null>(null);
    const [isCropping, setIsCropping] = useState(false)

    useEffect(() => {
        if (!canvas) return;
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
        const active = canvas.getActiveObject();

        //setActiveSubMenu('ImageSettings');
        //setIsSideBarOpen(false)

        setOriginalObject(active);
        if (!active) {
            alert("Selecciona un objeto para recortar.");
            return;
        }

        const existingCropAreas = canvas.getObjects().filter(obj => obj.name === 'croparea');
        existingCropAreas.forEach(obj => {
            canvas.remove(obj);
        });

        canvas.getObjects().forEach(obj => {
            if (obj.metadata?.type === 'isCut') {
                delete obj.metadata.type;
            }
        });

        active.set({
            metadata: { type: "isCut" }
        });

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
            lockMovementX: true, // Bloquear movimiento horizontal
            lockMovementY: true,
            //type: "StaticPath",
            name: "croparea",
        });
        await canvas.add(cropRect);
        canvas.setActiveObject(cropRect);
        setCropRect(cropRect);
        setIsCropping(true);
    }

    return (
        <Block>
            <Button onClick={createCropArea} kind={KIND.tertiary} size={SIZE.mini} title="Crop">
                <CropIcon size={20} />
            </Button>
        </Block>
    )
}

export default CropControls
