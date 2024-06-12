import { type CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
interface CheckboxProps extends Omit<MuiCheckboxProps, 'size'> {
    size?: 'medium' | 'small' | 'large';
    label?: string | number;
}
export declare const Checkbox: ({ size, label, ...props }: CheckboxProps) => any;
export {};
