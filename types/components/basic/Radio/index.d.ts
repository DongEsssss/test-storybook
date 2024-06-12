import { type RadioProps as MuiRadioProps } from '@mui/material/Radio';
interface RadioProps extends Omit<MuiRadioProps, 'size'> {
    size?: 'medium' | 'small';
    label?: string | number;
}
export declare const Radio: ({ size, label, ...props }: RadioProps) => import("react/jsx-runtime").JSX.Element;
export {};
