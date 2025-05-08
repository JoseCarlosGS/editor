import React from 'react';
import { Button } from '@base-ui/react';
import { AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Error403: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Volver a la página anterior
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <div style={styles.iconWrapper}>
                    <AlertCircle size={64} strokeWidth={1.5} color="#ef4444" />
                </div>
                <h1 style={styles.code}>403</h1>
                <h2 style={styles.title}>Access Denied</h2>
                <p style={styles.message}>
                    You do not have permission to view this page.
                </p>
                <Button style={styles.button} onClick={handleGoBack}>
                    Go Back
                </Button>
            </div>
        </div>
    );
};

export default Error403;

// === Estilos en objeto JS ===
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9fafb',
        padding: '1rem',
        fontFamily: 'Arial, sans-serif',
    } as React.CSSProperties,

    content: {
        textAlign: 'center',
        maxWidth: '400px',
    } as React.CSSProperties,

    iconWrapper: {
        marginBottom: '1rem',
        color: '#ef4444', // rojo tipo error
    } as React.CSSProperties,

    code: {
        fontSize: '4rem',
        color: '#b91c1c',
        margin: '0.5rem 0',
    } as React.CSSProperties,

    title: {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#111827',
        margin: '0.75rem 0',
    } as React.CSSProperties,

    message: {
        fontSize: '1rem',
        color: '#4b5563',
        marginBottom: '1.5rem',
    } as React.CSSProperties,

    button: {
        padding: '0.625rem 1.25rem',
        fontSize: '1rem',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
    } as React.CSSProperties,
};