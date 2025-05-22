import { useEditor, useObjects } from '@layerhub-io/react';
import { ILayer } from '@layerhub-io/types';
import { useState, useEffect } from 'react';

export type FieldData = {
    name: string,
    value: string
}

export function useEditScene() {
    const editor = useEditor();
    const objects = useObjects() as ILayer[];

    const updateFieldsScene = (data: FieldData[]) => {
        const fieldObjects = objects.filter((obj) => obj.metadata?.type === "field");

        fieldObjects.forEach((obj) => {
            const newValue = data.find((item) => item.name === obj.name)?.value;
            if (newValue !== undefined) {
                editor.objects.update({ text: newValue }, obj.id);
            }
        });
    };

    return {
        updateFieldsScene,
    };
}