;
import { Meta, StoryObj } from '@storybook/react'
import { Input } from './index'

const default_data = {
  title: 'Input',
  component: Input,
} as Meta

export default default_data
type Story = StoryObj<typeof default_data>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  }
}

export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    error: true,
    helperText: 'This is an error message',
  }
}

export const WithTooltip: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    tooltipMessage: 'This is a tooltip message',
  }
}

