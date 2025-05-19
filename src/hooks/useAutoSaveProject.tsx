import { useEffect, useRef } from "react";
import { useEditor } from "@layerhub-io/react";
import useDesignEditorContext from "~/hooks/useDesignEditorContext"

export function useAutosaveProject(key: string, delay = 1000, enabled: boolean = true) {
    const { scenes, currentDesign } = useDesignEditorContext();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const editor = useEditor();
    const latestDesignRef = useRef(currentDesign);
    const latestScenesRef = useRef(scenes);

    useEffect(() => {
        latestDesignRef.current = currentDesign;
    }, [currentDesign]);

    useEffect(() => {
        latestScenesRef.current = scenes;
    }, [scenes]);

    useEffect(() => {
        if (!editor || !enabled) return;

        const saveProject = async () => {
            const currentScene = editor.scene.exportToJSON();
            //console.log("Escena actual:", latestScenesRef.current);
            //console.log("Diseño actual:", latestDesignRef.current);

            if (!currentScene?.layers?.length) {
                console.warn("Autoguardado cancelado: escena vacía");
                return;
            }
            const updatedScenes = latestScenesRef.current.map((scn) => {
                if (scn.id === currentScene.id) {
                    return {
                        id: currentScene.id,
                        layers: currentScene.layers,
                        name: currentScene.name,
                    }
                }
                return {
                    id: scn.id,
                    layers: scn.layers,
                    name: scn.name,
                }
            })
            const project = {
                ...latestDesignRef.current,
                scenes: updatedScenes,
            };
            //console.log('Escenas actualizadas:', updatedScenes);
            sessionStorage.setItem(key, JSON.stringify(project));
            //console.log("Proyecto autoguardado:", project);
        };
        const scheduleAutosave = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(saveProject, delay);
        };
        editor.on("object:added", scheduleAutosave);
        editor.on("object:modified", scheduleAutosave);
        editor.on("object:removed", scheduleAutosave);
        editor.on("history:changed", scheduleAutosave);

        return () => {
            // Cleanup
            editor.off("object:added", scheduleAutosave);
            editor.off("object:modified", scheduleAutosave);
            editor.off("object:removed", scheduleAutosave);
            editor.off("history:changed", scheduleAutosave);

            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [editor, delay, key, enabled]);
}