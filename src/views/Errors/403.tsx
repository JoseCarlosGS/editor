import React from "react";
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import { Heading, HeadingLevel } from "baseui/heading";
import { ShieldOff } from "lucide-react";
import { environment } from "~/constants/environment/environment";

const Error403: React.FC = () => {
    const handleGoBack = () => {
        window.location.href = environment.frontUrl;
        //window.history.back();

    };

    return (
        <Block
            $style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f5f5",
                fontFamily: "Roboto, sans-serif",
            }}
        >
            <Block
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                backgroundColor="white"
                padding="scale1200"
                overrides={{
                    Block: {
                        style: {
                            borderRadius: "16px",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                            maxWidth: "400px",
                            width: "100%",
                        },
                    },
                }}
            >
                <ShieldOff size={48} color="#ff4d4f" />
                <HeadingLevel>
                    <Heading styleLevel={3} style={{ marginTop: "16px" }}>
                        403 - Acceso Denegado
                    </Heading>
                </HeadingLevel>
                <Block
                    marginTop="scale600"
                    marginBottom="scale600"
                    color="mono700"
                    font="font300"
                >
                    No tienes permiso para acceder a esta página.
                </Block>
                <Button onClick={handleGoBack} overrides={{
                    BaseButton: {
                        style: {
                            backgroundColor: "#276ef1",
                            ":hover": { backgroundColor: "#174eb6" },
                        },
                    },
                }}>
                    Volver
                </Button>
            </Block>
        </Block>
    );
};

export default Error403;
