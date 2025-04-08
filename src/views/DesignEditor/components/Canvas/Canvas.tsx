import { Canvas as LayerhubCanvas } from "@layerhub-io/react"
import Playback from "../Playback"
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import ContextMenu from "../ContextMenu"
import { useEditor, useZoomRatio } from "@layerhub-io/react"
import React, {useState, useRef, useEffect } from "react"
import { use } from "i18next"

const Canvas = () => {
  const { displayPlayback } = useDesignEditorContext();
  const editor = useEditor();
  const zoomRatio: number = useZoomRatio();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSetup, setIsSetup] = useState(false);

  const updateCanvasSize = () => {
    if (!editor || !editor.frame || !editor.frame.frame) return;
    
    console.log("Current zoom ratio:", zoomRatio);
    

    const scrollContainer = document.getElementById("layerhub-scroll-container");
    if (!scrollContainer) return;
    
    try {
      // Obtener el frame y sus dimensiones
      const frame = editor.frame.frame;

      const canvas = editor.canvas.canvas;
      

      console.log("Frame dimensions:", frame.width, frame.height);
      
      // Calcular dimensiones con zoom
      const frameWidth = frame.width || 800; 
      const frameHeight = frame.height || 600;

      const canvasWidth = canvas.width || 800;
      const canvasHeight = canvas.height || 600;

      console.log(`canvas size: ${canvasWidth} x ${canvasHeight}`);
      
      // Agregar un margen para permitir espacio alrededor del diseño
      const margin = 200;

      const zoomedCanvasWidth = canvasHeight * zoomRatio;
      const zoomedCanvasHeight = canvasHeight * zoomRatio;

      console.log(`zoomed canvas size: ${zoomedCanvasWidth} x ${zoomedCanvasHeight}`);
      
      // Calcular tamaños con zoom
      const zoomedWidth = frameWidth * zoomRatio;
      const zoomedHeight = frameHeight * zoomRatio;
      
      // Obtener el contenedor del canvas
      const fabricContainer = scrollContainer.querySelector(".canvas-container") as HTMLElement;
      if (fabricContainer) {
        // Establecer dimensiones mínimas para el contenedor del canvas
        fabricContainer.style.minWidth = `${zoomedWidth}px`;
        fabricContainer.style.minHeight = `${zoomedHeight}px`;
        fabricContainer.style.width = `${zoomedWidth}px`;
        fabricContainer.style.height = `${zoomedHeight}px`;

        if(zoomRatio > 0.4 && zoomRatio < 0.7) {
          canvas.setDimensions({ width: canvasWidth, height: canvasHeight+ (zoomedCanvasHeight * 0.1) });
          console.log(`Canvas height increased to: ${canvas.height}`);
        }
        if(zoomRatio >= 0.7) { 
          canvas.setDimensions({ width: canvasWidth + (zoomedCanvasWidth * 0.1), height: canvasHeight + (zoomedCanvasHeight * 0.1) });
        }

        
        // Centrar el contenido en el área de visualización
        if (scrollContainer.clientWidth > zoomedWidth + margin) {
          const leftMargin = (scrollContainer.clientWidth - (zoomedWidth + margin)) / 2;
          fabricContainer.style.marginLeft = '0px';
        } else {
          fabricContainer.style.marginLeft = '0px';
        }
        
        if (scrollContainer.clientHeight > zoomedHeight + margin) {
          const topMargin = (scrollContainer.clientHeight - (zoomedHeight + margin)) / 2;
          fabricContainer.style.marginTop = '0px';
        } else {
          fabricContainer.style.marginTop = '0px';
        }
      }
    } catch (error) {
      console.error("Error updating canvas size:", error);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // IMPORTANTE: No configuramos overflow:auto aquí todavía
    // para no afectar a toda la pantalla
    container.style.position = "relative";
    container.style.overflow = "hidden";
    
    console.log("Canvas container initialized");
  }, []);

  useEffect(() => {
    if (!editor || !editor.canvas || !containerRef.current) return;
    
    console.log("Editor is ready, setting up zoom behavior");
    
    const setupScrollArea = () => {
      // Esperamos a que el editor esté completamente inicializado
      if (!editor.canvas || !editor.frame) {
        console.log("Editor components not ready yet");
        return false;
      }
      
      // Buscar el contenedor del canvas de fabric
      const container = containerRef.current;
      const fabricCanvasContainer = container?.querySelector(".canvas-container");
      
      if (!fabricCanvasContainer) {
        console.log("Canvas container not found, trying again later");
        return false;
      }
      
      console.log("Found canvas container:", fabricCanvasContainer);
      
      // Verificar si ya existe el contenedor de scroll
      let scrollContainer = document.getElementById("layerhub-scroll-container");
      
      if (!scrollContainer) {
        console.log("Creating scroll container");
        
        // Crear un contenedor de desplazamiento específico
        scrollContainer = document.createElement("div");
        scrollContainer.id = "layerhub-scroll-container";
        scrollContainer.style.overflow = "auto";
        scrollContainer.style.position = "absolute";
        scrollContainer.style.top = "0";
        scrollContainer.style.left = "0";
        scrollContainer.style.right = "0";
        scrollContainer.style.bottom = "0";
        scrollContainer.style.width = "100%";
        scrollContainer.style.height = "100%";
        
        // Insertar el contenedor de desplazamiento en la posición correcta
        // Asegurarnos de que está antes que el canvas para que los controles funcionen bien
        if (fabricCanvasContainer.parentNode) {
          fabricCanvasContainer.parentNode.insertBefore(scrollContainer, fabricCanvasContainer);
          scrollContainer.appendChild(fabricCanvasContainer);
        }
      }
      
      // Importante: Ajustar el tamaño inicial del canvas
      setTimeout(() => {
        // Ahora la función está disponible aquí
        updateCanvasSize();
        setIsSetup(true);
      }, 100);
      return true;
    };
    
    // Intentar configurar el área de desplazamiento
    const setupResult = setupScrollArea();

    if (!setupResult) {
      console.log("Setup not complete, retrying...");
      const retryInterval = setInterval(() => {
        const setupSuccess = setupScrollArea();
        if (setupSuccess) {
          clearInterval(retryInterval);
          console.log("Setup completed successfully");
        }
      }, 500);
      
      // Limpiar el intervalo después de un tiempo máximo (5s)
      setTimeout(() => clearInterval(retryInterval), 5000);
      
      return () => {
        clearInterval(retryInterval);
      };
    }
    
  }, [editor, zoomRatio]);
     
  useEffect(() => {
    if (!editor || !isSetup) return;
    
    // Escuchar cambios de zoom
    const handleZoomChange = () => {
      updateCanvasSize();
    };
    updateCanvasSize();

    editor.on("zoom:change", handleZoomChange);
    
    // También manejar cambios en el frame (cuando se cambia el tamaño del diseño)
    editor.on("frame:updated", handleZoomChange);
    
    return () => {
      editor.off("zoom:change", handleZoomChange);
      editor.off("frame:updated", handleZoomChange);
    };
  }, [editor, zoomRatio, isSetup]);

  return (
    <div 
    ref={containerRef}
    className="layerhub-canvas-container"
    style={{ flex: 1, 
    display: "flex", 
    position: "relative",
    overflow: "hidden",}}>
      {displayPlayback && <Playback />}
      <ContextMenu />
      <LayerhubCanvas
        config={{
          background: "#f1f2f6",
          controlsPosition: {
            rotation: "BOTTOM",
          },
          shadow: {
            blur: 4,
            color: "#fcfcfc",
            offsetX: 0,
            offsetY: 0,
          },
        }}
      />
    </div>
  )
}

export default Canvas
