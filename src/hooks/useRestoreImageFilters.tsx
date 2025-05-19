import { useCallback } from "react"
import { fabric } from "fabric"
import { useEditor } from "@layerhub-io/react"
import { STATIC_FILTERS } from "~/constants/static_filters"// Ajusta el path si es necesario

export const useRestoreImageFilters = () => {
    const editor = useEditor()

    const restoreFilters = useCallback(() => {
        if (!editor || !editor.canvas) return

        const objects = editor.canvas.canvas.getObjects()

        objects.forEach((obj: any) => {
            if (obj.type === "StaticImage" && obj.metadata?.filters) {
                const rawFilters = Array.isArray(obj.metadata.filters)
                    ? obj.metadata.filters
                    : typeof obj.metadata.filters === "string"
                        ? JSON.parse(obj.metadata.filters)
                        : []

                const restoredFilters = rawFilters
                    .map((name: string) =>
                        STATIC_FILTERS.find((f) => f.name === name)?.filter || null
                    )
                    .filter((f: any): f is fabric.IBaseFilter => f !== null)

                if ("applyFilters" in obj && typeof obj.applyFilters === "function") {
                    obj.filters = restoredFilters
                    obj.applyFilters()
                }
            }
        })

        editor.canvas.requestRenderAll()
    }, [editor])

    return restoreFilters
}