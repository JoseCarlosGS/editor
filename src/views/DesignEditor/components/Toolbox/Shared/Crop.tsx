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
    const [cropRect, setCropRect] = useState<fabric.Rect | null>(null)

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

    const createCropArea = () => {
        const active = activeObject as fabric.Image
        if (active && active.type === "image") {
            const { left, top, width, height } = active

            const rect = new fabric.Rect({
                left: left! + 20,
                top: top! + 20,
                width: width! * active.scaleX! - 40,
                height: height! * active.scaleY! - 40,
                fill: "rgba(0,0,0,0.3)",
                stroke: "white",
                strokeDashArray: [4, 2],
                hasRotatingPoint: false,
                cornerStyle: "circle",
                lockRotation: true,
                lockScalingFlip: true,
                lockUniScaling: false,
                transparentCorners: false,
                name: "crop-rect",
            })

            editor.objects.add({
                type: "rect",
                left: rect.left,
                top: rect.top,
                width: rect.width,
                height: rect.height,
                fill: rect.fill as string,
                stroke: rect.stroke,
                strokeDashArray: rect.strokeDashArray,
                name: rect.name,
            })
            if (activeObject) {
                editor.objects.select()
                setCropRect(rect)
            }
        }
    }

    const removeCropArea = () => {
        if (cropRect && activeObject) {
            editor.objects.remove()
            setCropRect(null)
        }
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

        toggle()
    }

    return (
        <>
            <Button onClick={toggle} size="compact">
                Recortar Visualmente
            </Button>
            <Modal isOpen={isOpen} onClose={toggle} closeable>
                <ModalHeader>Área de recorte</ModalHeader>
                <ModalBody>
                    Usa el rectángulo para definir el área de recorte sobre la imagen.
                </ModalBody>
                <ModalFooter>
                    <Button onClick={applyCrop} size="compact">
                        Aplicar Recorte
                    </Button>
                    <Button onClick={toggle} kind="tertiary" size="compact">
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CropControls
