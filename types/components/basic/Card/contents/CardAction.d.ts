 ;
export interface CardButtonsProps {
    buttonText: string;
    onButtonClick?: React.MouseEventHandler;
    onSecondaryButtonClick?: React.MouseEventHandler;
    addButtonClicked?: boolean;
}
export declare const CardButtons: ({ buttonText, onButtonClick, onSecondaryButtonClick, addButtonClicked, }: CardButtonsProps) => import("react/jsx-runtime").JSX.Element;
