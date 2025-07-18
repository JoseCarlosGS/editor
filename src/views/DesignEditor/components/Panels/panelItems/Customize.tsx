import React from "react"
import { Button, SIZE } from "baseui/button"
import { HexColorPicker } from "react-colorful"
import { StatefulPopover, PLACEMENT } from "baseui/popover"
import { Plus } from "baseui/icon"
import { Input } from "baseui/input"
import { useEditor, useFrame } from "@layerhub-io/react"
import { Modal, ROLE } from "baseui/modal"
import { Block } from "baseui/block"
import AngleDoubleLeft from "~/components/Icons/AngleDoubleLeft"
import Scrollable from "~/components/Scrollable"
import { sampleFrames } from "~/constants/editor"
import Scrollbar from "@layerhub-io/react-custom-scrollbar"
import SwapHorizontal from "~/components/Icons/SwapHorizontal"
import { Tabs, Tab } from "baseui/tabs"
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen"
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import { useActiveObject } from "@layerhub-io/react"
import { useTranslation } from "react-i18next"
import { useAutosaveProject } from "~/hooks/useAutoSaveProject"

const colors = ["#ffffff", "#9B9B9B", "#4A4A4A", "#000000", "#A70C2C", "#DA9A15", "#F8E71D", "#47821A", "#4990E2"]

interface State {
  backgroundColor: string
}

