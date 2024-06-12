import { type CardProps } from './Card';
import React from 'react';
export type CardItems = Omit<CardProps, 'variant' | 'imageSize' | 'imageShape' | 'buttonText' | 'status'>;
export interface SubItems {
    label: string;
    value: string;
}
interface CardsProps {
    items: CardItems[];
    imageSize?: CardProps['imageSize'];
    imageShape?: CardProps['imageShape'];
    imageElement?: CardProps['imageElement'];
    buttonText: CardProps['buttonText'];
    columns?: number;
    description?: CardProps['description'];
    addButtonClicked?: boolean;
    showAddNewCard?: boolean;
    newButtonText?: string;
    onNewCardButton?: React.MouseEventHandler | undefined;
    onCardClick?: (item: CardItems) => void;
    subMenu?: boolean;
    submenuOptions?: SubItems[];
    submenuClick?: (sortMenu: string, id: string | undefined) => undefined;
    tooltipText?: string;
    showStatus?: boolean;
    status?: string;
    boxClickable?: boolean;
    size?: CardProps['size'];
}
export declare const Cards: ({ items, buttonText, description, imageSize, imageShape, imageElement, addButtonClicked, subMenu, submenuOptions, tooltipText, showStatus, boxClickable, size }: CardsProps) => import("react/jsx-runtime").JSX.Element;
export {};
