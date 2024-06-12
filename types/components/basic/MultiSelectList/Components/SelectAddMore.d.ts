import { type TagSizeType } from '..';
interface SelectAddMoreProps {
    selected: Array<Record<string, string>>;
    buttonAddMore: string;
    notItemsText: string;
    label: string;
    keyTitle: string;
    margin?: 'normal' | 'none' | 'dense';
    tagSize?: TagSizeType;
    handleShowItems: () => void;
}
export declare const SelectAddMore: ({ selected, buttonAddMore, notItemsText, label, keyTitle, margin, tagSize, handleShowItems, }: SelectAddMoreProps) => any;
export {};
