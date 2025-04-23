import React, { useState } from "react"
import { Input } from "baseui/input"
import { Button } from "baseui/button"
import { Block } from "baseui/block"
import { useActiveObject, useEditor } from "@layerhub-io/react"
import { Modal, ModalBody, ModalHeader, ModalFooter } from "baseui/modal"
import { ILayer } from "@layerhub-io/types"
import { fabric } from "fabric"

const CropControls = () => {
    const editor = useEditor()
    const activeObject = useActiveObject() as ILayer

    const [isOpen, setIsOpen] = useState(false)

    const [cropRect, setCropRect] = useState<ILayer | null>(null)
    const [isCropping, setIsCropping] = useState(false)

    const [cropX, setCropX] = useState(0)
    const [cropY, setCropY] = useState(0)
    const [width, setWidth] = useState(100)
    const [height, setHeight] = useState(100)

    const toggle = () => {
        setIsOpen(!isOpen)
        if (!isOpen) {
            createCropArea()
        } else {
            removeCropArea()
        }
    }

    const createCropArea = async () => {
        console.log("creando area de corte")
        console.log(editor)

        if (activeObject) {
            editor.objects.lock()
            console.log("creando elemento")
            const { left, top, width, height, scaleX, scaleY } = activeObject
            const size = width! * scaleX!
            const rect = {

                id: "croparea",
                type: "StaticPath",
                fill: "rgba(0,0,0,0.3)",
                stroke: "white",
                left: left,
                top: top,
                strokeDashArray: [4, 2],
                path: [["M", size, 0], ["L", 0, 0], ["L", 0, size], ["L", size, size], ["L", size, 0], ["Z"]],
                originX: "left",
                originY: "top",
                hasRotatingPoint: false,
                cornerStyle: "circle",
                flipX: false,
                flipY: true,
                skewX: 0,
                skewY: 0,
                transparentCorners: false,
                name: "crop-rect",
            }
            const newleft = activeObject.left
            const newtop = activeObject.top
            await editor.objects.add(rect);
            editor.objects.move("left", newleft!, "croparea");
            //editor.objects.move("top", newtop!, "croparea");

            if (activeObject) {
                setCropRect(activeObject)
                setIsCropping(true)
            }
        }
    }

    const removeCropArea = () => {
        if (cropRect && activeObject) {
            editor.objects.remove()
            setCropRect(null)
        }
    }

    const cancelCropping = () => {
        if (cropRect) {

            editor.objects.remove()
            setCropRect(null)
        }
        setIsCropping(false)
    }

    const applyCrop = () => {
        const active = activeObject
        if (!cropRect || !active || active.type !== "image") {
            alert("Debe seleccionar una imagen y definir un área")
            return
        }

        const imageLeft = active.left!
        const imageTop = active.top!
        const scaleX = active.scaleX || 1
        const scaleY = active.scaleY || 1

        const cropX = (cropRect.left! - imageLeft) / scaleX
        const cropY = (cropRect.top! - imageTop) / scaleY
        const width = cropRect.width! / scaleX
        const height = cropRect.height! / scaleY

        editor.objects.update({
            cropX,
            cropY,
            width,
            height,
        }, active.id)

        cancelCropping()
    }

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
