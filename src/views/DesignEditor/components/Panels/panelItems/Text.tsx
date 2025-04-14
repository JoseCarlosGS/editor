import { Button, SIZE } from "baseui/button"
import { textComponents } from "~/constants/editor"
import { useStyletron } from "styletron-react"
import { useEditor, useObjects } from "@layerhub-io/react"
import { FontItem } from "~/interfaces/common"
import { loadFonts } from "~/utils/fonts"
import { ILayer, IStaticText } from "@layerhub-io/types"
import { nanoid } from "nanoid"
import { Block } from "baseui/block"
import AngleDoubleLeft from "~/components/Icons/AngleDoubleLeft"
import Scrollable from "~/components/Scrollable"
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen"
import Delete from "baseui/icon/delete"
import FlipVertical from "~/components/Icons/FlipVertical"
import { useState } from "react"
import { Select } from 'baseui/select';
import { Input } from 'baseui/input';
import Customize from "~/components/Icons/Customize"

const Text = () => {
  const editor = useEditor()
  const setIsSidebarOpen = useSetIsSidebarOpen()
  const objects = useObjects() as ILayer[]
  const textObjects = objects.filter(obj => obj.type === 'StaticText');

   // Estado para el modal
   const [isOpen, setIsOpen] = useState(false);
   const [currentObject, setCurrentObject] = useState(null);

   const [editingId, setEditingId] = useState(null);
   const [editType, setEditType] = useState<{ label: string; id: string }[]>([]);
   const [editValue, setEditValue] = useState('');
   
   // Opciones para el combobox
   const typeOptions = [
     { label: 'Nombre', id: 'name' },
     { label: 'Firma', id: 'signature' },
     { label: 'Emisor', id: 'issuer' },
     { label: 'Fecha', id: 'date' }
   ];

  const addObject = async () => {
    if (editor) {
      const font: FontItem = {
        name: "OpenSans-Regular",
        url: "https://fonts.gstatic.com/s/opensans/v27/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",
      }
      await loadFonts([font])
      const options = {
        id: nanoid(),
        type: "StaticText",
        width: 420,
        text: "Add some text",
        fontSize: 92,
        fontFamily: font.name,
        textAlign: "center",
        fontStyle: "normal",
        fontURL: font.url,
        fill: "#333333",
        metadata: {},
      }
      editor.objects.add(options)
    }
  }
  const addComponent = async (component: any) => {
    if (editor) {
      const fontItemsList: FontItem[] = []
      if (component.objects) {
        component.objects.forEach((object: any) => {
          if (object.type === "StaticText" || object.type === "DynamicText") {
            fontItemsList.push({
              name: object.fontFamily,
              url: object.fontURL,
            })
          }
        })
        const filteredFonts = fontItemsList.filter((f) => !!f.url)
        await loadFonts(filteredFonts)
      } else {
        if (component.type === "StaticText" || component.type === "DynamicText") {
        fontItemsList.push({
          name: component.fontFamily,
          url: component.fontURL,
        })
        await loadFonts(fontItemsList)
      }
      }
      editor.objects.add(component)
    }
  }
  const handleEdit = (textObj:any) => {
    console.log('Editando objeto:', textObj)
    if (editingId === textObj.id) {
      // Si ya estamos editando este objeto, cerramos el panel de edición
      setEditingId(null);
    } else {
      // Configuramos el objeto para edición
      setEditingId(textObj.id);
      setEditType(textObj.fieldType ? 
        [typeOptions.find(option => option.id === textObj.fieldType) || typeOptions[0]] : 
        [typeOptions[0]]);
      setEditValue(textObj.text || '');
    }
  };
  
  const handleDelete = (id: string) => {
    // Función para eliminar el objeto
    console.log('Eliminando objeto:', id);
  };

  const handleSave = (object:any) => {
    console.log('Guardando objeto:', object);
    editor.objects.update(object.tex, object.id)
    console.log('Guardando cambios:');
    
    // Cerrar el modal
    setIsOpen(false);
  };
  
  const handleCancel = () => {
    setIsOpen(false);
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
        <Block>Text</Block>

        <Block onClick={() => setIsSidebarOpen(false)} $style={{ cursor: "pointer", display: "flex" }}>
          <AngleDoubleLeft size={18} />
        </Block>
      </Block>
      <Scrollable>
        <Block padding="0 1.5rem">
          <Button
            onClick={addObject}
            size={SIZE.compact}
            overrides={{
              Root: {
                style: {
                  width: "100%",
                },
              },
            }}
          >
            Add text
          </Button>

          {/* <Block
            $style={{
              paddingTop: "0.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "8px",
            }}
          >
            {[...textComponents].map((tc) => (
              <TextComponentItem onClick={addComponent} key={tc.id} component={tc} />
            ))}
          </Block> */}

          {textObjects.map((textObj) => (
            <Block 
              key={textObj.id}
              marginBottom="0.5rem"
              onClick={() => editor.objects.select(textObj.id)}
            >
              {/* Elemento principal */}
              <Block $style={{
                cursor: "pointer",
                marginTop:"0.5rem",
                display:"flex", 
                alignItems:"center", 
                justifyContent:"space-between",
                padding:"0.5rem",
                backgroundColor:"#f6f6f6",
                borderRadius: editingId === textObj.id ? "4px 4px 0 0" : "4px"
              }}
              >
                <Block>{textObj.name || 'Text sin nombre'}</Block>
                <Block  $style={{display:"flex", gap:"0.5rem"}}>
                  <Button 
                    onClick={() => handleEdit(textObj)}
                    size={SIZE.mini}
                    kind={editingId === textObj.id ? "primary" : "secondary"}
                  >
                    <FlipVertical size={16} />
                  </Button>
                  <Button 
                    onClick={() => handleDelete(textObj.id)}
                    size={SIZE.mini}
                    kind="tertiary"
                  >
                    <Delete size={16} color="red" />
                  </Button>
                </Block>
              </Block>
              
              {/* Panel de edición desplegable */}
              {editingId === textObj.id && (
                <Block 
                  $style={{padding:"0.75rem",
                  backgroundColor:"#f0f0f0",
                  borderTop:"1px solid #e0e0e0",
                  borderRadius:"0 0 4px 4px"}}
                >
                  <Block marginBottom="0.75rem">
                    <Block $style={{marginBottom:"0.25rem", fontSize:"12px"}}>Tipo</Block>
                    <Select
                      options={typeOptions}
                      value={editType}
                      placeholder="Seleccionar tipo"
                      onChange={({value}) => setEditType(value as { label: string; id: string }[])}
                      clearable={false}
                      size="compact"
                    />
                  </Block>
                  <Block marginBottom="0.75rem">
                    <Block $style={{marginBottom:"0.25rem", fontSize:"12px"}}>Valor</Block>
                    <Input
                      value={editValue}
                      onChange={e => setEditValue(e.target.value)}
                      placeholder="Ingrese el valor"
                      size="compact"
                    />
                  </Block>
                  <Block $style={{display:"flex", justifyContent:"flex-end", gap:"0.5rem"}}>
                  <Button 
                    onClick={() => handleSave(textObj)}
                    size={SIZE.mini}
                    kind="primary"
                  >
                    <Customize size={16} />
                  </Button>
                </Block>
                </Block>
                
              )}
            </Block>
          ))}
        </Block>
      </Scrollable>

      
    </Block>
  )
}

