import { type AutocompleteRenderInputParams } from '@mui/material';
import { type MultiSelectListProps } from '..';
interface SelectInputProps extends Omit<MultiSelectListProps, 'items' | 'onAddItem' | 'buttonAddMore' | 'notItemsText' | 'filterOptionsArgs'> {
    params: AutocompleteRenderInputParams;
    autoFocus?: boolean;
}
export declare const SelectInput: ({ params, label, placeholder, margin, focused, helperText, error, disabled, autoFocus, }: SelectInputProps) => any;
export {};
