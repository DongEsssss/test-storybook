import type { TableType } from './types';
export declare const StaticTable: ({ data, horizontal, handleEdit, }: {
    data: TableType;
    horizontal?: boolean | undefined;
    handleEdit?: ((inputURL: string) => void) | undefined;
}) => any;
