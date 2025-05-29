import React, { useState, useEffect } from "react";

export type CustomAlertWithButtonsProps = {
    icon?: React.ReactNode;
    message: string;
    onAccept: () => void;
    onCancel?: () => void;
    acceptText?: string;
    cancelText?: string;
};

const CustomAlertWithButtons: React.FC<CustomAlertWithButtonsProps> = ({
    icon,
    message,
    onAccept,
    onCancel,
    acceptText = "Aceptar",
    cancelText = "Cancelar",
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger enter animation
        const timeout = setTimeout(() => setIsVisible(true), 10);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    width: '90%',
                    maxWidth: 360,
                    background: '#fff',
                    borderRadius: 12,
                    padding: '16px 20px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                    textAlign: 'center',
                    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
                }}
            >
                {icon && <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>}
                <div style={{ marginBottom: 20, fontSize: 15, lineHeight: 1.4 }}>{message}</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
                    <button
                        onClick={onAccept}
                        style={{
                            flex: 1,
                            padding: '10px 0',
                            background: '#007bff',
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: 500,
                            border: 'none',
                            borderRadius: 8,
                            cursor: 'pointer',
                        }}
                    >
                        {acceptText}
                    </button>
                    {onCancel && (
                        <button
                            onClick={onCancel}
                            style={{
                                flex: 1,
                                padding: '10px 0',
                                background: '#f0f0f0',
                                color: '#333',
                                fontSize: 14,
                                fontWeight: 500,
                                border: 'none',
                                borderRadius: 8,
                                cursor: 'pointer',
                            }}
                        >
                            {cancelText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomAlertWithButtons;