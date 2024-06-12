import { useEffect, useState } from 'react'
import { Box, Divider } from '@mui/material'
import { CardHeader, CardHeaderProps } from './contents/CardHeader'
import { CardContent, CardContentProps } from './contents/CardContent'
import { CardImage, CardImageProps } from './contents/CardImage'
import { CardButtons, CardButtonsProps } from './contents/CardAction'
import React from 'react'

export interface CardProps extends CardHeaderProps, CardContentProps, CardImageProps, CardButtonsProps {
    size?: Exclude<Size, 'preview'>
}

type Size =
    | 'minimal'
    | 'normal'
    | 'large'

export const Card = ({
    title,
    subtitle,
    description,
    image,
    imageSize,
    imageShape,
    imageLoader,
    imageType,
    buttonText,
    onButtonClick,
    onSecondaryButtonClick,
    size: initialSize = 'normal' // Default size is normal
}: CardProps) => {
    const [size,] = useState<Size>(initialSize)

    const [header, setHeader] = useState<CardHeaderProps>({
        title,
        subtitle,
    })
    const [content, setContent] = useState<CardContentProps>({
        description
    })

    useEffect(() => {
        switch (size) {
            case 'minimal':
                setHeader({ title, subtitle })
                setContent({ description })
                break
            case 'normal':
                setHeader({ title, subtitle })
                setContent({ description })
                break
            case 'large':
                setHeader({ title, subtitle })
                setContent({ description })
                break
            default:
                setHeader({ title, subtitle })
                setContent({ description })
        }
    }, [size, subtitle, title, description])

    return (
        <div style={{ border: '1px solid #b9b9b9', borderRadius: '16px' }}>
            <Box
                sx={{
                    ...(size === 'minimal' && {
                        border: 'none',
                        maxWidth: '250px',
                        ':hover': {
                            boxShadow: 'none',
                        },
                    }),
                    ...(size === 'normal' && {
                        border: 'none',
                        maxWidth: '350px',
                        ':hover': {
                            boxShadow: 'none',
                        },
                    }),
                    ...(size === 'large' && {
                        border: 'none',
                        maxWidth: '450px',
                        ':hover': {
                            boxShadow: 'none',
                        },
                    }),
                }}
                className='card'
            >
                <CardImage
                    image={image}
                    imageSize={imageSize}
                    imageShape={imageShape}
                    imageLoader={imageLoader}
                    imageType={imageType}
                    preview={size === 'normal'}
                />
                <CardHeader {...header} />
                <CardContent {...content} />
                <Divider sx={{ margin: '0px 10px' }} />
                <Box sx={{ margin: '10px 0px' }}>
                    <CardButtons
                        buttonText={buttonText}
                        onButtonClick={onButtonClick}
                        onSecondaryButtonClick={onSecondaryButtonClick}
                    />
                </Box>
            </Box>
        </div>
    )
}
