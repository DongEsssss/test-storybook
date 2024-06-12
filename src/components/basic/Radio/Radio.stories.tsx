;
import { Meta, StoryObj } from '@storybook/react'

import { Radio as Component } from '.'

const storyData = {
  title: 'Form',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
} satisfies Meta<typeof Component>

export default storyData
type Story = StoryObj<typeof storyData>

export const Radio: Story = {
  args: {
    disabled: false,
    label: 'Radio',
  }
}
