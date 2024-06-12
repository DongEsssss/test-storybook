import type { ReactElement } from 'react';
import React from 'react';
interface TooltipsProps {
    children: ReactElement;
    tooltipText: string;
    color?: 'light' | 'dark';
    tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left' | 'bottom-end' | 'bottom-start' | 'left-end' | 'left-start' | 'right-end' | 'right-start' | 'top-end' | 'top-start';
    tooltipArrow?: boolean;
    additionalStyles?: React.CSSProperties;
    arrowStyles?: React.CSSProperties;
}
export declare const Tooltips: ({ children, tooltipPlacement, tooltipArrow, tooltipText, color, additionalStyles, arrowStyles, }: TooltipsProps) => any;
export {};
