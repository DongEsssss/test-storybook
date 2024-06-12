import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Textarea as Component } from '.'

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

export const Textarea: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper',
    disabled: false,
    error: false,
  }
}