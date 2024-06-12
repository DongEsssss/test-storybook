import { type TextareaAutosizeProps } from '@mui/material';
interface TextareaProps extends TextareaAutosizeProps {
    label?: string;
    helperText?: string;
    error?: boolean;
}
export declare const Textarea: ({ label, placeholder, helperText, error, ...props }: TextareaProps) => import("react/jsx-runtime").JSX.Element;
export {};