const Customize = () => {
  const editor = useEditor()
  const setIsSidebarOpen = useSetIsSidebarOpen()
  const { t } = useTranslation("editor")

  const [state, setState] = React.useState<State>({
    backgroundColor: "#000000",
  })

  const changeBackgroundColor = (color: string) => {
    if (editor) {
      editor.frame.setBackgroundColor(color)
    }
  }
  const handleChange = (type: string, value: any) => {
    setState({ ...state, [type]: value })
    changeBackgroundColor(value)
  }

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
        <Block>{t(`panels.customize.customize`)}</Block>

        <Block onClick={() => setIsSidebarOpen(false)} $style={{ cursor: "pointer", display: "flex" }}>
          <AngleDoubleLeft size={18} />
        </Block>
      </Block>
      <Scrollable>
        <Block padding="0 1.5rem">
          <Block>
            <ResizeTemplate />
            <Block $style={{ fontSize: "14px", textAlign: "center", paddingTop: "0.35rem" }}>1080 x 1920px</Block>
          </Block>

          <Block paddingTop="0.5rem">
            <div
              style={{
                background: "#fafafa",
                borderRadius: "8px",
                border: "1px solid #ececf5",
                padding: "0.45rem 1rem",
                fontSize: "14px",
              }}
            >
              <div>{t(`panels.customize.backgroundColor`)}</div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "0.5rem",
                  paddingTop: "0.25rem",
                }}
              >
                <StatefulPopover
                  placement={PLACEMENT.bottomLeft}
                  content={
                    <div
                      style={{
                        padding: "1rem",
                        background: "#ffffff",
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        textAlign: "center",
                      }}
                    >
                      <HexColorPicker onChange={(v) => handleChange("backgroundColor", v)} />
                      <Input
                        overrides={{ Input: { style: { textAlign: "center" } } }}
                        value={state.backgroundColor}
                        onChange={(e) => handleChange("backgroundColor", (e.target as any).value)}
                        placeholder="#000000"
                        clearOnEscape
                      />
                    </div>
                  }
                  accessibilityType="tooltip"
                >
                  <div>
                    <div
                      style={{
                        height: "40px",
                        width: "40px",
                        backgroundSize: "100% 100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        backgroundImage:
                          'url("https://static.canva.com/web/images/788ee7a68293bd0264fc31f22c31e62d.png")',
                      }}
                    >
                      <div
                        style={{
                          height: "32px",
                          width: "32px",
                          background: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.3rem",
                        }}
                      >
                        <Plus size={24} />
                      </div>
                    </div>
                  </div>
                </StatefulPopover>

                {colors.map((color) => (
                  <div
                    onClick={() => handleChange("backgroundColor", color)}
                    key={color}
                    style={{
                      background: color,
                      borderRadius: "4px",
                      border: "1px solid #d7d8e3",
                      height: "34px",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
          </Block>
        </Block>
      </Scrollable>
    </Block>
  )
}

const ResizeTemplate = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { t } = useTranslation("editor")
  const { forceSaveProject } = useAutosaveProject(sessionStorage.getItem('project_key')!)
  const [activeKey, setActiveKey] = React.useState<string | number>("0")
  const { currentDesign, setCurrentDesign } = useDesignEditorContext()
  const editor = useEditor()
  const active = useActiveObject()
  const [desiredFrame, setDesiredFrame] = React.useState({
    width: 0,
    height: 0,
  })
  const [selectedFrame, setSelectedFrame] = React.useState<any>({
    id: 0,
    width: 0,
    height: 0,
  })
  const frame = useFrame()

  React.useEffect(() => {
    if (frame) {
      setDesiredFrame({
        width: frame.width,
        height: frame.height,
      })
    }
  }, [frame])

  React.useEffect(() => {
    console.log(active)
  }, [])

  const applyResize = () => {
    // @ts-ignore
    const size = activeKey === "0" ? selectedFrame : desiredFrame
    if (editor) {
      editor.frame.resize({
        width: parseInt(size.width),
        height: parseInt(size.height),
      })
      setCurrentDesign({
        ...currentDesign,
        frame: {
          width: parseInt(size.width),
          height: parseInt(size.height),
        },
      })
    }
    forceSaveProject()
    setIsOpen(false)
  }
  const isEnabled =
    // @ts-ignore
    (activeKey === "0" && selectedFrame.id !== 0) ||
    // @ts-ignore
    (activeKey === "1" && !!parseInt(desiredFrame.width) && !!parseInt(desiredFrame.height))

  return (
    <>
      <Button
        onClick={() => {
          editor.objects.deselect();
          setIsOpen(true)
        }}
        size={SIZE.compact}
        overrides={{
          Root: {
            style: {
              width: "100%",
            },
          },
        }}
      >
        {t(`panels.customize.modal.resizeTemplate`)}
      </Button>
      <Modal
        onClose={() => setIsOpen(false)}
        closeable={true}
        isOpen={isOpen}
        animate
        autoFocus
        size="auto"
        role={ROLE.dialog}
        overrides={{
          Dialog: {
            style: {
              zIndex: 9999,
              borderTopRightRadius: "8px",
              borderEndStartRadius: "8px",
              borderEndEndRadius: "8px",
              borderStartEndRadius: "8px",
              borderStartStartRadius: "8px",
            },
          },
        }}
      >
        <Block $style={{ padding: "0 1.5rem", width: "640px" }}>
          <Block
            $style={{
              padding: "2rem 1rem 1rem",
              textAlign: "center",
              fontWeight: 600,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            {t(`panels.customize.modal.title`)}
          </Block>
          <Tabs
            overrides={{
              TabContent: {
                style: {
                  paddingLeft: 0,
                  paddingRight: 0,
                },
              },
              TabBar: {
                style: {
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#ffffff",
                },
              },
            }}
            activeKey={activeKey}
            onChange={({ activeKey }) => {
              setActiveKey(activeKey)
            }}
          >
            <Tab title={t(`panels.customize.modal.presetSize`)}>
              <Block $style={{ width: "100%", height: "400px" }}>
                <Scrollbar>
                  <Block
                    $style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                      gap: "1rem",
                      justifyItems: "center",
                    }}
                  >
                    {sampleFrames.map((sampleFrame, index) => (
                      <Block
                        onClick={() => setSelectedFrame(sampleFrame)}
                        $style={{
                          width: "190px",
                          height: "250px",
                          padding: "0.5rem",
                          backgroundColor:
                            selectedFrame.id === sampleFrame.id
                              ? "rgb(232, 232, 233)"
                              : "rgb(247, 250, 252)",
                          ":hover": {
                            backgroundColor: "rgb(232, 232, 233)",
                            cursor: "pointer",
                          },
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                        key={index}
                      >
                        <Block
                          $style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={sampleFrame.preview}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </Block>
                        <Block
                          $style={{
                            fontSize: "13px",
                            textAlign: "center",
                            paddingTop: "0.5rem",
                          }}
                        >
                          <Block $style={{ fontWeight: 500 }}>{sampleFrame.name}</Block>
                          <Block $style={{ color: "rgb(119,119,119)" }}>
                            {sampleFrame.width} x {sampleFrame.height}px
                          </Block>
                        </Block>
                      </Block>
                    ))}
                  </Block>
                </Scrollbar>
              </Block>
            </Tab>
            <Tab title={t(`panels.customize.modal.customSize`)}>
              <Block $style={{ padding: "2rem 2rem" }}>
                <Block
                  $style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 50px 1fr",
                    alignItems: "end",
                    fontSize: "14px"
                  }}
                >
                  <Input
                    onChange={(e: any) => setDesiredFrame({ ...desiredFrame, width: e.target.value })}
                    value={desiredFrame.width}
                    startEnhancer="W"
                    size={SIZE.compact}
                  />
                  <Button
                    overrides={{
                      Root: {
                        style: {
                          height: "32px",
                        },
                      },
                    }}
                    size={SIZE.compact}
                    kind="tertiary"
                  >
                    <SwapHorizontal size={24} />
                  </Button>
                  <Input
                    onChange={(e: any) => setDesiredFrame({ ...desiredFrame, height: e.target.value })}
                    value={desiredFrame.height}
                    startEnhancer="H"
                    size={SIZE.compact}
                  />
                </Block>
              </Block>
            </Tab>
          </Tabs>
        </Block>
        <Block $style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "2rem"
        }}>
          <Button disabled={!isEnabled} onClick={applyResize} style={{ width: "190px" }}>
            {t(`panels.customize.modal.resizeTemplate`)}
          </Button>
        </Block>
      </Modal>
    </>
  )
}

export default Customize
