import { useEffect } from "react"
import { useEditor } from "@layerhub-io/react"

const useEditorHistoryListener = (callback: () => void) => {
  const editor = useEditor()

  useEffect(() => {
    if (!editor) return

    const onHistoryChange = () => {
      callback()
    }

    editor.on("history:changed", onHistoryChange)

    return () => {
      editor.off("history:changed", onHistoryChange)
    }
  }, [editor, callback])
}

export default useEditorHistoryListener
