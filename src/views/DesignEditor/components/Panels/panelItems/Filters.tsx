import React, { useState } from 'react';
import useAppContext from '~/hooks/useAppContext';
import { useEditor } from '@layerhub-io/react';
import { Block } from 'baseui/block';
import ArrowBackOutline from '~/components/Icons/ArrowBackOutline';
import Delete from 'baseui/icon/delete';
import useSetIsSidebarOpen from '~/hooks/useSetIsSidebarOpen';
import Scrollable from '~/components/Scrollable';
import { Slider } from "baseui/slider"
import { Button, KIND, SIZE } from 'baseui/button';
import Icons from '~/components/Icons';
import { Input } from 'baseui/input';

interface Options {
    ratio: number
}
const Filters = () => {
    const ratioMin = -100
    const ratioMax = 100
    const [brightnessOptions, setBrightnessOptions] = React.useState<Options>({
        ratio: 1,
    })
    const [contrastOptions, setContrastOptions] = React.useState<Options>({
        ratio: 1,
    })
    const [saturationOptions, setSaturationOptions] = React.useState<Options>({
        ratio: 1,
    })
    const editor = useEditor()
    const { activePanel, setActiveSubMenu } = useAppContext();
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [saturation, setSaturation] = useState(100);
    const setIsSidebarOpen = useSetIsSidebarOpen()

    const handleBrightnessChange = (value: number) => {
        setBrightnessOptions({ ratio: value });
        console.log(brightnessOptions.ratio)
    };

    const handleContrastChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContrast(Number(e.target.value));
    };

    const handleSaturationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSaturation(Number(e.target.value));
    };



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
                    onClick={() => setIsSidebarOpen(false)}// Ocultar el componente
                    aria-label="Close Canvas Fill"
                >
                    <Delete size={24} />
                </Block>

            </Block>
            <Scrollable>
                <Block padding="0 1.5rem">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                        <Button kind={KIND.tertiary} size={SIZE.compact} onClick={() => setBrightnessOptions({ ratio: 10 })}>
                            <Icons.RemoveCircleOutline size={24} />
                        </Button>

                        <Slider
                            overrides={{
                                InnerThumb: () => null,
                                ThumbValue: () => null,
                                TickBar: () => null,
                                Root: {
                                    style: { width: "140px" },
                                },
                                Thumb: {
                                    style: {
                                        height: "12px",
                                        width: "12px",
                                        paddingLeft: 0,
                                    },
                                },
                                Track: {
                                    style: {
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                    },
                                },
                            }}
                            value={[brightnessOptions.ratio]}
                            onChange={({ value }) => {
                                handleBrightnessChange(value[0])
                            }}
                            min={ratioMin}
                            max={ratioMax}
                        />
                        <Button kind={KIND.tertiary} size={SIZE.compact} onClick={() => setBrightnessOptions({ ratio: 10 })}>
                            <Icons.AddCircleOutline size={24} />
                        </Button>
                        <Input
                            type="number"
                            value={brightnessOptions.ratio}
                            overrides={{
                                Root: {
                                    style: {
                                        width: "96px",
                                    },
                                },
                            }}
                            size={SIZE.mini}
                            max={ratioMin}
                            min={ratioMax}
                            onChange={(e: any) => handleBrightnessChange(e.target.value)}
                        />
                    </div>


                    <div style={{ marginBottom: '12px' }}>
                        <label>
                            Brightness: {brightness}%
                            <input
                                type="range"
                                min="0"
                                max="200"
                                value={brightness}
                            //onChange={handleBrightnessChange}
                            />
                        </label>
                    </div>


                    <div style={{ marginBottom: '12px' }}>
                        <label>
                            Contrast: {contrast}%
                            <input
                                type="range"
                                min="0"
                                max="200"
                                value={contrast}
                                onChange={handleContrastChange}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                        <label>
                            Saturation: {saturation}%
                            <input
                                type="range"
                                min="0"
                                max="200"
                                value={saturation}
                                onChange={handleSaturationChange}
                            />
                        </label>
                    </div>
                </Block>
            </Scrollable>
        </Block>
    );
};

export default Filters;