interface TextComponent {
  id: string
  metadata: {
    preview: string
  }
}
const TextComponentItem = ({ component, onClick }: { component: any; onClick: (option: any) => void }) => {
  const [css] = useStyletron()
  return (
    <div
      onClick={() => onClick(component.layers[0])}
      className={css({
        position: "relative",
        height: "84px",
        background: "#f8f8fb",
        cursor: "pointer",
        padding: "12px",
        borderRadius: "8px",
        overflow: "hidden",
        "::before:hover": {
          opacity: 1,
        },
      })}
    >
      <div
        className={css({
          backgroundImage: `linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0.006) 8.1%,
          rgba(0, 0, 0, 0.022) 15.5%,
          rgba(0, 0, 0, 0.047) 22.5%,
          rgba(0, 0, 0, 0.079) 29%,
          rgba(0, 0, 0, 0.117) 35.3%,
          rgba(0, 0, 0, 0.158) 41.2%,
          rgba(0, 0, 0, 0.203) 47.1%,
          rgba(0, 0, 0, 0.247) 52.9%,
          rgba(0, 0, 0, 0.292) 58.8%,
          rgba(0, 0, 0, 0.333) 64.7%,
          rgba(0, 0, 0, 0.371) 71%,
          rgba(0, 0, 0, 0.403) 77.5%,
          rgba(0, 0, 0, 0.428) 84.5%,
          rgba(0, 0, 0, 0.444) 91.9%,
          rgba(0, 0, 0, 0.45) 100%)`,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          height: "100%",
          width: "100%",
          ":hover": {
            opacity: 1,
          },
        })}
      />
      <img
        src={component.preview}
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

export default Text
