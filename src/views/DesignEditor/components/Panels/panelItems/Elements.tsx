import React, { useCallback, useEffect } from "react"
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
import { ILayer, IStaticPath } from "@layerhub-io/types"
import { Button, KIND, SIZE } from "baseui/button"
import { PencilLine } from "lucide-react"

const Elements = () => {
  const editor = useEditor()
  const setIsSidebarOpen = useSetIsSidebarOpen()

  useEffect(() => {
    const canvas = editor.canvas.canvas;

    // Elimina listeners anteriores (por seguridad)
    canvas.off("mouse:dblclick", handleDoubleClick);

    // Agrega el nuevo listener SOLO una vez
    canvas.on("mouse:dblclick", handleDoubleClick);

    return () => {
      // Limpieza al desmontar
      canvas.off("mouse:dblclick", handleDoubleClick);
    };
  }, [editor]);

  const addObject = React.useCallback(
    (item: any) => {
      if (editor) {
        editor.objects.add(item)
      }
    },
    [editor]
  );

  const enableLineTool = () => {
    const canvas = editor.canvas.canvas;
    let isDrawing = false;
    let line: fabric.Line | null = null;

    const handleMouseDown = (opt: fabric.IEvent) => {
      isDrawing = true;
      const pointer = canvas.getPointer(opt.e);
      line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
        stroke: "black",
        strokeWidth: 2,
        selectable: false,
        evented: false,
      });
      canvas.add(line);
    };

    const handleMouseMove = (opt: fabric.IEvent) => {
      if (!isDrawing || !line) return;
      const pointer = canvas.getPointer(opt.e);
      line.set({ x2: pointer.x, y2: pointer.y });
      canvas.requestRenderAll();
    };

    const handleMouseUp = () => {
      if (line) {
        // Convertir a StaticPath
        const pathData = [
          ["M", line.x1, line.y1],
          ["L", line.x2, line.y2],
        ];

        const staticPath = {
          id: String(Date.now()),
          name: "Line",
          type: "StaticPath",
          left: Math.min(line.x1!, line.x2!),
          top: Math.min(line.y1!, line.y2!),
          width: Math.abs(line.x2! - line.x1!),
          height: Math.abs(line.y2! - line.y1!),
          path: pathData,
          stroke: line.stroke as string,
          strokeWidth: line.strokeWidth!,
          fill: "",
          metadata: {},
        };
        const fabricPath = new fabric.Path(staticPath.path.map(([cmd, ...coords]) => `${cmd} ${coords.join(' ')}`).join(' '), {
          left: staticPath.left,
          top: staticPath.top,
          stroke: staticPath.stroke,
          strokeWidth: staticPath.strokeWidth,
          fill: staticPath.fill,
          originX: "left",
          originY: "top",
          name: "Line",
          type: "StaticPath",
        });
        fabricPath.set({
          id: staticPath.id,
        });

        //editor.objects.add(staticPath)
        canvas.add(fabricPath);
        canvas.remove(line);
        canvas.requestRenderAll();

      }

      isDrawing = false;
      line = null;

      // ❗ Importante: quitar los listeners para salir del modo dibujo
      canvas.off("mouse:down", handleMouseDown);
      canvas.off("mouse:move", handleMouseMove);
      canvas.off("mouse:up", handleMouseUp);
    };

    // Agregamos los listeners una sola vez por activación
    canvas.on("mouse:down", handleMouseDown);
    canvas.on("mouse:move", handleMouseMove);
    canvas.on("mouse:up", handleMouseUp);
  };

  const handleDoubleClick = useCallback((opt: fabric.IEvent) => {
    const target = opt.target;
    if (target && target.type === "StaticPath" && target.name === "Line") {
      const canvas = editor.canvas.canvas;

      const path = (target as fabric.Path).path as unknown as any[][] | undefined;
      if (!path || path.length < 2) return;

      const [moveCmd, lineCmd] = path;
      const [, x1, y1] = moveCmd;
      const [, x2, y2] = lineCmd;

      canvas.remove(target);

      const editableLine = new fabric.Line([x1, y1, x2, y2], {
        stroke: "black",
        strokeWidth: 2,
        selectable: true,
        hasControls: false,
        hasBorders: false,
        evented: true,
      });

      const pointer1 = new fabric.Circle({
        radius: editableLine.strokeWidth! * 5,
        left: x1,
        top: y1,
        fill: "blue",
        opacity: 0.4,
        originX: "center",
        originY: "center",
        hasControls: false,
      });

      const pointer2 = new fabric.Circle({
        radius: editableLine.strokeWidth! * 5,
        left: x2,
        top: y2,
        fill: "blue",
        opacity: 0.4,
        originX: "center",
        originY: "center",
        hasControls: false,
      });

      canvas.add(editableLine, pointer1, pointer2);
      canvas.setActiveObject(editableLine);
      canvas.requestRenderAll();

      pointer1.set({ name: "pointer1" });
      pointer2.set({ name: "pointer2" });
      editableLine.set({
        selectable: false,
        evented: false,
      });

      // Escuchar cuando cualquier objeto se mueve
      canvas.on("object:moving", (e) => {
        const target = e.target;
        if (!target || !editableLine) return;

        if (target.name === "pointer1") {
          editableLine.set({
            x1: target.left,
            y1: target.top,
          });
        } else if (target.name === "pointer2") {
          editableLine.set({
            x2: target.left,
            y2: target.top,
          });
        }

        editableLine.setCoords(); // Asegura actualización de hitbox
        canvas.requestRenderAll(); // Redibuja el canvas
      });
      const finalizeEditableLine = () => {
        // Obtener los extremos actualizados
        const newX1 = pointer1.left!;
        const newY1 = pointer1.top!;
        const newX2 = pointer2.left!;
        const newY2 = pointer2.top!;

        // Eliminar los objetos del canvas
        canvas.remove(editableLine, pointer1, pointer2);

        // Crear nuevo objeto StaticPath compatible con Layerhub
        const minX = Math.min(newX1, newX2);
        const minY = Math.min(newY1, newY2);

        const newStaticPath = {
          id: String(Date.now()),
          name: "Line",
          type: "StaticPath",
          left: minX,
          top: minY,
          width: Math.abs(newX2 - newX1),
          height: Math.abs(newY2 - newY1),
          path: [
            ["M", newX1 - minX, newY1 - minY],
            ["L", newX2 - minX, newY2 - minY],
          ],
          stroke: editableLine.stroke as string,
          strokeWidth: editableLine.strokeWidth!,
          fill: "",
          metadata: {},
          originX: "left",
          originY: "top",
        };

        const fabricPath = new fabric.Path(newStaticPath.path.map(([cmd, ...coords]) => `${cmd} ${coords.join(' ')}`).join(' '), {
          left: newStaticPath.left,
          top: newStaticPath.top,
          stroke: newStaticPath.stroke,
          strokeWidth: newStaticPath.strokeWidth,
          fill: newStaticPath.fill,
          originX: newStaticPath.originX,
          originY: newStaticPath.originY,
          type: "StaticPath",
          name: "Line"
        });
        fabricPath.set({
          id: newStaticPath.id,
        });
        console.log({ fabricPath })
        editor.canvas.canvas.add(fabricPath);
      };

      // Escuchar cuando los pointers son modificados
      pointer1.on("modified", finalizeEditableLine);
      pointer2.on("modified", finalizeEditableLine);
    }
  }, []);


  function endPointOfLineToFollowPointer(o: any) {
    let obj = o.target;
    let canvas = editor.canvas.canvas;

    if (obj && obj.id === 'pointer1') {
      canvas.getActiveObjects().forEach((object: any) => {
        if (o.name === 'Line') {
          o.set({
            x1: o.left,
            y1: o.top,
          })
          o.setCoords();
        }
      })
    }

  }

  const handleAddSvg = (svgString: string) => {
    fabric.loadSVGFromString(svgString, (objects, options) => {
      const group = fabric.util.groupSVGElements(objects, options);
      group.clone((clonedGroup: any) => {
        const bounds = clonedGroup.getBoundingRect(true, true);
        const tempCanvas = new fabric.StaticCanvas(null, {
          width: bounds.width,
          height: bounds.height,
        });

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
          multiplier: 3,
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
            <Button
              onClick={enableLineTool}
              size={SIZE.mini}
              kind={KIND.secondary}
            >
              <PencilLine size={24} />
            </Button>
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
