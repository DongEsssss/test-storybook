import React from 'react'
import { Box } from '@mui/material'
import { type HTMLAttributes } from 'react'
import { type PartsType } from '..'

interface SelectOptionsProps {
  props: HTMLAttributes<HTMLElement>
  parts: PartsType[]
}

export const SelectOptions = ({ props, parts }: SelectOptionsProps) => (
  <li
    {...props}
    style={{
      paddingBottom: '0px',
      marginLeft: '5px',
      marginRight: '5px',
      marginTop: '-1px',
    }}
  >
    <Box
      sx={{
        borderBottom: '1px solid #f2f2f2 !important',
        width: '100%',
        paddingBottom: '10px',
      }}
    >
      {parts.map((part: PartsType) => (
        <span
          key={part.text}
          style={{
            fontWeight: part.highlight ? 700 : 400,
            fontSize: 16,
          }}
        >
          {part.text}
        </span>
      ))}
    </Box>
  </li>
)
