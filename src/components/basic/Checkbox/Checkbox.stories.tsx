

import { Meta, StoryObj } from '@storybook/react'
import { Checkbox as Component } from '.'

const storyData = {
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

export default storyData
type Story = StoryObj<typeof storyData>

export const Checkboxs: Story = {
  args: {
    disabled: false,
    label: 'Check-Box',
  }
}

