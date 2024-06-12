import type { Meta, StoryObj } from '@storybook/react'
import { Accordions as Component } from './Accordion'

const default_data = {
  title: 'Accordions',
  component: Component,
  tags: ['autodocs'],
} satisfies Meta<typeof Component>

export default default_data
type Story = StoryObj<typeof default_data>

export const Accordion: Story = {
  args: {
    title: 'test1',
    description: 'test2'
  },
}
