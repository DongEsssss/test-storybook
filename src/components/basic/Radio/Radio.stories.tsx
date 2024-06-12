;
import { Meta, StoryObj } from '@storybook/react'

import { Radio as Component } from '.'

const default_data = {
  title: 'Form',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
} satisfies Meta<typeof Component>

export default default_data
type Story = StoryObj<typeof default_data>

export const Radio: Story = {
  args: {
    disabled: false,
    label: 'Radio',
  }
}
