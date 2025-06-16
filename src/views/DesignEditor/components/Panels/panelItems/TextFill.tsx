import React from "react"
import { Block } from "baseui/block"
import Scrollable from "~/components/Scrollable"
import { HexColorPicker } from "react-colorful"
import { Delete } from "baseui/icon"
import { throttle } from "lodash"
import { useActiveObject, useEditor } from "@layerhub-io/react"
import useAppContext from "~/hooks/useAppContext"
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen"
import { useTranslation } from "react-i18next"
import ArrowBackOutline from "~/components/Icons/ArrowBackOutline"

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

const TextFill = () => {
  const [color, setColor] = React.useState("#b32aa9")
  const activeObject = useActiveObject()
  const editor = useEditor()
  const { activePanel, setActiveSubMenu } = useAppContext();
  const setIsSidebarOpen = useSetIsSidebarOpen()
  const { t } = useTranslation("editor")

  const updateObjectFill = throttle((color: string) => {
    if (activeObject) {
      editor.objects.update({ fill: color })
    }

    setColor(color)
  }, 100)

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
        <Block>{t(`panels.textFill.textFill`)}</Block>

        <Block
          onClick={() => setIsSidebarOpen(false)}
          $style={{ cursor: "pointer", display: "flex" }}>
          <Delete size={24} />
        </Block>
      </Block>
      <Scrollable>
        <Block padding="0 1.5rem">
          <HexColorPicker onChange={updateObjectFill} style={{ width: "100%" }} />
          <Block>
            <Block $style={{ padding: "0.75rem 0", fontWeight: 500, fontSize: "14px" }}>{t(`panels.textFill.presetColors`)}</Block>
            <Block $style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", gap: "0.25rem" }}>
              {PRESET_COLORS.map((color, index) => (
                <Block
                  $style={{
                    cursor: "pointer",
                  }}
                  onClick={() => updateObjectFill(color)}
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

export default TextFill
