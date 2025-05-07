import React from "react"
import { useEditor } from "@layerhub-io/react"
import { useStyletron } from "baseui"
import { Block } from "baseui/block"
import AngleDoubleLeft from "~/components/Icons/AngleDoubleLeft"
import Scrollable from "~/components/Scrollable"
import { graphics } from "~/constants/mock-data"
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen"
import { customElements, lines } from "~/constants/custom-elements"
import { svgElements } from "~/constants/svg-elements"
import { fabric } from "fabric"
import { nanoid } from "nanoid"

const Elements = () => {
  const editor = useEditor()
  const setIsSidebarOpen = useSetIsSidebarOpen()

  const addObject = React.useCallback(
    (item: any) => {
      if (editor) {
        editor.objects.add(item)
      }
    },
    [editor]
  )

  const handleAddSvg = (svgString: string) => {
    fabric.loadSVGFromString(svgString, (objects, options) => {
      const group = fabric.util.groupSVGElements(objects, options);
      group.clone((clonedGroup: any) => {
        const bounds = clonedGroup.getBoundingRect(true, true); // Incluye transformaciones

        const tempCanvas = new fabric.StaticCanvas(null, {
          width: bounds.width,
          height: bounds.height,
        });

        // Reposicionar el grupo para que esté dentro del canvas temporal
        clonedGroup.set({
          left: bounds.width / 2,
          top: bounds.height / 2,
          originX: 'center',
          originY: 'center',
        });

        tempCanvas.add(clonedGroup);
        tempCanvas.renderAll();

        const dataUrl = tempCanvas.toDataURL({
          format: 'png',
          multiplier: 3, // Aumenta este valor si ves que se pixela
        });

        fabric.Image.fromURL(dataUrl, (img) => {
          img.set({
            id: nanoid(),
            name: "StaticImage",
            left: group.left,
            top: group.top,
            scaleX: 1,
            scaleY: 1,
            originX: 'left',
            originY: 'top',
            type: "StaticImage"
          });

          editor.objects.add({
            type: "StaticImage",
            src: img.getSrc(),
            id: img.id,
            name: img.name,
            left: img.left,
            top: img.top,
            scaleX: img.scaleX,
            scaleY: img.scaleY,
            originX: img.originX,
            originY: img.originY,
          })
          //editor.canvas.canvas.add(img);
        });
      });

    });
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
        <Block>Elements</Block>

        <Block onClick={() => setIsSidebarOpen(false)} $style={{ cursor: "pointer", display: "flex" }}>
          <AngleDoubleLeft size={18} />
        </Block>
      </Block>
      <Scrollable>
        <Block>
          <Block $style={{ marginLeft: "20px" }}>
            Lines
          </Block>
          <Block $style={{ display: "grid", gap: "8px", padding: "1.5rem", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
            {lines.map((graphic, index) => (
              <ImageItem onClick={() => addObject(graphic)} key={index} preview={graphic!.preview} />
            ))}
          </Block>
        </Block>
        <Block>
          <Block $style={{ marginLeft: "20px" }}>
            Forms
          </Block>
          <Block $style={{ display: "grid", gap: "8px", padding: "1.5rem", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
            {graphics.map((graphic, index) => (
              <ImageItem
                onClick={() => addObject(graphic)}
                key={index}
                preview={graphic.preview} />
            ))}
          </Block>
        </Block>
        <Block>
          <Block $style={{ marginLeft: "20px" }}>
            Custom
          </Block>
          <Block $style={{ display: "grid", gap: "8px", padding: "1.5rem", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
            {customElements.map((graphic, index) => (
              <ImageItem
                onClick={() => addObject(graphic)}
                key={index}
                preview={graphic.preview} />
            ))}
          </Block>
        </Block>
        <Block>
          <Block $style={{ marginLeft: "20px" }}>
            Emoji
          </Block>
          <Block $style={{ display: "grid", gap: "8px", padding: "1.5rem", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
            {svgElements.map((graphic, index) => (
              <ImageItem
                onClick={() => handleAddSvg(graphic.svg)}
                key={index}
                preview={graphic.preview} />
            ))}
          </Block>
        </Block>
      </Scrollable>
    </Block>
  )
}

const ImageItem = ({ preview, onClick }: { preview: any; onClick?: (option: any) => void }) => {
  const [css] = useStyletron()
  return (
    <div
      onClick={onClick}
      className={css({
        position: "relative",
        //background: "#f8f8fb",
        cursor: "pointer",
        borderRadius: "8px",
        overflow: "hidden",
        ":hover": {
          opacity: 1,
          background: "rgb(233,233,233)",
        },
      })}
    >
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

export default Elements
