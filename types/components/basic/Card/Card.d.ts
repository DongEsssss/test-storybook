import { CardHeaderProps } from './contents/CardHeader';
import { CardContentProps } from './contents/CardContent';
import { CardImageProps } from './contents/CardImage';
import { CardButtonsProps } from './contents/CardAction';
export interface CardProps extends CardHeaderProps, CardContentProps, CardImageProps, CardButtonsProps {
    size?: Exclude<Size, 'preview'>;
}
type Size = 'minimal' | 'normal' | 'large';
export declare const Card: ({ title, subtitle, description, image, imageSize, imageShape, imageLoader, imageType, buttonText, onButtonClick, onSecondaryButtonClick, size: initialSize }: CardProps) => import("react/jsx-runtime").JSX.Element;
export {};
