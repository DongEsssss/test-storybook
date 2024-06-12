
import { type AutocompleteRenderInputParams, Box } from '@mui/material'
import { type MultiSelectListProps } from '..'
import { Input } from '../../Input'
 

interface SelectInputProps
  extends Omit<
    MultiSelectListProps,
    | 'items'
    | 'onAddItem'
    | 'buttonAddMore'
    | 'notItemsText'
    | 'filterOptionsArgs'
  > {
  params: AutocompleteRenderInputParams
  autoFocus?: boolean
}

export const SelectInput = ({
  params,
  label,
  placeholder,
  margin,
  focused,
  helperText,
  error = false,
  disabled,
  autoFocus,
}: SelectInputProps) => (
  <Box
    sx={{
      '.MuiFilledInput-root': {
        paddingTop: '0px !important',
        minHeight: '55px',
      },
    }}
  >
    <Input
      fullWidth={params.fullWidth}
      InputProps={params.InputProps}
      inputProps={params.inputProps}
      id={params.id}
      size={params.size}
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      error={error}
      margin={margin}
      focused={focused}
      disabled={disabled}
      autoFocus={autoFocus}
    />
  </Box>
)
