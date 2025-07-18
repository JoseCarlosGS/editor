import React, { useEffect, useState } from "react"
import { styled, ThemeProvider, DarkTheme } from "baseui"
import { Theme } from "baseui/theme"
import { Button, KIND } from "baseui/button"
import Logo from "~/components/Icons/Logo"
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import Play from "~/components/Icons/Play"
import { Block } from "baseui/block"
import { useEditor } from "@layerhub-io/react"
import useEditorType from "~/hooks/useEditorType"
import { IScene } from "@layerhub-io/types"
import { loadTemplateFonts } from "~/utils/fonts"
import { loadVideoEditorAssets } from "~/utils/video"
import DesignTitle from "./DesignTitle"
import { IDesign } from "~/interfaces/DesignEditor"
import Github from "~/components/Icons/Github"
import api from "~/services/api"
import CustomAlert from "~/components/Errors"
import { ErrorType } from "~/components/Errors/CustomAlert"
import CustomAlertWithButtons from "~/components/Errors/CustomAlertWithButtons"
import { useRestoreImageFilters } from "~/hooks/useRestoreImageFilters"
import { Languages } from "lucide-react"
import { useTranslation } from 'react-i18next';
import { AlertCircle } from "lucide-react"
import { useAutosaveProject } from "~/hooks/useAutoSaveProject"


const Container = styled<"div", {}, Theme>("div", ({ $theme }) => ({
  height: "50px",
  background: $theme.colors.black,
  display: "grid",
  padding: "0 1.25rem",
  gridTemplateColumns: "380px 1fr 380px",
  alignItems: "center",
}))

