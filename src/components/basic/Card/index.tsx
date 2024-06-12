import { Box } from '@mui/material'
import { Card, type CardProps } from './Card'
import uniqueId from 'lodash/uniqueId'
import React from 'react'

export type CardItems = Omit<
    CardProps,
    'variant' | 'imageSize' | 'imageShape' | 'buttonText' | 'status'
>

export interface SubItems {
    label: string
    value: string
}

interface CardsProps {
    items: CardItems[]
    imageSize?: CardProps['imageSize']
    imageShape?: CardProps['imageShape']
    imageElement?: CardProps['imageElement']
    buttonText: CardProps['buttonText']
    columns?: number
    description?: CardProps['description']
    addButtonClicked?: boolean
    showAddNewCard?: boolean
    newButtonText?: string
    onNewCardButton?: React.MouseEventHandler | undefined
    onCardClick?: (item: CardItems) => void
    subMenu?: boolean
    submenuOptions?: SubItems[]
    submenuClick?: (sortMenu: string, id: string | undefined) => undefined
    tooltipText?: string
    showStatus?: boolean
    status?: string
    boxClickable?: boolean
    size?: CardProps['size']
}

export const Cards = ({
    items,
    buttonText,
    description,
    imageSize,
    imageShape,
    imageElement,
    addButtonClicked = false,
    subMenu = false,
    submenuOptions = [],
    tooltipText,
    showStatus = true,
    boxClickable = false,
    size
}: CardsProps) => {
    const settings = {
        imageSize,
        imageShape,
        imageElement,
        addButtonClicked,
        subMenu,
        submenuOptions,
        tooltipText,
        showStatus,
        boxClickable,
        description,
        buttonText,
        size
    }

    return (
        <Box
            className='app-list'
            sx={{
                display: 'flex',
                '-ms-flex-wrap': 'nowrap',
                flexWrap: 'nowrap',
                justifyContent: 'flex-start',
                gap: '15px'
            }}
        >
            {items?.map((item) => (
                <Card
                    {...settings}
                    {...item}
                    key={uniqueId('AppCard')}
                />
            ))}
        </Box>
    )
}
