
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltips as Component } from '.'
import { Button } from '@mui/material'
import React from 'react'

const storyData = {
  title: 'Tooltips',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  }
} satisfies Meta<typeof Component>

export default storyData
type Story = StoryObj<typeof storyData>

export const Tooltips: Story = {
  args: {
    tooltipPlacement: 'bottom',
    tooltipText: 'Action is pending',
    color: 'dark',
    children: (
      <Button variant='contained' color="success" sx={{ margin: '100px' }}>Label-button</Button>
    ),
  }
}
