
import { FormControlLabel, FormGroup, Switch as MuiSwitch } from '@mui/material'
import React from 'react'

export interface ButtonProps {
  label: string
  color?: 'secondary' | 'warning' | 'default' | 'error' | 'info' | 'success' | 'primary'
}

export const SwitchButton = ({ label, ...rest }: ButtonProps) => (
  <FormGroup>
    <FormControlLabel control={<MuiSwitch defaultChecked {...rest} />} label="Label" />
    <FormControlLabel required control={<MuiSwitch {...rest} />} label="Request Label" />
    <FormControlLabel disabled control={<MuiSwitch {...rest} />} label="Disabled Label" />
  </FormGroup>
)
