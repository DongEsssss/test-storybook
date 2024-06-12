import MuiTypography, { type TypographyProps } from '@mui/material/Typography'
import React from 'react'

const variantMapping = {
  body3: 'p',
}

export const Typography = (props: TypographyProps) => (
  <MuiTypography variantMapping={variantMapping} {...props} />
)
