import { Box } from '@mui/material'
import { Typography } from '../../Typography'
import React from 'react'

export interface CardHeaderProps {
    id?: string
    title: string
    subtitle?: string
}

export const CardHeader = ({
    title,
    subtitle,
}: CardHeaderProps) => {
    return (
        <Box sx={{ padding: '20px 20px 0px 20px' }}>
            <Box>
                {subtitle && (
                    <Typography variant="h5" sx={{ color: 'text.tertiary' }}>
                        {subtitle}
                    </Typography>
                )}
                {title && (
                    <Typography variant="h3" sx={{ color: 'text.tertiary' }}>
                        {title}
                    </Typography>
                )}
            </Box>
        </Box>
    )
}