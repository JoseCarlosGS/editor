import React, { useEffect, useState } from 'react';
import {
    AlertCircle,
    Info,
    CheckCircle,
    AlertTriangle,
    X,
} from 'lucide-react';

export type ErrorType = 'error' | 'warning' | 'info' | 'success';

interface ErrorAlertProps {
    type: ErrorType;
    message: string;
    open: boolean;
    duration?: number; // en milisegundos, por defecto 4000
    onClose?: () => void;
}

const iconMap: Record<ErrorType, JSX.Element> = {
    error: <AlertCircle size={20} />,
    warning: <AlertTriangle size={20} />,
    info: <Info size={20} />,
    success: <CheckCircle size={20} />,
};

const bgMap: Record<ErrorType, string> = {
    error: '#fdecea',
    warning: '#fff4e5',
    info: '#e8f4fd',
    success: '#edf7ed',
};

const textMap: Record<ErrorType, string> = {
    error: '#d32f2f',
    warning: '#ed6c02',
    info: '#0288d1',
    success: '#2e7d32',
};

const typeColors: Record<ErrorType, string> = {
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
    success: '#4caf50',
};

export const CustomAlert: React.FC<ErrorAlertProps> = ({
    type,
    message,
    open,
    duration = 4000,
    onClose,
}) => {
    const [visible, setVisible] = useState(open);

    useEffect(() => {
        setVisible(open);
        if (open) {
            const timer = setTimeout(() => {
                setVisible(false);
                onClose?.();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [open, duration, onClose]);

    if (!visible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 24,
                left: '50%',
                transform: 'translateX(-50%)',
                background: bgMap[type],
                color: textMap[type],
                padding: '12px 20px',
                borderRadius: 10,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                zIndex: 9999,
                minWidth: 220,
                maxWidth: 360,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 14,
                fontWeight: 500,
            }}
            role="alert"
        >
            {iconMap[type]}
            <span style={{ flex: 1 }}>{message}</span>
            <button
                onClick={() => {
                    setVisible(false);
                    onClose?.();
                }}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: textMap[type],
                    fontSize: 18,
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                }}
                aria-label="Cerrar alerta"
            >
                <X size={18} />
            </button>
        </div>
    );
};

export default CustomAlert;