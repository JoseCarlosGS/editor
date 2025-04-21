
import React, { useState } from 'react';
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { StatefulTooltip } from "baseui/tooltip";
import { Block } from "baseui/block";
import { ILayer } from "@layerhub-io/types";
import { Check } from 'baseui/icon';
import Edit from "~/components/Icons/Edit"

interface EditableNameProps {
  textObj: ILayer;
  handleSave: (newName: string) => void;
  width?: string;
}

const EditableName: React.FC<EditableNameProps> = ({ 
    textObj, 
    handleSave, 
    width = "250px"  }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(textObj.name!);

  const toggleEdit = (): void => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setNewName(textObj.name!); // Reset to original if canceling
    }
  };

  const saveChanges = (): void => {
    handleSave(newName);
    setIsEditing(false);
  };
  const containerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "36px" // Altura fija para evitar saltos
  };

  const contentStyle = {
    width: width,
    paddingRight: "8px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap" as const
  };

  //onChange={(e) => setNewName((e.target as HTMLInputElement).value)}

  return (
    <Block style={containerStyle}>
      <Block style={contentStyle}>
        {isEditing ? (
          <Input
            value={newName}
            onChange={(e) => setNewName((e.target as HTMLInputElement).value)}
            overrides={{
              Root: {
                style: {
                  width: "100%",
                  height: "32px"
                }
              },
              Input: {
                style: {
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #CCCCCC',
                  borderRadius: '4px',
                  fontSize: '14px',
                  padding: '0 8px',
                  height: "100%"
                }
              }
            }}
          />
        ) : (
          <Block
            padding="6px 8px"
            font="font400"
            style={{
              height: "32px",
              overflow: "hidden", 
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              border: "1px solid transparent",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center"
            }}
          >
            {textObj.name}
          </Block>
        )}
      </Block>
      
      <Block width="80px" display="flex" justifyContent="flex-end">
        {isEditing ? (
          <Button 
            onClick={saveChanges}
            size="compact"
            kind="tertiary"
          >
            <Check size={22} />
          </Button>
        ) : (
          <Button 
            onClick={toggleEdit}
            size="compact"
            kind="tertiary"
            
          >
            <Edit size={22}/>
          </Button>
        )}
      </Block>
    </Block>
  );
};

export default EditableName;