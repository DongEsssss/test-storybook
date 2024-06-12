import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Textarea as Component } from '.'

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

export const Textarea: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper',
    disabled: false,
    error: false,
  }
}