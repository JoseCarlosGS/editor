import React from "react";
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import { Heading, HeadingLevel } from "baseui/heading";

const Error403: React.FC = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <Block
            $style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                background: "#FFFFFF",
                fontFamily: "Roboto, sans-serif",
            }}
        >

            <Block
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
                backgroundColor="mono200"
                padding="scale800"
            >
                <HeadingLevel>
                    <Heading styleLevel={3}>403 - Acceso Denegado</Heading>
                </HeadingLevel>
                <Block marginTop="scale600" marginBottom="scale600">
                    No tienes permiso para acceder a esta página.
                </Block>
                <Button onClick={handleGoBack}>Volver</Button>
            </Block>
        </Block>
    );
};

export default Error403;