import '../../../scss/global.scss'
import { theme } from '../../../theme'
import '../../../scss/fonts.scss'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'

interface SharedThemeProviderProps {
  children: React.ReactNode
}

export const SharedThemeProvider = ({ children }: SharedThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
