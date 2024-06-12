
import {
  TextField,
  type TextFieldProps,
  FormHelperText,
  InputAdornment,
  Box,
  FormControl,
} from '@mui/material'
import ErrorOutline from '@mui/icons-material/ErrorOutline'
import { Typography } from '../Typography'
 
interface InputProps extends Omit<TextFieldProps, 'variant'> {
  variant?: 'outlined'
  tooltipMessage?: string
}

export const Input = ({
  variant = 'outlined',
  label,
  placeholder,
  helperText,
  error = false,
  tooltipMessage,
  ...props
}: InputProps) => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Typography variant='body1'>
          {label}
        </Typography>
        <FormControl
          sx={{
            width: '100%',
          }}
          error={error}
          variant="outlined"
        >
          <Box>
            <TextField
              fullWidth
              variant={variant}
              placeholder={placeholder}
              error={error}
              InputProps={
                error
                  ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <ErrorOutline color="error" />
                      </InputAdornment>
                    ),
                  }
                  : {}
              }
              {...props}
            />
          </Box>
          {error && helperText && (
            <FormHelperText sx={{ marginLeft: 0, marginBottom: '3px' }}>
              {helperText}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
    </>
  )
}
