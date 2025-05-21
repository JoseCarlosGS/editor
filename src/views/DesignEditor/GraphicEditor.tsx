import Navbar from "./components/Navbar"
import Panels from "./components/Panels"
import Canvas from "./components/Canvas"
import Footer from "./components/Footer"
import Toolbox from "./components/Toolbox"
import EditorContainer from "./components/EditorContainer"
import { useLocation } from "react-router-dom";
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import { useEditor } from "@layerhub-io/react"
import { useEffect, useState } from "react"
import api from "~/services/api"
import { useLoadGraphicTemplate } from "../../hooks/useLoadTemplate"
import { IDesign } from "~/interfaces/DesignEditor"
import { useActiveObject } from "@layerhub-io/react"
import { ILayer } from "@layerhub-io/types"
import { useAutosaveProject } from "~/hooks/useAutoSaveProject"
import CustomAlert from "~/components/Errors"
import { ErrorType } from "~/components/Errors/CustomAlert"

declare global {
  interface Window {
    editor: any;
  }
}

const GraphicEditor = () => {
  const location = useLocation();
  const editor = useEditor();
  const active = useActiveObject();
  const [autosaveKey, setAutosaveKey] = useState<string | null>(null);
  const { currentDesign, scenes, currentScene } = useDesignEditorContext();
  const [loadingProject, setLoadingProject] = useState(false)
  const [projectLoaded, setProjectLoaded] = useState(false);
  const [designLoaded, setDesignLoaded] = useState(false);
  const { setEditorType, setScenes, setCurrentDesign: originalSetCurrentDesign } = useDesignEditorContext()
  const setCurrentDesign = (design: Partial<IDesign>) => {
    originalSetCurrentDesign((prev) => ({ ...prev, ...design }));
  };

  const personaId = sessionStorage.getItem('persona_id')
  const queryParams = new URLSearchParams(location.search);
  const filename = queryParams.get("filename");
  const renderMode = queryParams.get("render_mode");
  //const personaId = queryParams.get("personaId");
  const eventoId = queryParams.get("eventoId");
  const [showToolbox, setShowToolbox] = useState(false)
  const [loadedNew, setLoadedNew] = useState(false)
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    type: ErrorType;
  }>({
    open: false,
    message: '',
    type: 'info',
  });
  const { load, error } = useLoadGraphicTemplate(setScenes, setCurrentDesign)


  useAutosaveProject(autosaveKey || '', 1000, designLoaded);

  useEffect(() => {
    setEditorType("GRAPHIC");
  }, []);

  useEffect(() => {
    console.log("exponiendo editor", renderMode)
    if (editor && renderMode === "true") {
      // Exponer el editor para Puppeteer
      window.editor = editor;

      (window as any).loadProjectFromWindow = async (json: any) => {
        await load(json);
      };

      // Opcional: ocultar la UI si estás haciendo solo render
      document.body.style.overflow = "hidden";
      document.getElementById("toolbar")?.style.setProperty("display", "none");
      document.getElementById("sidebar")?.style.setProperty("display", "none");
    }
  }, [editor])


  useEffect(() => {  //recuperar el proyecto desde sessionStorage si no es nuevo

    //console.log("I recuperando proyecto desde session")

    if (!editor) return;
    if (loadedNew) return;
    if (projectLoaded || filename) return;
    const key = sessionStorage.getItem('project_key');
    if (!key) return
    const currentProject = sessionStorage.getItem(key);
    if (currentProject) {
      //console.log("recuperando proyecto desde session")
      const project = JSON.parse(currentProject);
      if (project) {
        load(project).then(() => {
          //console.log("proyecto cargado al editor", editor.objects.list())
          setProjectLoaded(true);
          setDesignLoaded(true);
        });
        //console.log("proyecto cargado al editor", editor.objects.list())
      }
    }
  }, [projectLoaded, editor, loadedNew])

  useEffect(() => {  // inicializar proyecto nuevo
    if (!editor) return
    if (eventoId) sessionStorage.setItem('evento_id', eventoId)
    else return
    if (!personaId) return
    //console.log("priemer control", filename)
    if (filename) return
    //console.log("II inicializando proyecto nuevo")
    const lastProject = sessionStorage.getItem('project_key');
    if (!lastProject) {
      //console.log("no hay key, inicializando proyecto nuevo")
      const key = `prj_${filename}_${personaId}_${eventoId}`;
      const currentProject = parseGraphicJSON();
      sessionStorage.setItem(key, JSON.stringify(currentProject));
      sessionStorage.setItem('project_key', key);
      setAutosaveKey(key)
      //console.log("inicializacion")
    } else {
      setAutosaveKey(lastProject)
    }
    setProjectLoaded(true);
    setLoadedNew(true);
    setDesignLoaded(true);
  }, [editor, eventoId])

  useEffect(() => {  //cargar proyecto desde API si hay filename
    if (!editor) return
    if (loadedNew) return
    if (filename) {
      //console.log("III cargando proyecto desde API")
      loadProject()
    }
  }, [editor, filename, loadedNew])

  useEffect(() => {
    if (active && (active as ILayer).id !== 'frame') {
      setShowToolbox(true)
    } else {
      setShowToolbox(false)
    }
  }, [active])

  const parseGraphicJSON = () => {
    const currentScene = editor.scene.exportToJSON()

    const updatedScenes = scenes.map((scn) => {
      if (scn.id === currentScene.id) {
        return {
          id: currentScene.id,
          layers: currentScene.layers,
          name: currentScene.name,
        }
      }
      return {
        id: scn.id,
        layers: scn.layers,
        name: scn.name,
      }
    })

    if (currentDesign) {
      const graphicTemplate: IDesign = {
        id: currentDesign.id,
        type: "GRAPHIC",
        name: currentDesign.name,
        frame: currentDesign.frame,
        scenes: updatedScenes,
        metadata: {},
        preview: "",
      }
      return graphicTemplate
    } else {
      console.log("NO CURRENT DESIGN")
    }
  }

  const loadProject = async () => {
    setLoadingProject(true)
    const lastProject = sessionStorage.getItem('project_key');
    //console.log(lastProject)
    const key = `prj_${filename}_${personaId}_${eventoId}`;
    try {
      const project = await api.getTemplateByParams(personaId!, eventoId!, filename!)
      //console.log("proyecto recuperado desde API", project)
      if (project) {
        if (lastProject) {
          //console.log("eliminando proyecto anterior")
          sessionStorage.removeItem(lastProject);
        }
        await load(project).then(() => {
          //console.log("proyecto cargado al editor", currentScene)
          setProjectLoaded(true);
          setDesignLoaded(true);
        });
        //console.log("proyecto cargado al editor", currentScene)
        sessionStorage.setItem(key, JSON.stringify(project));
        sessionStorage.setItem('project_key', key);
        sessionStorage.setItem('f_nm', filename!);
        const params = new URLSearchParams(location.search);
        params.delete("filename");
        window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
        setAlert({ open: true, message: "Proyecto cargado correctamente", type: "success" })
        setAutosaveKey(key)
      }
    } catch (error) {
      setAlert({ open: true, message: (error as any).response.data || "Ocurrio un error", type: "error" })
    } finally {
      setLoadingProject(false)
    }
  }

  if (error) {
    console.log("Error:", error)
  }

  const LoadingOverlay = () => (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div className="spinner" />
      <style>
        {`
          .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #ccc;
            border-top-color: #000;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  )


  return (
    <EditorContainer>
      <CustomAlert
        type={alert.type}
        message={alert.message}
        open={alert.open}
        onClose={() => setAlert({ ...alert, open: false })}
        duration={4000}
      />
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Panels />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
          {showToolbox && (<Toolbox />)}
          <Canvas />
          <Footer />
        </div>
      </div>
      {loadingProject && <LoadingOverlay />}
    </EditorContainer>
  )
}

export default GraphicEditor
