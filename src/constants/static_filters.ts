import { fabric } from "fabric"

export const STATIC_FILTERS = [
  { name: "Grayscale", filter: new fabric.Image.filters.Grayscale() },
  { name: "Invert", filter: new fabric.Image.filters.Invert() },
  { name: "Sepia", filter: new fabric.Image.filters.Sepia() },

  { name: "Brightness+", filter: new fabric.Image.filters.Brightness({ brightness: 0.15 }) },
  { name: "Contrast+", filter: new fabric.Image.filters.Contrast({ contrast: 0.3 }) },
  { name: "Blur", filter: new fabric.Image.filters.Blur({ blur: 0.25 }) },
  { name: "Saturation+", filter: new fabric.Image.filters.Saturation({ saturation: 0.5 }) },
  { name: "Noise", filter: new fabric.Image.filters.Noise({ noise: 300 }) },
]
