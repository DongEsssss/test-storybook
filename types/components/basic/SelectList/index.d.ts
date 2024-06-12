import { type TextFieldProps } from '@mui/material';
interface SelectListProps extends Omit<TextFieldProps, 'variant'> {
    items: any;
    label: string;
    placeholder: string;
    keyTitle: string;
    popperHeight?: number;
    variant?: 'filled';
    clearText?: string;
    noOptionsText?: string;
    defaultValue?: unknown;
    disableClearable?: boolean;
    onChangeItem: (items: any) => void;
}
export declare const SelectList: ({ items, label, placeholder, defaultValue, disableClearable, keyTitle, variant, margin, focused, helperText, error, disabled, popperHeight, clearText, noOptionsText, onChangeItem, }: SelectListProps) => import("react/jsx-runtime").JSX.Element;
export {};
