import { Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check'
import { Button } from '../../Button/Button'
import { IconButton } from '../../IconButton'
 
export interface CardButtonsProps {
    buttonText: string
    onButtonClick?: React.MouseEventHandler
    onSecondaryButtonClick?: React.MouseEventHandler
    addButtonClicked?: boolean
}

export const CardButtons = ({
    buttonText,
    onButtonClick = () => {
        // empty
    },
    onSecondaryButtonClick,
    addButtonClicked,
}: CardButtonsProps) => {
    return (
        <div>
            <Box
                sx={{
                    bottom: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '0px 10px',
                }}
            >
                <Button size="small" onClick={onButtonClick}>
                    {buttonText}
                </Button>
                {onSecondaryButtonClick != null && (
                    <IconButton color="secondary" onClick={onSecondaryButtonClick}>
                        {addButtonClicked ? <CheckIcon /> : <AddIcon />}
                    </IconButton>
                )}
            </Box>
        </div>
    )
}
