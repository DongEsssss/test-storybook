import { type TextFieldProps } from '@mui/material';
interface InputProps extends Omit<TextFieldProps, 'variant'> {
    variant?: 'outlined';
    tooltipMessage?: string;
}
export declare const Input: ({ variant, label, placeholder, helperText, error, tooltipMessage, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
