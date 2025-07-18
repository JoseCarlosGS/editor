import React from "react"
import { useActiveObject, useEditor } from "@layerhub-io/react"
import getSelectionType from "~/utils/get-selection-type"
import { styled } from "baseui"
import Items from "./Items"
import useAppContext from "~/hooks/useAppContext"
import { ILayer } from "@layerhub-io/types"

const DEFAULT_TOOLBOX = "Canvas"

interface ToolboxState {
  toolbox: string
}

const Container = styled("div", (props) => ({
  position: "absolute",
  top: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 10,
  boxShadow: "rgb(0 0 0 / 15%) 0px 3px 3px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  backgroundColor: "white",
  borderRadius: "8px",
  transition: "opacity 0.3s ease, transform 0.3s ease",
}))

const Toolbox = () => {
  const [state, setState] = React.useState<ToolboxState>({ toolbox: "Text" })
  const { setActiveSubMenu } = useAppContext()
  const activeObject = useActiveObject() as ILayer
  const editor = useEditor()

  React.useEffect(() => {
    const selectionType = getSelectionType(activeObject)
    if (selectionType) {
      if (selectionType.length > 1) {
        setState({ toolbox: "Multiple" })
      } else {
        setState({ toolbox: selectionType[0] })
      }
    } else {
      setState({ toolbox: DEFAULT_TOOLBOX })
      setActiveSubMenu("")
    }
  }, [activeObject])

  React.useEffect(() => {
    let watcher = async () => {
      if (activeObject) {
        // @ts-ignore
        const selectionType = getSelectionType(activeObject) as any

        if (selectionType.length > 1) {
          setState({ toolbox: "Multiple" })
        } else {
          setState({ toolbox: selectionType[0] })
        }
      }
    }
    if (editor) {
      editor.on("history:changed", watcher)
    }
    return () => {
      if (editor) {
        editor.off("history:changed", watcher)
      }
    }
  }, [editor, activeObject])

  // @ts-ignore
  const Component = Items[state.toolbox]

  return <Container>{Component ? <Component /> : state.toolbox}</Container>
}

export default Toolbox
