import React from "react";
import { Button, SIZE, KIND } from "baseui/button";
import { Slider } from "baseui/slider";
import { Input } from "baseui/input";
import { Block } from "baseui/block";
import AddCircleOutline from "~/components/Icons/AddCircleOutline";
import RemoveCircleOutline from "~/components/Icons/RemoveCircleOutline";
import { filter } from "lodash";

type FilterAdjusterProps = {
    label: string;
    icon?: React.ReactNode;
    value: number;
    min: number;
    max: number;
    step?: number;
    onChange: (val: number) => void;
    defaultValue?: number;
};

const FilterAdjuster: React.FC<FilterAdjusterProps> = ({
    label,
    icon,
    value,
    min,
    max,
    step = 1,
    onChange,
    defaultValue = 0,
}) => {
    const handleButtonChange = (delta: number) => {
        const newValue = Math.max(min, Math.min(max, value + delta));
        onChange(newValue);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const val = parseFloat(e.target.value);
        if (!isNaN(val)) onChange(val);
    };

    const filterValue = (value: number) => {
        if (value > max) return max
        if (value < min) return min
        return value
    }

    return (
        <Block $style={{ marginTop: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {icon}
                <span style={{ fontSize: "15px", fontWeight: 500 }}>{label}</span>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                }}
            >
                <Button kind={KIND.tertiary} size={SIZE.mini} onClick={() => handleButtonChange(-step)}>
                    –
                </Button>

                <Slider
                    value={[value]}
                    min={min}
                    max={max}
                    step={step}
                    onChange={({ value }) => onChange(value[0])}
                    overrides={{
                        InnerThumb: () => null,
                        ThumbValue: () => null,
                        TickBar: () => null,
                        Root: { style: { width: "140px" } },
                        Thumb: { style: { height: "12px", width: "12px", paddingLeft: 0 } },
                        Track: { style: { paddingLeft: 0, paddingRight: 0 } },
                    }}
                />

                <Button kind={KIND.tertiary} size={SIZE.mini} onClick={() => handleButtonChange(step)}>
                    +
                </Button>

                <Input
                    type="number"
                    value={filterValue(value)}
                    onChange={handleInputChange}
                    size={SIZE.mini}
                    min={min}
                    max={max}
                    overrides={{
                        Root: {
                            style: {
                                width: "80px",
                            },
                        },
                    }}
                />
            </div>
        </Block>
    );
};

export default FilterAdjuster;
