/// <reference types="react" />
export type CardImageSize = 'normal' | 'medium' | 'small';
export type CardImageShape = 'round' | 'square';
export type CardImageType = 'box' | 'background';
export interface ICardImage {
    src: string;
    alt?: string;
}
export interface CardImageProps {
    image?: ICardImage;
    imageSize?: CardImageSize;
    imageShape?: CardImageShape;
    imageElement?: JSX.Element;
    preview?: boolean;
    imageLoader?: (src: string) => Promise<ArrayBuffer>;
    imageType?: CardImageType;
}
export declare const CardImage: ({ image, imageSize, imageShape, imageLoader, imageElement, preview, }: CardImageProps) => import("react/jsx-runtime").JSX.Element;
