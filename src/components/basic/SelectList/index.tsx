;
import { type TextFieldProps } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'
import { SelectInput } from '../MultiSelectList/Components/SelectInput'
import { SelectOptions } from '../MultiSelectList/Components/SelectOptions'
import uniqueId from 'lodash/uniqueId'
import isEqual from 'lodash/isEqual'
import { useState } from 'react'

interface SelectListProps extends Omit<TextFieldProps, 'variant'> {
  // eslint-disable-next-line
  items: any
  label: string
  placeholder: string
  keyTitle: string
  popperHeight?: number
  variant?: 'filled'
  clearText?: string
  noOptionsText?: string
  defaultValue?: unknown
  disableClearable?: boolean
  // eslint-disable-next-line
  onChangeItem: (items: any) => void
}

export const SelectList = ({
  items,
  label,
  placeholder,
  defaultValue = {},
  disableClearable = false,
  keyTitle,
  variant,
  margin,
  focused,
  helperText,
  error = false,
  disabled,
  popperHeight = 0,
  clearText = 'Clear',
  noOptionsText = 'No Options',
  onChangeItem,
}: SelectListProps) => {
  const selectHeight = popperHeight ? `${popperHeight}px` : 'auto'
  // Add an ESLint exception until there is a solution
  // eslint-disable-next-line
  const [selected, setSelected] = useState<any>(defaultValue || {})
  return (
    <Autocomplete
      id="singleSelectList"
      sx={{ width: '100%' }}
      clearText={clearText}
      defaultValue={defaultValue}
      disableClearable={disableClearable}
      noOptionsText={noOptionsText}
      ListboxProps={{ style: { maxHeight: selectHeight } }}
      disabled={disabled}
      // eslint-disable-next-line
      options={items.map((item: any) => item)}
      // eslint-disable-next-line
      getOptionLabel={(option) => option[keyTitle] || ''}
      onChange={(_, reason) => {
        setSelected(reason)

        onChangeItem(reason)
      }}
      isOptionEqualToValue={(option, value) => isEqual(option, value)}
      renderOption={(props, option, { inputValue }) => (
        <SelectOptions
          props={props}
          parts={parse(option[keyTitle], match(option[keyTitle], inputValue))}
          key={uniqueId('select-list-option')}
        />
      )}
      value={selected}
      renderInput={(params) => {
        return (
          <SelectInput
            params={params}
            label={label}
            placeholder={placeholder}
            variant={variant}
            margin={margin}
            focused={focused}
            helperText={helperText}
            error={error}
            disabled={disabled}
            keyTitle={keyTitle}
          />
        )
      }}
    />
  )
}
