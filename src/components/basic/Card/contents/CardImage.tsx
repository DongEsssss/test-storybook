import React from "react"
import { Box, useTheme } from "@mui/material"
import { Image } from "../../Image"
import { LogoGrayData } from "../../Logo"

export type CardImageSize = 'normal' | 'medium' | 'small'

export type CardImageShape = 'round' | 'square'

export type CardImageType = 'box' | 'background'

export interface ICardImage {
    src: string
    alt?: string
}
export interface CardImageProps {
    image?: ICardImage
    imageSize?: CardImageSize
    imageShape?: CardImageShape
    imageElement?: JSX.Element
    preview?: boolean
    imageLoader?: (src: string) => Promise<ArrayBuffer>
    imageType?: CardImageType
}


export const CardImage = ({
    image,
    imageSize = 'normal',
    imageShape = 'square',
    imageLoader,
    imageElement,
    preview = false,
}: CardImageProps) => {
    const { transitions } = useTheme()
    const withPreview = (size: number) => (preview ? size + 18 : size)

    const sx = {
        container: {
            normal: {},
            medium: { paddingTop: 3, textAlign: 'center' },
            small: { paddingTop: 3, textAlign: 'center' },
        },
        image: {
            normal: { width: '100%', height: withPreview(144) },
            medium: { width: withPreview(156), height: withPreview(156) },
            small: { width: withPreview(80), height: withPreview(80) },
            round: { borderRadius: '50%' },
            square: { borderRadius: '16px' },
        },
    }

    const style: React.CSSProperties = {
        padding: '10px 0px',
        objectFit: 'cover',
        transition: transitions.create(['all'], {
            duration: transitions.duration.shorter,
        }),
        ...sx.image[imageSize],
        ...(imageSize === 'small' && sx.image[imageShape]),
        ...(imageSize === 'medium' && sx.image[imageShape]),
    }

    return (
        <Box sx={sx.container[imageSize]}>
            {imageElement ? (
                <div style={style}>{imageElement}</div>
            ) : (
                <Image
                    src={image?.src ?? LogoGrayData}
                    alt={image?.alt}
                    loader={imageLoader}
                    style={style}
                />
            )}
        </Box>
    )
}

