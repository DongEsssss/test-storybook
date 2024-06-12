export interface ButtonProps {
    label: string;
    color?: 'secondary' | 'warning' | 'default' | 'error' | 'info' | 'success' | 'primary';
}
export declare const SwitchButton: ({ label, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
