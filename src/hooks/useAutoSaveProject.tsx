import { useCallback, useEffect, useRef } from "react";
import { useEditor } from "@layerhub-io/react";
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import { current } from "@reduxjs/toolkit";

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

    const forceSaveProject = useCallback(async (nameOverride?: string) => {
        if (!editor) return;

        const currentScene = editor.scene.exportToJSON();
        //console.log(latestDesignRef.current.name)
        //console.log(latestDesignRef)
        if (!currentScene?.layers?.length) {
            console.warn("Guardado forzado cancelado: escena vacía");
            return;
        }
        const frame = currentScene.frame
        const updatedScenes = latestScenesRef.current.map((scn) => {
            return scn.id === currentScene.id
                ? { id: currentScene.id, layers: currentScene.layers, name: currentScene.name }
                : scn;
        });

        const project = {
            ...latestDesignRef.current,
            name: nameOverride ?? latestDesignRef.current.name,
            frame: frame,
            scenes: updatedScenes,
        };

        sessionStorage.setItem(key, JSON.stringify(project));
        //console.log("Guardado forzado exitoso");
    }, [editor, key]);

    useEffect(() => {
        if (!editor || !enabled) return;

        const scheduleAutosave = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(forceSaveProject, delay);
        };

        editor.on("object:added", scheduleAutosave);
        editor.on("object:modified", scheduleAutosave);
        editor.on("object:removed", scheduleAutosave);
        editor.on("history:changed", scheduleAutosave);

        return () => {
            editor.off("object:added", scheduleAutosave);
            editor.off("object:modified", scheduleAutosave);
            editor.off("object:removed", scheduleAutosave);
            editor.off("history:changed", scheduleAutosave);

            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [editor, delay, key, enabled, forceSaveProject]);

    return {
        forceSaveProject, // exportamos esta función
    };
}