import { useEffect, useReducer, useState } from "react"
import { useActiveObject, useEditor, useObjects } from "@layerhub-io/react"
import { ILayer, IStaticImage, IStaticText } from "@layerhub-io/types"
import useEditorHistoryListener from "~/hooks/useEditorHistoryListener"
import Scrollable from "~/components/Scrollable"
import { Button, SIZE } from "baseui/button"
import { FontItem } from "~/interfaces/common"
import { loadFonts } from "~/utils/fonts"
import { nanoid } from "nanoid"
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, ROLE } from "baseui/modal";
import { Block } from "baseui/block"
import AngleDoubleLeft from "~/components/Icons/AngleDoubleLeft"
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen"
import Delete from "~/components/Icons/Delete"
import { ChevronDown } from "baseui/icon"
import { ChevronUp } from "baseui/icon"
import { Textarea } from 'baseui/textarea';
import { Input } from "baseui/input";
import { Select } from "baseui/select";
import { FormControl } from "baseui/form-control";
import EditableName from "~/components/EditableName"
import { toBase64 } from "~/utils/data"
import ImagePreview from "~/views/DesignEditor/utils/common/ImagePreview"
import { Type, Image, QrCode } from "lucide-react"
import { useTranslation } from "react-i18next"

const DocumentFields = () => {
  const editor = useEditor()
  const activeObject = useActiveObject() as ILayer
  const setIsSidebarOpen = useSetIsSidebarOpen()
  const { t } = useTranslation("editor")
  const objects = useObjects() as ILayer[]
  const [thereIsQr, setThereIsQr] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editType, setEditType] = useState<{ label: string; id: string }[]>([]);
  const [editValue, setEditValue] = useState('');

  const [localObjects, setLocalObjects] = useState<ILayer[]>([])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFieldName, setNewFieldName] = useState("");
  const [newFieldContent, setNewFieldContent] = useState("");
  const [fieldType, setFieldType] = useState([{ id: "text", label: "Texto" }]);

  useEffect(() => {
    setLocalObjects(objects)
  }, [objects])

  useEditorHistoryListener(() => {
    console.log('Editor history changed')
    const currentObjects = editor.objects.list() as ILayer[]
    setLocalObjects(currentObjects)
  })
  const localTextObjects = localObjects.filter(obj => {
    return obj.metadata?.type === 'field';

  })

  useEffect(() => {
    const hasQr = localObjects.some(obj => obj.metadata?.contentType === 'qr');
    setThereIsQr(hasQr);
  }, [localObjects]);

  const typeOptions = [
    { id: "text", label: t(`panels.fields.modal.text`), icon: Type },
    //{ id: "signature", label: "Firma", icon: Type },
    { id: "image", label: t(`panels.fields.modal.image`), icon: Image },
    { id: "qr-code", label: t(`panels.fields.modal.qrCode`), icon: QrCode },
  ];

  const handleAddNewField = async () => {

    if (newFieldName.trim()) {
      if (fieldType[0].id !== "image") {
        const font: FontItem = {
          name: "OpenSans-Regular",
          url: "https://fonts.gstatic.com/s/opensans/v27/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",
        }
        await loadFonts([font])
        // Crear objeto con los datos según el tipo
        if (fieldType[0].id === "text") {
          const options = {
            id: nanoid(),
            type: "StaticText",
            width: 420,
            text: newFieldName,
            fontSize: 36,
            fontFamily: font.name,
            textAlign: "center",
            fontStyle: "normal",
            fontURL: font.url,
            fill: "#333333",
            name: newFieldName,
            metadata: {
              type: "field",
              contentType: "text"
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
            text: newFieldName,
            fontSize: 36,
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
                "M", 60, 0
              ],
              [
                "L", 0, 0
              ],
              [
                "L", 0, 60
              ],
              [
                "L", 60, 60
              ],
              [
                "L", 60, 0
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
        if (fieldType[0].id === "qr-code") {
          const response = await fetch("https://cdn-icons-png.flaticon.com/512/714/714390.png")
          const blob = await response.blob()
          const file = new File([blob], "image.jpg", { type: blob.type });
          const base64 = await toBase64(file) as unknown as string
          const options = {
            id: nanoid(),
            type: "StaticImage",
            name: newFieldName,
            src: base64,
            preview: base64,
            scaleX: 0.4,
            scaleY: 0.4,
            metadata: {
              type: "field",
              contentType: "qr"
            },
          }
          editor.objects.add(options)
        }

        //addObject(fieldData);
      } else {
        const response = await fetch("https://ik.imagekit.io/cezllypgi/M2Pflt01.svg?updatedAt=1745242241126");
        const blob = await response.blob()
        const file = new File([blob], "image.jpg", { type: blob.type });
        const base64 = await toBase64(file) as unknown as string
        const options = {
          id: nanoid(),
          type: "StaticImage",
          name: newFieldName,
          src: base64,
          preview: base64,
          scaleX: 0.5,
          scaleY: 0.5,
          metadata: {
            type: "field",
            contentType: "image"
          },
        }
        editor.objects.add(options)
      }
      resetForm();
      setIsModalOpen(false);
    }
  };

  const resetForm = () => {
    setNewFieldName("");
    setNewFieldContent("");
    setFieldType([typeOptions[0]]);
  };

  const handleEdit = (textObj: any) => {
    if (editingId === textObj.id) {
      setEditingId(null);
    } else {
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
  };

  const handleSave = (name: string) => {
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
        <Block>{t(`panels.fields.fields`)}</Block>

        <Block onClick={() => setIsSidebarOpen(false)} $style={{ cursor: "pointer", display: "flex" }}>
          <AngleDoubleLeft size={18} />
        </Block>
      </Block>
      <Scrollable>
        <Block padding="0 1.5rem">
          <Button
            onClick={() => {
              editor.objects.deselect();
              setIsModalOpen(true);
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
            {t(`panels.fields.add`)}
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
                  <Button
                    onClick={() => handleEdit(textObj)}
                    size={SIZE.mini}
                    kind={"tertiary"}
                  >
                    {editingId === textObj.id ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </Button>
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
                    {textObj.type == "StaticText" ? (<Textarea
                      value={editValue}
                      onChange={e => {
                        const newValue = e.target.value
                        setEditValue(newValue)

                        // Actualiza el texto en el canvas inmediatamente
                        if (activeObject) {
                          editor.objects.update({ text: newValue })
                        }
                      }}
                      placeholder="Ingrese el valor"
                      size="compact"
                      rows={2}
                      maxLength={500}
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
                      }} />) : (<ImagePreview
                        textObj={textObj as IStaticImage}
                        handleUpdateImage={(src) => {
                          // Actualiza la imagen en el canvas
                          if (activeObject) {
                            // Encuentra el objeto en el editor
                            const obj = editor.objects.findById(textObj.id)[0];
                            if (obj && typeof obj.setSrc === "function") {
                              // Usa setSrc para actualizar el src de manera persistente
                              obj.setSrc(src, () => {
                                console.log('src actualizado correctamente:', obj.getSrc());
                              });
                              // Opcional: Actualiza el preview si es necesario
                              editor.objects.update({ id: textObj.id, preview: src });

                            } else {
                              console.error('El objeto no tiene el método setSrc');
                            }
                          }
                        }}
                      />)}
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
        <ModalHeader>{t(`panels.fields.modal.newField`)}</ModalHeader>
        <ModalBody>
          <FormControl label={t(`panels.fields.modal.fieldType`)}>
            <Block display="flex" justifyContent="space-between" marginBottom="1rem">
              {typeOptions.map(option => {
                const isQr = option.id === "qr-code";
                const isDisabled = isQr && thereIsQr;
                return (
                  <Button
                    key={option.id}
                    onClick={() => setFieldType([option])}
                    kind={fieldType[0].id === option.id ? "primary" : "secondary"}
                    size={SIZE.compact}
                    disabled={isDisabled}
                    overrides={{
                      Root: {
                        style: {
                          flex: 1,
                          marginLeft: "0.5rem",
                          marginRight: "0.5rem",
                          marginTop: "0",
                          marginBottom: "0",
                          backgroundColor: fieldType[0].id === option.id ? "#0070f3" : "#f0f0f0",
                          color: fieldType[0].id === option.id ? "#ffffff" : "#000000",
                          opacity: isDisabled ? 0.5 : 1,
                          cursor: isDisabled ? "not-allowed" : "pointer",
                        },
                      },
                    }}
                  >
                    <option.icon size={48} />
                    {option.label}
                  </Button>
                );
              })}
            </Block>
          </FormControl>

          <FormControl label={t(`panels.fields.modal.fieldName`)}>
            <Input
              value={newFieldName}
              onChange={e => setNewFieldName(e.target.value)}
              placeholder={t(`panels.fields.modal.example`)}
              clearOnEscape />
          </FormControl>

          {fieldType[0].id === "image" && (
            <Block padding="1rem" display="none" justifyContent="center">
            </Block>
          )}
        </ModalBody>
        <ModalFooter>
          <ModalButton kind="tertiary" onClick={() => setIsModalOpen(false)}>
            {t(`common.buttonLabels.cancel`)}
          </ModalButton>
          <ModalButton onClick={handleAddNewField} >
            {t(`panels.fields.modal.createField`)}
          </ModalButton>
        </ModalFooter>
      </Modal></>

  )
}

export default DocumentFields
