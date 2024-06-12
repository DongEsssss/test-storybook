

import { Meta, StoryObj } from '@storybook/react'
import { Checkbox as Component } from '.'

const default_data = {
  title: 'Form',
  component: Component,
  argTypes: {
    onClick: {
      action: 'onClick',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Component>

export default default_data
type Story = StoryObj<typeof default_data>

export const Checkboxs: Story = {
  args: {
    disabled: false,
    label: 'Check-Box',
  }
}

