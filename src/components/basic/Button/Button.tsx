import MuiButton, {
  type ButtonProps as MuiButtonProps
} from '@mui/material/Button'

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  size?: 'small' | 'medium' | 'large'
  variant?: 'text' | 'outlined' | 'contained'
}

export const Button = ({ variant = 'contained',
  color: colorProp = 'primary', ...props }: MuiButtonProps) => {

  return (
    <MuiButton size='large' {...props} />
  )
}
