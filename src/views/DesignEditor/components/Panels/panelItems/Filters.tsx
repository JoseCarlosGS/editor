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
import { useStyletron, styled } from 'styletron-react';
import { ILayer } from '@layerhub-io/types';

interface Options {
    ratio: number
}
const Filters = () => {
    const editor = useEditor()
    const canvas = editor.canvas.canvas
    const activeObject = useActiveObject() as ILayer;
    let frameRequest: number | null = null;
    const ratioMin = -100
    const ratioMax = 100
    const [previews, setPreviews] = useState<{ name: string; preview: string }[]>([]);

    const STATIC_FILTERS = [
        { name: "Grayscale", filter: new fabric.Image.filters.Grayscale() },
        { name: "Invert", filter: new fabric.Image.filters.Invert() },
        { name: "Sepia", filter: new fabric.Image.filters.Sepia() },

        { name: "Brightness+", filter: new fabric.Image.filters.Brightness({ brightness: 0.15 }) },
        { name: "Contrast+", filter: new fabric.Image.filters.Contrast({ contrast: 0.3 }) },
        { name: "Blur", filter: new fabric.Image.filters.Blur({ blur: 0.25 }) },
        { name: "Saturation+", filter: new fabric.Image.filters.Saturation({ saturation: 0.5 }) },
        { name: "Noise", filter: new fabric.Image.filters.Noise({ noise: 300 }) },
    ];

    const { activePanel, setActiveSubMenu } = useAppContext();
    const setIsSidebarOpen = useSetIsSidebarOpen()

    useEffect(() => {
        if (!activeObject) return;

        const img = new Image();
        img.crossOrigin = "anonymous"; // necesario si cargas imágenes externas
        img.src = activeObject.preview!;

        img.onload = () => {
            const fabricImg = new fabric.Image(img, {
                selectable: false,
                evented: false,
            });

            const previewsPromises = STATIC_FILTERS.map(({ name, filter }) => {
                return new Promise<{ name: string; preview: string }>((resolve) => {
                    fabricImg.clone((clone: any) => {

                        clone.filters = [filter];
                        clone.applyFilters();

                        const canvas = new fabric.StaticCanvas(null, {
                            width: 100,
                            height: 100,
                        });

                        canvas.add(clone);
                        clone.scaleToWidth(100);
                        clone.scaleToHeight(100);
                        canvas.renderAll();

                        resolve({ name, preview: canvas.toDataURL() });
                    });
                });
            });

            Promise.all(previewsPromises).then(setPreviews);
        };
    }, [activeObject]);


    const removeFilter = (filterType: any): boolean => {
        if (editor && activeObject && activeObject instanceof fabric.Image) {
            const active = activeObject as fabric.Image;
            if (!active.filters || active.filters.length === 0) {
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
        if (editor && activeObject && activeObject instanceof fabric.Image) {
            const active = activeObject as fabric.Image;
            if (!active.filters || active.filters.length === 0) {
                return false;
            }
            active.filters = [];
            active.applyFilters();
            editor.canvas?.requestRenderAll();
            return true;
        }
        return false;
    };

    const applyFilterByName = (name: string) => {
        const filter = STATIC_FILTERS.find(f => f.name === name)?.filter;
        if (!filter || !editor) return;
        removeAllFilters()
        const active = activeObject as fabric.Image;
        if (!active.filters) active.filters = [];
        active.filters = active.filters.filter(
            f => !(f instanceof fabric.Image.filters.Grayscale || f instanceof fabric.Image.filters.Invert || f instanceof fabric.Image.filters.Sepia)
        );

        active.filters.push(filter);
        active.applyFilters();
        editor.canvas?.requestRenderAll();
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
                <Block>Filters</Block>
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
                    <div style={{ display: "grid", gap: "8px", gridTemplateColumns: "1fr 1fr" }}>
                        {previews.map(({ name, preview }) => (
                            <ImageItem
                                key={name}
                                preview={preview}
                                onClick={() => applyFilterByName(name)}
                            />
                        ))}
                        {/* <ImageItem onClick={() => handleGrayScale(1)} preview={activeObject.preview} /> */}
                    </div>
                </Block>
            </Scrollable>
        </Block>
    );
};

const ImageItem = ({ preview, onClick }: { preview: any; onClick?: (option: any) => void }) => {
    const [css] = useStyletron()
    return (
        <div
            onClick={onClick}
            className={css({
                position: "relative",
                background: "#f8f8fb",
                cursor: "pointer",
                borderRadius: "8px",
                overflow: "hidden",
                "::before:hover": {
                    opacity: 1,
                },
            })}
        >
            <div
                className={css({
                    backgroundImage: `linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0.006) 8.1%,
          rgba(0, 0, 0, 0.022) 15.5%,
          rgba(0, 0, 0, 0.047) 22.5%,
          rgba(0, 0, 0, 0.079) 29%,
          rgba(0, 0, 0, 0.117) 35.3%,
          rgba(0, 0, 0, 0.158) 41.2%,
          rgba(0, 0, 0, 0.203) 47.1%,
          rgba(0, 0, 0, 0.247) 52.9%,
          rgba(0, 0, 0, 0.292) 58.8%,
          rgba(0, 0, 0, 0.333) 64.7%,
          rgba(0, 0, 0, 0.371) 71%,
          rgba(0, 0, 0, 0.403) 77.5%,
          rgba(0, 0, 0, 0.428) 84.5%,
          rgba(0, 0, 0, 0.444) 91.9%,
          rgba(0, 0, 0, 0.45) 100%)`,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    height: "100%",
                    width: "100%",
                    ":hover": {
                        opacity: 1,
                    },
                })}
            />
            <img
                src={preview}
                className={css({
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    pointerEvents: "none",
                    verticalAlign: "middle",
                })}
            />
        </div>
    )
}

export default Filters;