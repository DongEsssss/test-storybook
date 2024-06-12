
import { Box } from '@mui/material'
import { Typography } from '../../Typography'
 

export interface CardContentProps {
    description?: string
}

export const CardContent = ({
    description
}: CardContentProps) => {
    return (
        <Box sx={{ padding: '0px 20px 20px 20px' }}>
            <Box sx={{ height: '100%' }}>
                {description && (
                    <Typography
                        variant="body3"
                        sx={{
                            height: '100px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '5',
                            WebkitBoxOrient: 'vertical',
                            color: '#000000',
                            marginTop: '10px',
                            marginBottom: '20px'
                        }}
                    >
                        {description}
                    </Typography>
                )}
            </Box>
        </Box>
    )
}