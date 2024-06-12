import { type TextFieldProps } from '@mui/material';
export type TagSizeType = 'small' | 'medium' | 'large';
export interface PartsType {
    text: string;
    highlight: boolean;
}
export type IHashMap<T> = Record<string, T>;
export interface MultiSelectListProps extends Omit<TextFieldProps, 'variant' | 'size'> {
    items: any;
    label: string;
    placeholder: string;
    keyTitle: string;
    popperHeight?: number;
    variant?: 'filled';
    clearText?: string;
    noOptionsText?: string;
    buttonAddMore: string;
    notItemsText: string;
    tagSize?: TagSizeType;
    filterOptionsArgs?: IHashMap<string>;
    defaultValues?: [];
    onAddItem: (items: []) => void;
}
export declare const MultiSelectList: ({ items, label, placeholder, keyTitle, variant, margin, focused, helperText, error, disabled, popperHeight, clearText, noOptionsText, buttonAddMore, notItemsText, tagSize, filterOptionsArgs, defaultValues, onAddItem, }: MultiSelectListProps) => import("react/jsx-runtime").JSX.Element;
