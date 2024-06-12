 ;
export declare const TransparentPixel = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
interface ImageProps {
    src: string;
    alt?: string;
    style?: React.CSSProperties;
    loader?: (src: string) => Promise<ArrayBuffer>;
}
export declare const Image: ({ src, alt, style, loader }: ImageProps) => JSX.Element;
export {};
