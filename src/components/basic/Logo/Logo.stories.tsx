import { StoryObj } from '@storybook/react'
import { Logo as Component } from '.'

const default_data = {
  title: 'Logo',
  component: Component,
}

export default default_data
type Story = StoryObj<typeof default_data>

export const Logo: Story = {
  args: {
    variant: 'short',
    altText: 'Logo Quantum-X',
  }
}
