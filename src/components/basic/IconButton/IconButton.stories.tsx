import { IconButton as Component } from '.'
import AddIcon from '@mui/icons-material/Add'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Meta, StoryObj } from '@storybook/react'

const default_data = {
  title: 'IconButton',
  component: Component,
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
} as Meta<typeof Component>

export default default_data
type Story = StoryObj<typeof default_data>

export const IconButton: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    disabled: false,
    children: <AddIcon />,
  }
}

export const ArrowButton: Story = {
  args: {
    color: 'secondary',
    size: 'medium',
    disabled: false,
    children: <ArrowForwardIcon />,
  }
}