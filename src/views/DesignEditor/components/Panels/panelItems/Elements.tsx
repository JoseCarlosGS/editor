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
import { Button, KIND, SIZE } from "baseui/button"
import ArrowDiagonal from "~/components/Icons/ArrowDiagonal"
import DashedLineDiagonal from "~/components/Icons/DashedLineDiagonal"
import DoubleArrowDiagonal from "~/components/Icons/DoubleArrowDiagonal"
import LineDiagonal from "~/components/Icons/LineDiagonal"
import { useTranslation } from "react-i18next"

const Elements = () => {
  const editor = useEditor()
  const setIsSidebarOpen = useSetIsSidebarOpen()
  const { t } = useTranslation("editor")

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


  type LineToolOptions = {
    stroke?: string;
    strokeWidth?: number;
    isArrow?: boolean;
    dashed?: boolean;
    doubleArrow?: boolean;
    name?: string;
  };

  function createLineTool(canvas: fabric.Canvas, options: LineToolOptions = {}) {
    let isDrawing = false;
    let line: fabric.Line | null = null;

    const {
      stroke = "black",
      strokeWidth = 2,
      isArrow = false,
      dashed = false,
      doubleArrow = false,
      name = "Line",
    } = options;

    function rotatePoint(px: number, py: number, angle: number): [number, number] {
      // Rotar un punto (px, py) con un ángulo en radianes
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [
        px * cos - py * sin,
        px * sin + py * cos,
      ];
    }

    const handleMouseDown = (opt: fabric.IEvent) => {
      isDrawing = true;
      const pointer = canvas.getPointer(opt.e);
      line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
        stroke,
        strokeWidth,
        strokeDashArray: dashed ? [10, 5] : undefined,
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
      if (!line) return;

      const { x1, y1, x2, y2 } = line;
      const dx = x2! - x1!;
      const dy = y2! - y1!;
      const angle = Math.atan2(dy, dx);

      let path: any[][] = [["M", 0, 0], ["L", dx, dy]];

      if (isArrow || doubleArrow) {
        const length = 10;
        const arrowAngle = Math.PI / 6;

        const [hx1, hy1] = rotatePoint(-length, -length * Math.tan(arrowAngle), angle);
        const [hx2, hy2] = rotatePoint(-length, length * Math.tan(arrowAngle), angle);

        // Cabeza al final
        path.push(["M", dx, dy], ["L", dx + hx1, dy + hy1]);
        path.push(["M", dx, dy], ["L", dx + hx2, dy + hy2]);

        // Cabeza al inicio (para doble flecha)
        if (doubleArrow) {
          const [hx3, hy3] = rotatePoint(length, -length * Math.tan(arrowAngle), angle);
          const [hx4, hy4] = rotatePoint(length, length * Math.tan(arrowAngle), angle);

          path.push(["M", 0, 0], ["L", hx3, hy3]);
          path.push(["M", 0, 0], ["L", hx4, hy4]);
        }
      }

      const pathString = path.map(([cmd, ...coords]) => `${cmd} ${coords.join(" ")}`).join(" ");

      const fabricPath = new fabric.Path(pathString, {
        left: Math.min(line.x1!, line.x2!),
        top: Math.min(line.y1!, line.y2!),
        stroke,
        strokeWidth,
        strokeDashArray: dashed ? [10, 5] : undefined,
        fill: "",
        originX: "left",
        originY: "top",
        name,
        type: "StaticPath",
      });

      canvas.add(fabricPath);
      canvas.remove(line);
      canvas.requestRenderAll();

      isDrawing = false;
      line = null;

      canvas.off("mouse:down", handleMouseDown);
      canvas.off("mouse:move", handleMouseMove);
      canvas.off("mouse:up", handleMouseUp);
    };

    // Activar listeners
    canvas.on("mouse:down", handleMouseDown);
    canvas.on("mouse:move", handleMouseMove);
    canvas.on("mouse:up", handleMouseUp);
  }

  const enableDashedLineTool = () => {
    const canvas = editor.canvas.canvas;
    createLineTool(canvas, { dashed: true, name: "DashedLine" });
  };

  const enableDoubleArrowTool = () => {
    const canvas = editor.canvas.canvas;
    createLineTool(canvas, { isArrow: true, doubleArrow: true, name: "DoubleArrow" });
  };

  const enableLineTool = () => {
    const canvas = editor.canvas.canvas;
    let isDrawing = false;
    let line: fabric.Line | null = null;

    const upperCanvas = (editor.canvas.canvas as any).upperCanvasEl;
    upperCanvas.style.setProperty("cursor", "crosshair", "important");

    const handleMouseDown = (opt: fabric.IEvent) => {
      isDrawing = true;
      const pointer = canvas.getPointer(opt.e);
      line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
        stroke: "black",
        strokeWidth: 3,
        selectable: false,
        evented: false,
      });
      canvas.add(line);
      canvas.defaultCursor = 'grabbing';
    };

    const handleMouseMove = (opt: fabric.IEvent) => {
      if (!isDrawing || !line) return;
      const pointer = canvas.getPointer(opt.e);
      line.set({ x2: pointer.x, y2: pointer.y });
      canvas.requestRenderAll();
    };

    const handleMouseUp = () => {
      if (line) {
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
      canvas.defaultCursor = 'crosshair';
      canvas.off("mouse:down", handleMouseDown);
      canvas.off("mouse:move", handleMouseMove);
      canvas.off("mouse:up", handleMouseUp);
    };

    // Agregamos los listeners una sola vez por activación
    canvas.on("mouse:down", handleMouseDown);
    canvas.on("mouse:move", handleMouseMove);
    canvas.on("mouse:up", handleMouseUp);
    //canvas.defaultCursor = originalCursor;
  };

  const enableArrowTool = () => {
    const canvas = editor.canvas.canvas;
    let isDrawing = false;
    let line: fabric.Line | null = null;

    // 👉 Rotar un punto (px, py) con un ángulo en radianes
    function rotatePoint(px: number, py: number, angle: number): [number, number] {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [
        px * cos - py * sin,
        px * sin + py * cos,
      ];
    }

    const handleMouseDown = (opt: fabric.IEvent) => {
      isDrawing = true;
      const pointer = canvas.getPointer(opt.e);
      line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
        stroke: "black",
        strokeWidth: 3,
        selectable: false,
        evented: false,
      });
      canvas.add(line);
      canvas.defaultCursor = "grabbing";
    };

    const handleMouseMove = (opt: fabric.IEvent) => {
      if (!isDrawing || !line) return;
      const pointer = canvas.getPointer(opt.e);
      line.set({ x2: pointer.x, y2: pointer.y });
      canvas.requestRenderAll();
    };

    const handleMouseUp = () => {
      if (line) {
        const { x1, y1, x2, y2 } = line;
        const dx = x2! - x1!;
        const dy = y2! - y1!;
        const angle = Math.atan2(dy, dx);

        const length = 10;
        const arrowAngle = Math.PI / 6; // 30°

        // Calculamos las 2 puntas rotadas
        const [hx1, hy1] = rotatePoint(-length, -length * Math.tan(arrowAngle), angle);
        const [hx2, hy2] = rotatePoint(-length, length * Math.tan(arrowAngle), angle);

        const arrowPath: any[][] = [
          ["M", 0, 0],                // Inicio de la línea
          ["L", dx, dy],              // Fin de la línea
          ["M", dx, dy],              // Punto base de la cabeza
          ["L", dx + hx1, dy + hy1],  // Primera ala
          ["M", dx, dy],
          ["L", dx + hx2, dy + hy2],  // Segunda ala
        ];

        const staticPath = {
          id: String(Date.now()),
          name: "Arrow",
          type: "StaticPath",
          left: Math.min(line.x1!, line.x2!),
          top: Math.min(line.y1!, line.y2!),
          width: Math.abs(dx),
          height: Math.abs(dy),
          path: arrowPath,
          stroke: line.stroke as string,
          strokeWidth: line.strokeWidth!,
          fill: "",
          metadata: {},
        };

        const pathString = arrowPath.map(([cmd, ...coords]) => `${cmd} ${coords.join(" ")}`).join(" ");

        const fabricPath = new fabric.Path(pathString, {
          left: staticPath.left,
          top: staticPath.top,
          stroke: staticPath.stroke,
          strokeWidth: staticPath.strokeWidth,
          fill: staticPath.fill,
          originX: "left",
          originY: "top",
          name: staticPath.name,
          type: staticPath.type,
        });

        fabricPath.set({ id: staticPath.id });

        canvas.add(fabricPath);
        canvas.remove(line);
        canvas.requestRenderAll();
      }

      isDrawing = false;
      line = null;

      canvas.off("mouse:down", handleMouseDown);
      canvas.off("mouse:move", handleMouseMove);
      canvas.off("mouse:up", handleMouseUp);
    };

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
        <Block>{t(`panels.elements.elements`)}</Block>

        <Block onClick={() => setIsSidebarOpen(false)} $style={{ cursor: "pointer", display: "flex" }}>
          <AngleDoubleLeft size={18} />
        </Block>
      </Block>
      <Scrollable>
        <Block>
          <Block $style={{ marginLeft: "20px" }}>
            {t(`panels.elements.lines`)}
          </Block>
          <Block $style={{ display: "grid", gap: "8px", padding: "1.5rem", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
            <Button
              onClick={enableLineTool}
              size={SIZE.mini}
              kind={KIND.tertiary}
            >
              <LineDiagonal size={40} />
            </Button>
            <Button
              onClick={enableArrowTool}
              size={SIZE.mini}
              kind={KIND.tertiary}
            >
              <ArrowDiagonal size={40} />
            </Button>
            <Button
              onClick={enableDashedLineTool}
              size={SIZE.mini}
              kind={KIND.tertiary}
            >
              <DashedLineDiagonal size={40} />
            </Button>
            <Button
              onClick={enableDoubleArrowTool}
              size={SIZE.mini}
              kind={KIND.tertiary}
            >
              <DoubleArrowDiagonal size={40} />
            </Button>
            {/* {lines.map((graphic, index) => (
              <ImageItem onClick={() => addObject(graphic)} key={index} preview={graphic!.preview} />
            ))} */}
          </Block>
        </Block>
        <Block>
          <Block $style={{ marginLeft: "20px" }}>
            {t(`panels.elements.forms`)}
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
            {t(`panels.elements.custom`)}
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
