/// <reference types="react" />
import '@mui/material/Typography';
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body3: true;
        caption: false;
        caption1: true;
        caption2: true;
        caption3: true;
        label1: true;
        label2: true;
        label3: true;
        label4: true;
        label5: true;
        helper: true;
    }
}
declare module '@mui/material/styles' {
    interface TypographyVariants {
        body3: React.CSSProperties;
        caption1: React.CSSProperties;
        caption2: React.CSSProperties;
        caption3: React.CSSProperties;
        label1: React.CSSProperties;
        label2: React.CSSProperties;
        label3: React.CSSProperties;
        label4: React.CSSProperties;
        label5: React.CSSProperties;
        helper: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        body3?: React.CSSProperties;
        caption1?: React.CSSProperties;
        caption2?: React.CSSProperties;
        caption3?: React.CSSProperties;
        label1?: React.CSSProperties;
        label2?: React.CSSProperties;
        label3?: React.CSSProperties;
        label4?: React.CSSProperties;
        label5?: React.CSSProperties;
        helper?: React.CSSProperties;
    }
}
