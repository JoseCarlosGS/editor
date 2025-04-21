import { Button, SIZE } from "baseui/button"
import { useActiveObject, useEditor, useObjects } from "@layerhub-io/react"
import { FontItem } from "~/interfaces/common"
import { loadFonts } from "~/utils/fonts"
import { ILayer, IStaticText } from "@layerhub-io/types"
import { nanoid } from "nanoid"
import { Block } from "baseui/block"
import AngleDoubleLeft from "~/components/Icons/AngleDoubleLeft"
import Scrollable from "~/components/Scrollable"
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen"
import Delete from "~/components/Icons/Delete"
import { ChevronDown } from "baseui/icon"
import { ChevronUp } from "baseui/icon"
import { useEffect, useReducer, useState } from "react"
import { Textarea } from 'baseui/textarea';
import useEditorHistoryListener from "~/hooks/useEditorHistoryListener"
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, ROLE } from "baseui/modal";
import { Input } from "baseui/input";
import { Select } from "baseui/select";
import { Checkbox } from "baseui/checkbox";
import { FormControl } from "baseui/form-control";
import { DatePicker } from "baseui/datepicker";
import { TimePicker } from "baseui/datepicker";
import EditableName from "~/components/EditableName"

const DocumentFields = () => {
  const editor = useEditor()
  const activeObject = useActiveObject()
  const setIsSidebarOpen = useSetIsSidebarOpen()
  const objects = useObjects() as ILayer[]
  //const textObjects = objects.filter(obj => obj.type === 'StaticText');
   const [editingId, setEditingId] = useState(null);
   const [editType, setEditType] = useState<{ label: string; id: string }[]>([]);
   const [editValue, setEditValue] = useState('');

   const [localObjects, setLocalObjects] = useState<ILayer[]>([])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFieldName, setNewFieldName] = useState("");
  const [newFieldContent, setNewFieldContent] = useState("");
  const [fieldType, setFieldType] = useState([{ id: "text", label: "Texto" }]);
  const [includeDate, setIncludeDate] = useState(true);
  const [includeTime, setIncludeTime] = useState(true);
  const [dateFormat, setDateFormat] = useState([{ id: "yyyy-MM-dd", label: "AAAA-MM-DD" }]);
  const [timeFormat, setTimeFormat] = useState([{ id: "HH:mm", label: "24 horas" }]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

   useEffect(() => {
    setLocalObjects(objects)
  }, [objects])
    
  useEditorHistoryListener(() => {
      console.log('Editor history changed')
      const currentObjects = editor.objects.list() as ILayer[]
      setLocalObjects(currentObjects)
  })
  const localTextObjects = localObjects.filter(obj => obj.metadata?.type === 'field')
   // Opciones para el combobox
  const typeOptions = [
    { id: "text", label: "Texto" },
    { id: "signature", label: "Firma" },
    { id: "image", label: "Imagen" }
  ];
  const dateFormatOptions = [
    { id: "yyyy-MM-dd", label: "AAAA-MM-DD" },
    { id: "dd/MM/yyyy", label: "DD/MM/AAAA" },
    { id: "MM/dd/yyyy", label: "MM/DD/AAAA" }
  ];
  
  const timeFormatOptions = [
    { id: "HH:mm", label: "24 horas (14:30)" },
    { id: "hh:mm a", label: "12 horas (02:30 PM)" }
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
        fontSize: 40,
        fontFamily: font.name,
        textAlign: "center",
        fontStyle: "normal",
        fontURL: font.url,
        fill: "#333333",
        name: "Text",
        metadata: {},
      }
      editor.objects.add(options)
    }
  }

  const handleAddNewField = async () => {

    if (newFieldName.trim()) {
      console.log('Creando nuevo campo:', newFieldName, fieldType[0].id, newFieldContent, includeDate, includeTime, dateFormat[0].id, timeFormat[0].id)

      if (fieldType[0].id !== "image") {
        const font: FontItem = {
          name: "OpenSans-Regular",
          url: "https://fonts.gstatic.com/s/opensans/v27/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",
        }
        await loadFonts([font])
        // Crear objeto con los datos según el tipo
        if(fieldType[0].id === "text") {
          const options = {
            id: nanoid(),
            type: "StaticText",
            width: 420,
            text: newFieldName,
            fontSize: 40,
            fontFamily: font.name,
            textAlign: "center",
            fontStyle: "normal",
            fontURL: font.url,
            fill: "#333333",
            name: newFieldName,
            metadata: {
              type: "field",
            },
          }
          editor.objects.add(options)
        }
        // Añadir información adicional si es un campo de tiempo
        if (fieldType[0].id === "signature") {
          const firma = {
            id: nanoid(),
            type: "StaticText",
            width: 420,
            text: newFieldContent,
            fontSize: 40,
            fontFamily: font.name,
            textAlign: "center",
            fontStyle: "normal",
            fontURL: font.url,
            top: 607,
            fill: "#333333",
            name: newFieldName,
            metadata: {
              type: "field",
            },
          }
          const line = {
            id: nanoid(),
            type: "StaticPath",
            width: 60,
            height: 60,
            strokeWidth: 2,
            stroke: "#333333",
            name: newFieldName,
            scaleX: 4.92,
            scaleY: 0.03,
            path: [
              [
                  "M",
                  60,
                  0
              ],
              [
                  "L",
                  0,
                  0
              ],
              [
                  "L",
                  0,
                  60
              ],
              [
                  "L",
                  60,
                  60
              ],
              [
                  "L",
                  60,
                  0
              ],
              [
                  "Z"
              ]
            ],
            fill: "#000000",
            metadata: {
            },
          }
          editor.objects.add(line)
          editor.objects.add(firma)
        }
      
      //addObject(fieldData);
      }else
      {
        const options = {
          id: nanoid(),
          type: "StaticImage",
          name: newFieldName,
          src: "https://ik.imagekit.io/cezllypgi/M2Pflt01.svg?updatedAt=1745242241126",
          scaleX: 0.5,
          scaleY: 0.5,
          metadata: {
            type: "field",
          },
        }
        editor.objects.add(options)
      }
      // Reset form
      resetForm();
      setIsModalOpen(false);
    }
  };

  const formatDateTimePreview = (date:any, time:any, showDate:any, showTime:any, dateFormatStr:any, timeFormatStr:any) => {
    let preview = '';
    
    if (showDate) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      
      if (dateFormatStr === "yyyy-MM-dd") {
        preview += `${year}-${month}-${day}`;
      } else if (dateFormatStr === "dd/MM/yyyy") {
        preview += `${day}/${month}/${year}`;
      } else if (dateFormatStr === "MM/dd/yyyy") {
        preview += `${month}/${day}/${year}`;
      }
    }
    
    if (showDate && showTime) {
      preview += ' ';
    }
    
    if (showTime) {
      const hours24 = time.getHours();
      const minutes = String(time.getMinutes()).padStart(2, '0');
      
      if (timeFormatStr === "HH:mm") {
        preview += `${String(hours24).padStart(2, '0')}:${minutes}`;
      } else {
        const hours12 = hours24 % 12 || 12;
        const ampm = hours24 >= 12 ? 'PM' : 'AM';
        preview += `${String(hours12).padStart(2, '0')}:${minutes} ${ampm}`;
      }
    }
    
    return preview || 'Sin formato seleccionado';
  };

  const resetForm = () => {
    setNewFieldName("");
    setNewFieldContent("");
    setFieldType([typeOptions[0]]);
    setIncludeDate(true);
    setIncludeTime(true);
    setDateFormat([dateFormatOptions[0]]);
    setTimeFormat([timeFormatOptions[0]]);
  };

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
    if (activeObject) {
      editor.objects.remove(id);
    }
    console.log('Eliminando objeto:', id);
  };

  const handleSave = (name:string) => {
    if (activeObject) {
      editor.objects.update({ name: name })
    }
  };

  const isSelected = (id: string) => {
    const currentObject = activeObject as IStaticText
    const selectedObjects = editor.objects.findById(id);
    const selectedObject = Array.isArray(selectedObjects) && selectedObjects.length > 0 ? selectedObjects[0] as IStaticText : null;
    if (activeObject) {
      return selectedObject === currentObject
    }
    return false
  }

  const handleUpdateImage = (image:string) =>{
    if (activeObject) {
      editor.objects.update({ src: image })
    }
    console.log('Actualizando imagen:', image);
  }

  return (
    <><Block $style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Block
        $style={{
          display: "flex",
          alignItems: "center",
          fontWeight: 500,
          justifyContent: "space-between",
          padding: "1.5rem",
        }}
      >
        <Block>Campos</Block>

        <Block onClick={() => setIsSidebarOpen(false)} $style={{ cursor: "pointer", display: "flex" }}>
          <AngleDoubleLeft size={18} />
        </Block>
      </Block>
      <Scrollable>
        <Block padding="0 1.5rem">
          <Button
            onClick={() => setIsModalOpen(true)}
            size={SIZE.compact}
            overrides={{
              Root: {
                style: {
                  width: "100%",
                },
              },
            }}
          >
            Add
          </Button>
          {localTextObjects.map((textObj) => (
            <Block
              key={textObj.id}
              marginBottom="0.5rem"
              onClick={() => editor.objects.select(textObj.id)}
              $style={{
                borderRadius: "4px",
              }}
            >
              {/* Elemento principal */}
              <Block $style={{
                cursor: "pointer",
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.5rem",
                backgroundColor: "#f6f6f6",
                borderRadius: editingId === textObj.id ? "4px 4px 0 0" : "4px",
                boxShadow: isSelected(textObj.id) ? "0 0 8px rgba(0, 112, 243, 0.5)" : "none",
              }}
              >
                <Block>{textObj.name || 'Texto sin nombre'}</Block>
                <Block $style={{
                  display: "flex",
                  gap: "0.5rem",
                }}>
                  {textObj.type === "StaticText" && <Button
                    onClick={() => handleEdit(textObj)}
                    size={SIZE.mini}
                    kind={"tertiary"}
                    disabled={textObj.type !== "StaticText"}                 
                    > 
                    {editingId === textObj.id ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </Button>}
                  <Button
                    onClick={() => handleDelete(textObj.id)}
                    size={SIZE.mini}
                    kind="tertiary"
                  >
                    <Delete size={22} />
                  </Button>
                </Block>
              </Block>
              {/* Panel de edición desplegable */}
              {editingId === textObj.id && (
                <Block
                  $style={{
                    padding: "0.25rem",
                    backgroundColor: "#f0f0f0",
                    borderTop: "1px solid #e0e0e0",
                    borderRadius: "0 0 4px 4px"
                  }}
                >
                  <Block >
                    <EditableName 
                      textObj={textObj} 
                      handleSave={handleSave} 
                    />
                    <Textarea
                      value={editValue}
                      onChange={e => {
                        const newValue = e.target.value
                        setEditValue(newValue)

                        // Actualiza el texto en el canvas inmediatamente
                        if (activeObject) {
                          editor.objects.update({ text: newValue })
                        }
                      } }
                      placeholder="Ingrese el valor"
                      size="compact"
                      rows={2} // Número de filas visibles inicialmente
                      maxLength={500} // Opcional: limitar caracteres si es necesario
                      overrides={{
                        Input: {
                          style: {
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #CCCCCC',
                            borderRadius: '4px',
                            padding: '8px',
                            fontSize: '14px',
                            lineHeight: '1.4',
                            minHeight: '60px',
                            '::placeholder': {
                              color: '#AAAAAA'
                            },

                          }
                        }
                      }} />
                  </Block>
                </Block>

              )}
            </Block>
          ))}
        </Block>
      </Scrollable>
    </Block><Modal
      onClose={() => setIsModalOpen(false)}
      isOpen={isModalOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
    >
        <ModalHeader>Nuevo campo</ModalHeader>
        <ModalBody>
          <FormControl label="Tipo de campo">
            <Select
              options={typeOptions}
              value={fieldType}
              onChange={({ value }) => setFieldType(value as { id: string; label: string }[])}
              clearable={false}
              searchable={false} />
          </FormControl>

          <FormControl label="Nombre del campo">
            <Input
              value={newFieldName}
              onChange={e => setNewFieldName(e.target.value)}
              placeholder="Ej: Título, Fecha, Nombre..."
              clearOnEscape />
          </FormControl>

          {/* {fieldType[0].id === "text" && (
            <FormControl label="Contenido del campo">
              <Textarea
                value={newFieldContent}
                onChange={e => setNewFieldContent(e.target.value)}
                placeholder="Escribe aquí el contenido..."
                size="compact"
                rows={3}
                 
              />
            </FormControl>
          )} */}

          {fieldType[0].id === "time" && (
            <>
              <FormControl label="Opciones de tiempo">
                <Block 
                $style = {{display:"flex", flexDirection:"column", gap:"0.5rem"}}
                >
                  <Checkbox
                    checked={includeDate}
                    onChange={e => setIncludeDate(e.target.checked)}
                  >
                    Incluir fecha
                  </Checkbox>
                  
                  {includeDate && (
                    <>
                      <FormControl label="Formato de fecha">
                        <Select
                          options={dateFormatOptions}
                          value={dateFormat}
                          onChange={({value}) => setDateFormat(value.map(v => ({ id: v.id as string, label: v.label as string })))}
                          clearable={false}
                          searchable={false}
                        />
                      </FormControl>
                      
                      <FormControl label="Valor de fecha">
                        <DatePicker
                          value={selectedDate}
                          onChange={({date}) => setSelectedDate(Array.isArray(date) ? date[0] || new Date() : date || new Date())}
                          formatString={dateFormat[0].id}
                          placeholder="Seleccionar fecha"
                          clearable={false}
                        />
                      </FormControl>
                    </>
                  )}
                  
                  <Checkbox
                    checked={includeTime}
                    onChange={e => setIncludeTime(e.target.checked)}
                  >
                    Incluir hora
                  </Checkbox>
                  
                  {includeTime && (
                    <>
                      <FormControl label="Formato de hora">
                        <Select
                          options={timeFormatOptions}
                          value={timeFormat}
                          onChange={({value}) => setTimeFormat(value.map(v => ({ id: v.id as string, label: v.label as string })))}
                          clearable={false}
                          searchable={false}
                        />
                      </FormControl>
                      
                      <FormControl label="Valor de hora">
                        <TimePicker
                          onChange={(value) => setSelectedTime(typeof value === 'string' ? new Date(`1970-01-01T${value}`) : value || new Date())}
                          format={timeFormat[0].id === "HH:mm" ? "24" : "12"}
                          value={selectedTime}
                          step={900}
                          creatable={true}
                        />
                      </FormControl>
                    </>
                  )}
                </Block>
              </FormControl>
              
              {/* Previsualización del formato de fecha/hora */}
              <Block 
              $style = {{marginTop:"1rem", 
                padding:"0.5rem", 
                backgroundColor:"rgba(0,0,0,0.05)", 
                borderRadius:"4px"}}
              >
                <Block $style = {{marginBottom:"0.25rem", fontSize:"12px"}}>Vista previa:</Block>
                <Block>
                  {formatDateTimePreview(selectedDate, selectedTime, includeDate, includeTime, dateFormat[0].id, timeFormat[0].id)}
                </Block>
              </Block>
            </>
          )}

          {fieldType[0].id === "image" && (
            <Block padding="1rem" display="none" justifyContent="center">
            </Block>
          )}
        </ModalBody>
        <ModalFooter>
          <ModalButton kind="tertiary" onClick={() => setIsModalOpen(false)}>
            Cancelar
          </ModalButton>
          <ModalButton onClick={handleAddNewField} >
            Crear campo
          </ModalButton>
        </ModalFooter>
      </Modal></>
    
  )
}

export default DocumentFields
