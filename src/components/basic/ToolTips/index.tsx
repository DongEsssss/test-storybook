import Tooltip from '@mui/material/Tooltip'
import type { ReactElement } from 'react'
 

interface TooltipsProps {
  children: ReactElement
  tooltipText: string
  color?: 'light' | 'dark'
  tooltipPlacement?:
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'bottom-end'
  | 'bottom-start'
  | 'left-end'
  | 'left-start'
  | 'right-end'
  | 'right-start'
  | 'top-end'
  | 'top-start'
  tooltipArrow?: boolean
  additionalStyles?: React.CSSProperties
  arrowStyles?: React.CSSProperties
}

export const Tooltips = ({
  children, // Element to hover
  tooltipPlacement = 'bottom', // TooltipPosition & ArrowPostion ex - <top-start>
  tooltipArrow = true, // Show/Hide arrow
  tooltipText, // Tooltip text
  color = 'dark',
  additionalStyles, // additionalStyles to the tooltip container. ex - height, width, align
  arrowStyles, // arrowStyles to the arrow of tooltip
}: TooltipsProps) => {
  const backgroundColor =
    color === 'dark' ? 'background.background14' : 'grey.100'

  return (
    <Tooltip
      title={tooltipText}
      placement={tooltipPlacement}
      arrow={tooltipArrow}
      componentsProps={{
        tooltip: {
          sx: {
            color: color === 'dark' ? 'common.white' : 'text.primary',
            backgroundColor,
            padding: '15px',
            maxWidth: '300px',
            fontSize: '14px',
            lineHeight: '20px',
            ...additionalStyles,
          },
        },
        arrow: {
          sx: {
            color: backgroundColor,
            ...arrowStyles,
          },
        },
      }}
    >
      {children}
    </Tooltip>
  )
}
