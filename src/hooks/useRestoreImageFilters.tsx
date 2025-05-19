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
                // Obtenemos el array serializado desde metadata
                const rawFilters = Array.isArray(obj.metadata.filters)
                    ? obj.metadata.filters
                    : typeof obj.metadata.filters === "string"
                        ? JSON.parse(obj.metadata.filters)
                        : []

                // Restauramos los filtros desde su serialización
                const restoredFilters = rawFilters.map((f: any) => {
                    const FilterClass = (fabric.Image.filters as any)[f.type]
                    if (!FilterClass) return null

                    // Creamos instancia con las propiedades personalizadas
                    return new FilterClass(f)
                }).filter(Boolean) // eliminamos nulls

                // Aplicamos los filtros restaurados
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