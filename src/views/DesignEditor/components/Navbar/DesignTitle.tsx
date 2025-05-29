import React, { useState } from "react"
import { Input } from "baseui/input"
import { Block } from "baseui/block"
import Cloud from "~/components/Icons/Cloud"
import { StatefulTooltip } from "baseui/tooltip"
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import { Check } from "lucide-react"
import { useEditor } from "@layerhub-io/react"
import { TriangleAlert } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useDebounce } from "~/hooks/useDebounce"
import { useAutosaveProject } from "~/hooks/useAutoSaveProject"

interface State {
  name: string
  width: number
}

type Props = {
  changesSaved: boolean;
};

const DesignTitle = ({ changesSaved }: Props) => {
  const { t } = useTranslation("editor")
  const [state, setState] = React.useState<State>({ name: t(`navbar.tittle.default`), width: 0 })
  const editor = useEditor()
  const { currentDesign, setCurrentDesign } = useDesignEditorContext()
  const inputTitleRef = React.useRef<Input>(null)
  const spanRef = React.useRef<HTMLDivElement | null>(null)
  const [inputValue, setInputValue] = useState(state.name);
  const debouncedValue = useDebounce(inputValue, 500);
  const { forceSaveProject } = useAutosaveProject(sessionStorage.getItem('project_key')!)
  const key = sessionStorage.getItem("project_key")
  const currentProject = sessionStorage.getItem(key!)

  const handleInputChange = (name: string) => {
    setState({ ...state, name: name, width: spanRef.current?.clientWidth! })
    setCurrentDesign({ ...currentDesign, name })
  }
  React.useEffect(() => {
    if (debouncedValue !== state.name) {
      handleInputChange(debouncedValue);
    }
    console.log("cambiando nombre", debouncedValue)
    forceSaveProject(debouncedValue)
  }, [debouncedValue]);

  React.useEffect(() => {
    if (!editor || !key) return;

    const currentProjectRaw = sessionStorage.getItem(key);
    let parsedProject = null;

    try {
      parsedProject = currentProjectRaw ? JSON.parse(currentProjectRaw) : null;
    } catch (error) {
      console.warn("Error parsing project from sessionStorage", error);
    }

    const isValidName =
      parsedProject?.name && parsedProject.name.trim().length > 0;

    const name = isValidName ? parsedProject.name : currentDesign.name;

    spanRef.current!.innerHTML = name;
    setState(prev => ({ ...prev, name, width: spanRef.current?.clientWidth! + 20 }));
    setInputValue(name);
  }, [editor, key, currentDesign.name]);

  React.useEffect(() => {
    setState({ ...state, width: spanRef.current?.clientWidth! + 20 })
    setInputValue(state.name);
  }, [state.name])

  return (
    <Block
      $style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        opacity: 1,
      }}
    >
      <Block $style={{ display: "flex", position: "absolute", top: "-10px", left: "50%", width: "100%" }}>
        <Block
          $style={{
            fontFamily: "Roboto",
            position: "absolute",
            visibility: "hidden",
            whiteSpace: "pre",
            top: "-10px",
            left: "50%",
            fontSize: "14px",
            fontWeight: 500,
          }}
          ref={spanRef}
        >
          {inputValue}
        </Block>
      </Block>
      <Block
        display="flex"
        overrides={{
          Block: {
            style: {
              transition: "width 0.3s ease",
            },
          },
        }}>
        <Input
          onChange={(e: any) => setInputValue(e.target.value)}
          overrides={{
            Root: {
              style: {
                backgroundColor: "transparent",
                borderTopStyle: "none",
                borderBottomStyle: "none",
                borderRightStyle: "none",
                borderLeftStyle: "none",
              },
            },
            InputContainer: {
              style: {
                backgroundColor: "transparent",
                paddingRight: 0,
              },
            },
            Input: {
              style: {
                fontWeight: 500,
                fontSize: "14px",
                width: `${state.width}px`,
                fontFamily: "Roboto, sans-serif",
                backgroundColor: "transparent",
                color: "#ffffff",
                paddingRight: 0,
                transition: "width 0.3s ease",
              },
            },
          }}
          value={inputValue}
          ref={inputTitleRef}
        />
      </Block>

      <StatefulTooltip
        showArrow={true}
        overrides={{
          Inner: {
            style: {
              backgroundColor: "#ffffff",
            },
          },
        }}
        content={
          changesSaved ? (
            <Block backgroundColor="#ffffff">All changes are saved</Block>
          ) : (
            <Block backgroundColor="#ffffff">Changes have not been saved</Block>
          )
        }
      >
        <Block
          $style={{
            cursor: "pointer",
            padding: "10px",
            display: "flex",
            color: "#ffffff",
            position: "relative",
          }}
        >
          <Cloud size={30} />
          <Block
            $style={{
              position: "absolute",
              left: "50%",
              top: "52%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            {changesSaved ? (<Check size={14} color="#000000" strokeWidth={4} />) : <TriangleAlert size={13} color="#000000" strokeWidth={4} />}
          </Block>
        </Block>
      </StatefulTooltip>
    </Block>
  )
}

export default DesignTitle
