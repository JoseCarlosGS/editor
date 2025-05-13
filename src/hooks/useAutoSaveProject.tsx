import { useEffect, useRef } from "react";

export function useAutosaveProject(key: string, projectData: any, delay = 1000) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!projectData) return;

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            sessionStorage.setItem(key, JSON.stringify(projectData));
            console.log("Proyecto guardado automáticamente");
        }, delay);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [projectData, delay]);
}