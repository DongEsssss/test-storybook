import type { Meta, StoryObj } from '@storybook/react'
import { Accordions as Component } from './Accordion'

const storyData = {
  title: 'Accordions',
  component: Component,
  tags: ['autodocs'],
} satisfies Meta<typeof Component>

export default storyData
type Story = StoryObj<typeof storyData>

export const Accordion: Story = {
  args: {
    title: 'test1',
    description: 'test2'
  },
}
