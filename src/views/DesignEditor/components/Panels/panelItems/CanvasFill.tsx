import React, { useState } from "react";
import { Block } from "baseui/block"
import Scrollable from "~/components/Scrollable"
import { HexColorPicker } from "react-colorful"
import { Delete } from "baseui/icon"
import { set, throttle } from "lodash"
import { useEditor } from "@layerhub-io/react"
import useAppContext from "~/hooks/useAppContext"
import ArrowBackOutline from "~/components/Icons/ArrowBackOutline";
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen";

const PRESET_COLORS = [
  "#f44336",
  "#ff9800",
  "#ffee58",
  "#66bb6a",
  "#26a69a",
  "#03a9f4",
  "#3f51b5",
  "#673ab7",
  "#9c27b0",
  "#ec407a",
  "#8d6e63",
  "#d9d9d9",
]

const CanvasFill = () => {
  const editor = useEditor()
  const { activePanel, setActiveSubMenu } = useAppContext();
  const setIsSidebarOpen = useSetIsSidebarOpen()

  const updateCanvasBackground = throttle((color: string) => {
    editor.canvas.setBackgroundColor(color)
  }, 100)

  const [isVisible, setIsVisible] = useState(true);


  return (
    <Block $style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Block
        $style={{
          display: "flex",
          alignItems: "center",
          fontWeight: 500,
          justifyContent: "space-between",
          padding: "1.5rem",
        }}
      >
        <Block onClick={() => setActiveSubMenu(activePanel)} $style={{ cursor: "pointer", display: "flex" }}>
          <ArrowBackOutline size={24} />
        </Block>
        <Block>Canvas Fill</Block>

        <Block
          $style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}
          onClick={() => setIsSidebarOpen(false)}// Ocultar el componente
          aria-label="Close Canvas Fill"
        >
          <Delete size={24} />
        </Block>
      </Block>
      <Scrollable>
        <Block padding="0 1.5rem">
          <HexColorPicker onChange={updateCanvasBackground} style={{ width: "100%" }} />
          <Block>
            <Block $style={{ padding: "0.75rem 0", fontWeight: 500, fontSize: "14px" }}>Preset colors</Block>
            <Block $style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", gap: "0.25rem" }}>
              {PRESET_COLORS.map((color, index) => (
                <Block
                  $style={{
                    cursor: "pointer",
                  }}
                  onClick={() => updateCanvasBackground(color)}
                  backgroundColor={color}
                  height="38px"
                  key={index}
                />
              ))}
            </Block>
          </Block>
        </Block>
      </Scrollable>
    </Block>
  )
}

export default CanvasFill
