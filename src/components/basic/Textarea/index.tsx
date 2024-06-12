
import {
  TextareaAutosize,
  type TextareaAutosizeProps,
  FormHelperText,
  Box,
  FormControl,
} from '@mui/material'
import { Typography } from '../Typography'
 

interface TextareaProps extends TextareaAutosizeProps {
  label?: string
  helperText?: string
  error?: boolean
}

export const Textarea = ({
  label,
  placeholder,
  helperText,
  error = false,
  ...props
}: TextareaProps) => {
  return (
    <Box>
      <FormControl
        sx={{
          width: '100%',
        }}
        error={error}
        variant="filled"
      >
        <Typography
          sx={{
            fontSize: '17px',
            fontWeight: 'bold',
            marginRight: '10px',
            marginBottom: '10px'
          }}
        >
          {label}
        </Typography>
        <TextareaAutosize placeholder={placeholder} {...props} style={{ padding: '15px 5px' }} />
        {error && helperText && (
          <FormHelperText sx={{ marginLeft: 0, marginBottom: '-23px' }}>
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  )
}
