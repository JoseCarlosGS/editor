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
import { use } from "i18next"

const GraphicEditor = () => {
  const location = useLocation();
  const editor = useEditor();
  const active = useActiveObject();
  const [autosaveKey, setAutosaveKey] = useState<string | null>(null);
  const { currentDesign, scenes } = useDesignEditorContext();
  const [loadingProject, setLoadingProject] = useState(false)
  const { setEditorType, setScenes, setCurrentDesign: originalSetCurrentDesign } = useDesignEditorContext()
  const setCurrentDesign = (design: Partial<IDesign>) => {
    originalSetCurrentDesign((prev) => ({ ...prev, ...design }));
  };

  const personaId = sessionStorage.getItem('persona_id')
  const queryParams = new URLSearchParams(location.search);
  const filename = queryParams.get("filename");
  //const personaId = queryParams.get("personaId");
  const eventoId = queryParams.get("eventoId");
  const [showToolbox, setShowToolbox] = useState(false)
  const [loadedNew, setLoadedNew] = useState(false)

  const { load, loading, error } = useLoadGraphicTemplate(setScenes, setCurrentDesign)

  // if (autosaveKey)
  //   useAutosaveProject(autosaveKey, currentDesign, 1000)

  //console.log("Id from URL:", idProject);
  useEffect(() => {
    setEditorType("GRAPHIC");
  }, []);

  useEffect(() => {  // recuperar el proyecto desde sessionStorage si no es nuevo
    if (!editor) return
    if (!loadedNew) {
      const key = sessionStorage.getItem('project_key');
      const currentProject = sessionStorage.getItem(key || '');
      if (currentProject) {
        console.log("recuperando proyecto desde session")
        const project = JSON.parse(currentProject);
        if (project) {
          load(project);
        }
      }
      console.log("no es nuevo")
    }
  }, [loadedNew, editor])

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

  useEffect(() => {  // inicializar proyecto nuevo
    if (!editor) return
    if (eventoId) sessionStorage.setItem('evento_id', eventoId)
    else return
    if (!personaId) return
    const key = `prj_${filename}_${personaId}_${eventoId}`;
    const currentProject = parseGraphicJSON();
    sessionStorage.setItem(key, JSON.stringify(currentProject));
    sessionStorage.setItem('project_key', key);
    setAutosaveKey(key)
    setLoadedNew(true)
    console.log("inicializacion")
  }, [editor, eventoId])

  useEffect(() => {  //cargar proyecto desde API si hay filename
    if (!editor) return
    if (!loadedNew) return
    if (filename) {
      loadProject()
    }
    console.log("loadProject", filename)
  }, [editor, filename, loadedNew])

  useEffect(() => {
    if (active && (active as ILayer).id !== 'frame') {
      setShowToolbox(true)
    } else {
      setShowToolbox(false)
    }
  }, [active])

  const loadProject = async () => {
    setLoadingProject(true)
    const project = await api.getTemplateByParams(personaId!, eventoId!, filename!)
    if (project) {
      await load(project);
      const key = `prj_${filename}_${personaId}_${eventoId}`;
      sessionStorage.setItem(key, JSON.stringify(project));
      sessionStorage.setItem('project_key', key);
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
