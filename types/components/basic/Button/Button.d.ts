import { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    size?: 'small' | 'medium' | 'large';
    variant?: 'text' | 'outlined' | 'contained';
}
export declare const Button: ({ variant, color: colorProp, ...props }: MuiButtonProps) => any;
