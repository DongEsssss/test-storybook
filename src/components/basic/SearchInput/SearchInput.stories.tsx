;
import { Meta, StoryObj } from '@storybook/react'
import { SearchInput as Component } from '.'

const default_data = {
  title: 'Form',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Component>

export default default_data
type Story = StoryObj<typeof default_data>

export const SearchInput: Story = {
  args: {
    label: '',
  },
}
