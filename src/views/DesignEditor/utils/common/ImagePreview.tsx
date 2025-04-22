import React, { useState, useRef } from 'react';
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import { FileUploader } from "baseui/file-uploader";
import { StatefulTooltip } from "baseui/tooltip";
import { ILayer, IStaticImage } from "@layerhub-io/types";
import { toBase64 } from "~/utils/data"

interface ImagePreviewProps {
  textObj: IStaticImage;
  handleUpdateImage: (src: string) => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ textObj, handleUpdateImage }) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Manejar la selección de un archivo
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Validar que sea una imagen
      if (!file.type.startsWith('image/')) {
        alert('Por favor seleccione un archivo de imagen válido.');
        return;
      }
      
      // Crear URL de vista previa
      const objectUrl = URL.createObjectURL(file);
      const b64 = await toBase64(file) as unknown as string;
      setPreviewSrc(b64);
      
      // Opcionalmente, aquí podrías subir la imagen a tu servidor
      // y obtener la URL final, en lugar de usar la URL temporal
    }
  };

  // Aplicar la imagen seleccionada
  const applyImage = () => {
    if (previewSrc) {
      handleUpdateImage(previewSrc);
      setPreviewSrc(null);
    }
  };

  // Cancelar la selección
  const cancelSelection = () => {
    if (previewSrc) {
      URL.revokeObjectURL(previewSrc);
      setPreviewSrc(null);
    }
  };

  // Iniciar el proceso de selección de archivo
  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Block
      display="flex"
      flexDirection="column"
      marginTop="8px"
      marginBottom="8px"
    >
      {/* Imagen actual o previsualización */}
      <Block
        width="100%"
        height="120px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        backgroundColor="#f8f8f8"
        marginBottom="8px"
        $style={{
          border: "1px solid #CCCCCC",
          borderRadius: "4px",
          position: "relative"
        }}
      >
        {(previewSrc || textObj.preview) ? (
          <img
            src={previewSrc || textObj.preview}
            alt="Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain"
            }}
          />
        ) : (
          <Block
            color="#999"
            font="font300"
          >
            Sin imagen
          </Block>
        )}
      </Block>

      {/* Controles de imagen */}
      <Block
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {previewSrc ? (
          // Botones para confirmar o cancelar la nueva imagen
          <>
            <Button
              size="compact"
              kind="secondary"
              onClick={cancelSelection}
            >
              Cancelar
            </Button>
            <Button
              size="compact"
              kind="primary"
              onClick={applyImage}
            >
              Aplicar
            </Button>
          </>
        ) : (
          // Botón para seleccionar una nueva imagen
          <Button
            size="compact"
            kind="secondary"
            onClick={triggerFileSelect}
            overrides={{
              BaseButton: {
                style: {
                  width: "100%"
                }
              }
            }}
          >
            {textObj.preview ? "Cambiar imagen" : "Seleccionar imagen"}
          </Button>
        )}
        
        {/* Input de archivo oculto */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          style={{ display: 'none' }}
        />
      </Block>
    </Block>
  );
};

export default ImagePreview;