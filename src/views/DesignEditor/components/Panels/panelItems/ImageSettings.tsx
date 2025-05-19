import React, { useEffect, useState } from 'react';
import useAppContext from '~/hooks/useAppContext';
import { useEditor } from '@layerhub-io/react';
import { Block } from 'baseui/block';
import ArrowBackOutline from '~/components/Icons/ArrowBackOutline';
import Delete from 'baseui/icon/delete';
import useSetIsSidebarOpen from '~/hooks/useSetIsSidebarOpen';
import Scrollable from '~/components/Scrollable';
import { Button, KIND, SIZE } from 'baseui/button';
import FilterAdjuster from './utils';
import { Sun, Contrast, Palette, Droplet, Rainbow, Loader, Circle } from "lucide-react";
import { useActiveObject } from '@layerhub-io/react';
import { fabric } from 'fabric';
import { useAutosaveProject } from '~/hooks/useAutoSaveProject';

interface Options {
    ratio: number
}
const ImageSettings = () => {
    const editor = useEditor()
    const canvas = editor.canvas.canvas
    const activeObject = useActiveObject()
    const { forceSaveProject } = useAutosaveProject(sessionStorage.getItem('project_key')!)
    let frameRequest: number | null = null;
    const ratioMin = -100
    const ratioMax = 100
    const [brightnessOptions, setBrightnessOptions] = React.useState<Options>({
        ratio: 0,
    })
    const [contrastOptions, setContrastOptions] = React.useState<Options>({
        ratio: 0,
    })
    const [grayScaleOptions, setGrayScaleOptions] = React.useState<Options>({
        ratio: 0,
    })
    const [blurOptions, setBlurOptions] = React.useState<Options>({
        ratio: 1,
    })
    const [saturationOptions, setSaturationOptions] = React.useState<Options>({
        ratio: 0,
    })
    const [invertOptions, setInvertOptions] = React.useState<Options>({ ratio: 0 })

    const { activePanel, setActiveSubMenu } = useAppContext();
    const setIsSidebarOpen = useSetIsSidebarOpen()

    type FilterOptions = {
        value: number;
        fabricFilter: any; // eg: fabric.Image.filters.Brightness
        propName: string;  // eg: 'brightness', 'contrast'
    };

    const lastObjectRef = React.useRef<fabric.Object | null>(null);

    useEffect(() => {
        if (!activeObject) return;

        if (lastObjectRef.current === activeObject) return;
        lastObjectRef.current = activeObject as fabric.Object;

        const image = activeObject as fabric.Image;
        const filters = image.filters || [];

        const applied = new Set<string>();

        filters.forEach((filter) => {
            if (filter instanceof fabric.Image.filters.Brightness) {
                const value = (filter as any).brightness ?? 0;
                setBrightnessOptions((prev) => (prev.ratio !== Math.round(value * 100) ? { ratio: Math.round(value * 100) } : prev));
                applied.add('Brightness');
            }
            if (filter instanceof fabric.Image.filters.Contrast) {
                const value = (filter as any).contrast ?? 0;
                setContrastOptions((prev) => (prev.ratio !== Math.round(value * 100) ? { ratio: Math.round(value * 100) } : prev));
                applied.add('Contrast')
            }
            if (filter instanceof fabric.Image.filters.Grayscale) {
                setGrayScaleOptions({ ratio: 1 });
            }
            if (filter instanceof fabric.Image.filters.Blur) {
                const value = (filter as any).blur ?? 0;
                setBlurOptions((prev) => (prev.ratio !== Math.round(value * 100) ? { ratio: Math.round(value * 100) } : prev));
                applied.add('Blur')
            }
            if (filter instanceof fabric.Image.filters.Saturation) {
                const value = (filter as any).saturation ?? 0;
                setSaturationOptions((prev) => (prev.ratio !== Math.round(value * 100) ? { ratio: Math.round(value * 100) } : prev));
                applied.add('Saturation')
            }
        });
        if (!applied.has('Brightness')) {
            setBrightnessOptions({ ratio: 0 });
        }
        if (!applied.has('Contrast')) {
            setContrastOptions({ ratio: 0 });
        }
        if (!applied.has('Grayscale')) {
            setGrayScaleOptions({ ratio: 0 });
        }
        if (!applied.has('Blur')) {
            setBlurOptions({ ratio: 1 }); // Assuming 1 is your default
        }
        if (!applied.has('Saturation')) {
            setSaturationOptions({ ratio: 0 });
        }
    }, [activeObject]);

    const applyImageFilter = (
        activeObject: fabric.Object,
        options: FilterOptions
    ) => {
        const { value, fabricFilter, propName } = options;
        const active = activeObject as fabric.Image;

        if (!active.filters) {
            active.filters = [];
        }

        const filterIndex = active.filters.findIndex(f => f instanceof fabricFilter);

        const newFilter = new fabricFilter({
            [propName]: value
        });

        if (filterIndex !== -1) {
            active.filters[filterIndex] = newFilter;
        } else {
            active.filters.push(newFilter);
        }

        active.applyFilters();
        active.metadata = {
            filters: active.filters.map((f: any) => {
                const filterData: any = { type: f.type }

                // Serializar propiedades conocidas (puedes ampliar esta lista)
                for (const key in f) {
                    if (Object.prototype.hasOwnProperty.call(f, key)) {
                        const val = f[key]
                        if (typeof val !== 'function') {
                            filterData[key] = val
                        }
                    }
                }

                return filterData
            })
        }
        forceSaveProject()
        editor.canvas?.requestRenderAll();
    };

    const filterValue = (value: number, max: number, min: number) => {
        if (value > max) return max;
        if (value < min) return min;
        return value
    }

    const removeFilter = (filterType: any): boolean => {
        if (editor && activeObject && activeObject instanceof fabric.Image) {
            const active = activeObject as fabric.Image;
            if (!active.filters || active.filters.length === 0) {
                console.log("No hay filtros para eliminar");
                return false;
            }
            const filterIndex = active.filters.findIndex(
                filter => filter instanceof filterType
            );

            if (filterIndex !== -1) {
                active.filters.splice(filterIndex, 1);
                active.applyFilters();
                editor.canvas?.requestRenderAll();
                return true;
            } else {
                return false;
            }
        }
        return false;
    };

    const removeAllFilters = (): boolean => {
        setBrightnessOptions({ ratio: 0 })
        setContrastOptions({ ratio: 0 })
        setSaturationOptions({ ratio: 0 })
        setBlurOptions({ ratio: 1 })
        setGrayScaleOptions({ ratio: 0 })
        setInvertOptions({ ratio: 0 })
        if (editor && activeObject && activeObject instanceof fabric.Image) {
            const active = activeObject as fabric.Image;
            if (!active.filters || active.filters.length === 0) {
                console.log("No hay filtros para eliminar");
                return false;
            }
            active.filters = [];
            active.applyFilters();
            active.metadata = {
                filters: []
            }
            editor.canvas?.requestRenderAll();
            return true;
        }
        return false;
    };

    const handleBrightnessChange = (value: number) => {
        const newValue = filterValue(value, ratioMax, ratioMin)
        setBrightnessOptions({ ratio: newValue });
        const brightnessValue = newValue / 100;

        if (editor) {
            if (frameRequest) cancelAnimationFrame(frameRequest);

            frameRequest = requestAnimationFrame(() => {
                applyImageFilter(activeObject as fabric.Image, {
                    value: brightnessValue,
                    fabricFilter: fabric.Image.filters.Brightness,
                    propName: "brightness"
                });
            });
        }
    };

    const handleContrastChange = (value: number) => {
        setContrastOptions({ ratio: value });
        const contrastValue = value / 100;

        if (editor) {
            if (frameRequest) cancelAnimationFrame(frameRequest);

            frameRequest = requestAnimationFrame(() => {
                applyImageFilter(activeObject as fabric.Image, {
                    value: contrastValue,
                    fabricFilter: fabric.Image.filters.Contrast,
                    propName: "contrast"
                });
            });
        }
    };

    const handleSaturationChange = (value: number) => {
        setSaturationOptions({ ratio: value })
        const saturationVale = value / 100;
        if (editor) {
            if (frameRequest) cancelAnimationFrame(frameRequest);
            frameRequest = requestAnimationFrame(() => {
                applyImageFilter(activeObject as fabric.Image, {
                    value: saturationVale,
                    fabricFilter: fabric.Image.filters.Saturation,
                    propName: "saturation"
                });
            })
        }
    };

    const handleBlurChange = (value: number) => {
        const newValue = filterValue(value, 100, 1)
        setBlurOptions({ ratio: newValue })
        const blurValue = newValue / 100
        if (editor) {
            if (frameRequest) cancelAnimationFrame(frameRequest);
            frameRequest = requestAnimationFrame(() => {
                applyImageFilter(activeObject as fabric.Image, {
                    value: blurValue,
                    fabricFilter: fabric.Image.filters.Blur,
                    propName: "blur"
                });
            })
        }
    }

    const handleGrayScale = (value: number) => {
        const newValue = filterValue(value, 1, 0)
        setGrayScaleOptions({ ratio: newValue })
        if (newValue === 1) {
            applyImageFilter(activeObject as fabric.Image, {
                value: newValue,
                fabricFilter: fabric.Image.filters.Grayscale,
                propName: "grayscale"
            })

        }
        else if (newValue === 0) {
            removeFilter(fabric.Image.filters.Grayscale)
        }

    }
    const handleInvert = (value: number) => {
        const newValue = filterValue(value, 1, 0)
        setInvertOptions({ ratio: newValue })
        if (newValue === 1) {
            applyImageFilter(activeObject as fabric.Image, {
                value: newValue,
                fabricFilter: fabric.Image.filters.Invert,
                propName: "invert"
            })

        }
        else if (newValue === 0) {
            removeFilter(fabric.Image.filters.Invert)
        }

    }

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
                <Block>Settings</Block>
                <Block
                    $style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}
                    onClick={() => setIsSidebarOpen(false)}
                    aria-label="Close Canvas Fill"
                >
                    <Delete size={24} />
                </Block>


            </Block>
            <Scrollable>
                <Block $style={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 500,
                    justifyContent: "space-between",
                    marginLeft: "10px"
                }}>
                    <Button
                        onClick={removeAllFilters}
                        kind={KIND.tertiary}>
                        Restablecer
                    </Button>
                </Block>
                <Block padding="0 1.5rem">
                    <FilterAdjuster
                        label="Brillo"
                        icon={<Sun size={18} />}
                        value={brightnessOptions.ratio}
                        min={ratioMin}
                        max={ratioMax}
                        step={1}
                        onChange={(val) => handleBrightnessChange(val)}
                        defaultValue={0}
                    />
                    <FilterAdjuster
                        label="Contraste"
                        icon={<Contrast size={18} />}
                        value={contrastOptions.ratio}
                        min={ratioMin}
                        max={ratioMax}
                        step={1}
                        onChange={(val) => handleContrastChange(val)}
                        defaultValue={0}
                    />
                    <FilterAdjuster
                        label="Saturacion"
                        icon={<Loader size={18} />}
                        value={saturationOptions.ratio}
                        min={ratioMin}
                        max={ratioMax}
                        step={1}
                        onChange={(val) => handleSaturationChange(val)}
                        defaultValue={0}
                    />
                    <FilterAdjuster
                        label="Desenfoque"
                        icon={<Droplet size={18} />}
                        value={blurOptions.ratio}
                        min={1}
                        max={100}
                        step={1}
                        onChange={(val) => handleBlurChange(val)}
                        defaultValue={1}
                    />


                </Block>
            </Scrollable>
        </Block>
    );
};

export default ImageSettings;