const Navbar = () => {
  const { setDisplayPreview, setScenes, setCurrentDesign, currentDesign, scenes } = useDesignEditorContext()
  const { i18n } = useTranslation()
  const { t } = useTranslation("editor")
  const editorType = useEditorType()
  const editor = useEditor()
  const inputFileRef = React.useRef<HTMLInputElement>(null)
  const queryParams = new URLSearchParams(location.search);
  const filename = sessionStorage.getItem('f_nm') || queryParams.get("filename");
  const [changesSaved, setChangesSaved] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showNewProjectModal, setShowNewProjectModal] = useState(false)
  const { forceSaveProject } = useAutosaveProject(sessionStorage.getItem('project_key')!)
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    type: ErrorType;
  }>({
    open: false,
    message: '',
    type: 'info',
  });
  const restoreFilters = useRestoreImageFilters()

  useEffect(() => {
    if (!editor) return;

    const handleChange = () => {
      setChangesSaved(false);
    };


    editor.on("object:added", handleChange);
    editor.on("object:modified", handleChange);
    editor.on("object:removed", handleChange);
    editor.on("history:changed", handleChange);

    return () => {
      editor.off("object:added", handleChange);
      editor.off("object:modified", handleChange);
      editor.off("object:removed", handleChange);
      editor.off("history:changed", handleChange);
    };
  }, [editor]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
      makeDownload(graphicTemplate)
    } else {
      console.log("NO CURRENT DESIGN")
    }
  }

  const parsePresentationJSON = () => {
    const currentScene = editor.scene.exportToJSON()

    const updatedScenes = scenes.map((scn) => {
      if (scn.id === currentScene.id) {
        return {
          id: currentScene.id,
          duration: 5000,
          layers: currentScene.layers,
          name: currentScene.name,
        }
      }
      return {
        id: scn.id,
        duration: 5000,
        layers: scn.layers,
        name: scn.name,
      }
    })

    if (currentDesign) {
      const presentationTemplate: IDesign = {
        id: currentDesign.id,
        type: "PRESENTATION",
        name: currentDesign.name,
        frame: currentDesign.frame,
        scenes: updatedScenes,
        metadata: {},
        preview: "",
      }
      makeDownload(presentationTemplate)
    } else {
      console.log("NO CURRENT DESIGN")
    }
  }

  const parseVideoJSON = () => {
    const currentScene = editor.scene.exportToJSON()
    const updatedScenes = scenes.map((scn) => {
      if (scn.id === currentScene.id) {
        return {
          id: scn.id,
          duration: scn.duration,
          layers: currentScene.layers,
          name: currentScene.name ? currentScene.name : "",
        }
      }
      return {
        id: scn.id,
        duration: scn.duration,
        layers: scn.layers,
        name: scn.name ? scn.name : "",
      }
    })
    if (currentDesign) {
      const videoTemplate: IDesign = {
        id: currentDesign.id,
        type: "VIDEO",
        name: currentDesign.name,
        frame: currentDesign.frame,
        scenes: updatedScenes,
        metadata: {},
        preview: "",
      }
      makeDownload(videoTemplate)
    } else {
      console.log("NO CURRENT DESIGN")
    }
  }

  const makeDownload = (data: Object) => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`
    const a = document.createElement("a")
    a.href = dataStr
    a.download = "template.json"
    a.click()
  }

  const makeDownloadTemplate = async () => {
    if (editor) {
      if (editorType === "GRAPHIC") {
        return parseGraphicJSON()
      } else if (editorType === "PRESENTATION") {
        return parsePresentationJSON()
      } else {
        return parseVideoJSON()
      }
    }
  }

  const newProject = async () => {
    try {
      const key = sessionStorage.getItem('project_key')
      sessionStorage.removeItem(key!)
      sessionStorage.removeItem('project_key')
      if (sessionStorage.getItem('f_nm'))
        sessionStorage.removeItem('f_nm')
    } catch (err) {
      console.error(err)
    } finally {
      forceSaveProject()
      window.location.reload()
      setShowNewProjectModal(false)
    }
  }

  const loadGraphicTemplate = async (payload: IDesign) => {
    const scenes = []
    const { scenes: scns, ...design } = payload

    for (const scn of scns) {
      const scene: IScene = {
        name: scn.name,
        frame: payload.frame,
        id: scn.id,
        layers: scn.layers,
        metadata: {},
      }
      //const obj = editor.objects.findById("imgbck")
      const loadedScene = await loadVideoEditorAssets(scene)
      await loadTemplateFonts(loadedScene)
      const preview = (await editor.renderer.render(loadedScene)) as string
      scenes.push({ ...loadedScene, preview })
    }
    setTimeout(() => {
      restoreFilters()
      const objectToLock = editor.objects.findById("imgbck");
      if (objectToLock) {
        editor.objects.lock("imgbck");
      }
    }, 500);

    return { scenes, design }
  }

  const loadPresentationTemplate = async (payload: IDesign) => {
    const scenes = []
    const { scenes: scns, ...design } = payload

    for (const scn of scns) {
      const scene: IScene = {
        name: scn.name,
        frame: payload.frame,
        id: scn,
        layers: scn.layers,
        metadata: {},
      }
      const loadedScene = await loadVideoEditorAssets(scene)

      const preview = (await editor.renderer.render(loadedScene)) as string
      await loadTemplateFonts(loadedScene)
      scenes.push({ ...loadedScene, preview })
    }
    return { scenes, design }
  }

  const loadVideoTemplate = async (payload: IDesign) => {
    const scenes = []
    const { scenes: scns, ...design } = payload

    for (const scn of scns) {
      const design: IScene = {
        name: "Awesome template",
        frame: payload.frame,
        id: scn.id,
        layers: scn.layers,
        metadata: {},
        duration: scn.duration,
      }
      const loadedScene = await loadVideoEditorAssets(design)

      const preview = (await editor.renderer.render(loadedScene)) as string
      await loadTemplateFonts(loadedScene)
      scenes.push({ ...loadedScene, preview })
    }
    return { scenes, design }
  }

  const handleImportTemplate = React.useCallback(
    async (data: any) => {
      let template
      if (data.type === "GRAPHIC") {
        template = await loadGraphicTemplate(data)
      } else if (data.type === "PRESENTATION") {
        template = await loadPresentationTemplate(data)
      } else if (data.type === "VIDEO") {
        template = await loadVideoTemplate(data)
      }
      //   @ts-ignore
      setScenes(template.scenes)
      //   @ts-ignore
      setCurrentDesign(template.design)
    },
    [editor]
  )

  const handleInputFileRefClick = () => {
    inputFileRef.current?.click()
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (res) => {
        const result = res.target!.result as string
        const design = JSON.parse(result)
        handleImportTemplate(design)
      }
      reader.onerror = (err) => {
        console.log(err)
      }

      reader.readAsText(file)
    }
  }

  async function getPreviewBase64(scene: IScene): Promise<string> {
    // Genera imagen en alta calidad
    const originalBase64 = await editor.renderer.toDataURL(scene, {
      format: "jpeg",
      quality: 0.8, // aún buena, sin pérdida visual fuerte
    }) as string

    // Crea una imagen a partir del base64
    const image = new Image()
    image.src = originalBase64

    // Espera a que cargue
    await new Promise((resolve) => {
      image.onload = resolve
    })
    const targetWidth = 300
    const targetHeight = (image.height / image.width) * targetWidth

    const canvas = document.createElement("canvas")
    canvas.width = targetWidth
    canvas.height = targetHeight

    const ctx = canvas.getContext("2d")!
    ctx.drawImage(image, 0, 0, targetWidth, targetHeight)

    // Exporta con calidad baja
    return canvas.toDataURL("image/jpeg", 0.4) // baja calidad y peso
  }

  const saveProject = async () => {
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

    //let previewBase64 = await editor.renderer.render(currentScene);
    let previewBase64 = ""
    try {
      previewBase64 = await getPreviewBase64(currentScene)
    } catch (err) {
      console.warn("No se pudo generar preview reducido:", err)
    }
    if (currentDesign) {
      const graphicTemplate: IDesign = {
        id: currentDesign.id,
        type: "GRAPHIC",
        name: currentDesign.name,
        frame: currentScene.frame,
        scenes: updatedScenes,
        metadata: {},
        preview: previewBase64 as string
      }
      //console.log(graphicTemplate)
      try {
        setLoading(true)
        const response = await api.createProject(sessionStorage.getItem('persona_id')!, sessionStorage.getItem('evento_id')!, filename, graphicTemplate)
        if (response) {
          const key = `prj_${filename}_${sessionStorage.getItem('persona_id')!}_${sessionStorage.getItem('evento_id')!}`;
          sessionStorage.setItem(key, JSON.stringify(graphicTemplate));
          sessionStorage.setItem('project_key', key);
          const currentPj = sessionStorage.getItem(filename!);
          if (!currentPj) {
            const fileNameOnly = response.data.archivo.replace(/\.json$/i, "");
            sessionStorage.setItem('f_nm', fileNameOnly);
          }
          setChangesSaved(true)
          setAlert({ open: true, message: "Proyecto guardado correctamente", type: "success" })
        }
      } catch (error) {
        console.log("error al guardar el proyecto", error)
        setAlert({ open: true, message: "Error al guardar el proyecto", type: "error" })
      } finally {
        setLoading(false)
      }

    } else {
      console.log("NO CURRENT DESIGN")
    }
  }

  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    // @ts-ignore
    <ThemeProvider theme={DarkTheme}>
      <Container>
        <div style={{ color: "#ffffff" }}>
          <Logo size={30} />
        </div>
        <CustomAlert
          type={alert.type}
          message={alert.message}
          open={alert.open}
          onClose={() => setAlert({ ...alert, open: false })}
          duration={4000}
        />
        {showNewProjectModal && (<CustomAlertWithButtons
          icon={<AlertCircle color="orange" size={60} />}
          message={t(`navbar.newProjectModal.message`)}
          onAccept={newProject}
          onCancel={() => setShowNewProjectModal(false)}
          acceptText={t(`navbar.newProjectModal.acceptText`)}
          cancelText={t(`navbar.newProjectModal.cancelText`)}
        />)}
        <DesignTitle changesSaved={changesSaved} />
        <Block $style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}>
          <input
            multiple={false}
            onChange={handleFileInput}
            type="file"
            id="file"
            ref={inputFileRef}
            style={{ display: "none" }}
          />
          {/* <Button
            size="compact"
            onClick={handleInputFileRefClick}
            kind={KIND.tertiary}
            overrides={{
              StartEnhancer: {
                style: {
                  marginRight: "4px",
                },
              },
            }}
          >
            {t(`navbar.import`)}
          </Button> */}

          {/* <Button
            size="compact"
            onClick={makeDownloadTemplate}
            kind={KIND.tertiary}
            overrides={{
              StartEnhancer: {
                style: {
                  marginRight: "4px",
                },
              },
            }}
          >
            {t(`navbar.export`)}
          </Button> */}
          <Button
            size="compact"
            onClick={() => setShowNewProjectModal(true)}
            kind={KIND.tertiary}
            overrides={{
              StartEnhancer: {
                style: {
                  marginRight: "4px",
                },
              },
            }}
          >
            {t(`navbar.new`)}
          </Button>
          <Button
            size="compact"
            onClick={saveProject}
            kind={KIND.tertiary}
            disabled={loading}
            overrides={{
              StartEnhancer: {
                style: {
                  marginRight: "4px",
                },
              },
            }}
          >
            {loading ? (
              <span className="loader" style={{ display: "flex", alignItems: "center" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 38 38"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#fff"
                >
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(1 1)" strokeWidth="2">
                      <circle strokeOpacity=".3" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              </span>
            ) : (
              t(`navbar.save`)
            )}
          </Button>
          <div style={{ position: "relative" }}>
            <Button
              size="compact"
              onClick={() => setShowLangMenu((prev) => !prev)}
              kind={KIND.tertiary}
              overrides={{
                StartEnhancer: {
                  style: {
                    marginRight: "4px",
                  },
                },
              }}
            >
              <Languages size={24} />
            </Button>
            {showLangMenu && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "100%",
                  background: "#222",
                  color: "#fff",
                  borderRadius: 4,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  zIndex: 10,
                  minWidth: 120,
                  marginTop: 4,
                  padding: "4px 0",
                }}
              >
                <div
                  style={{
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontSize: 14,
                  }}
                  onClick={() => {
                    changeLanguage("es");
                    setShowLangMenu(false);
                  }}
                >
                  es-Español
                </div>
                <div
                  style={{
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontSize: 14,
                  }}
                  onClick={() => {
                    changeLanguage("en");
                    setShowLangMenu(false);
                  }}
                >
                  en-English
                </div>
              </div>
            )}
          </div>
          <Button
            size="compact"
            onClick={() => setDisplayPreview(true)}
            kind={KIND.tertiary}
            overrides={{
              StartEnhancer: {
                style: {
                  marginRight: "4px",
                },
              },
            }}
          >
            <Play size={24} />
          </Button>

          <Button
            size="compact"
            onClick={() => window.location.replace("https://github.com/layerhub-io/react-design-editor")}
            kind={KIND.tertiary}
          >
            <Github size={24} />
          </Button>

          {/* <Button
            style={{ marginLeft: "0.5rem" }}
            size="compact"
            onClick={() => window.location.replace("https://editor.layerhub.io")}
            kind={KIND.primary}
          >
            Try PRO
          </Button> */}
        </Block>
      </Container>
    </ThemeProvider>
  )
}

export default Navbar
