import MuiIconButton, {
  type IconButtonProps as MuiIconButtonProps,
} from '@mui/material/IconButton'
import React from 'react'

interface IconButtonProps extends Omit<MuiIconButtonProps, 'color' | 'size'> {
  color?: 'primary' | 'secondary'
  size?: 'medium' | 'small'
  variant?: 'outlined'
}

export const IconButton = ({
  size = 'medium',
  variant,
  ...props
}: IconButtonProps) => {
  const outlinedStyle = variant === 'outlined' ? { border: '2px solid' } : {}

  return <MuiIconButton size={size} sx={outlinedStyle} {...props} />
}
