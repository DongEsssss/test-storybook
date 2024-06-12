import { StoryObj } from '@storybook/react'
import { Logo as Component } from '.'

const storyData = {
  title: 'Logo',
  component: Component,
}

export default storyData
type Story = StoryObj<typeof storyData>

export const Logo: Story = {
  args: {
    variant: 'short',
    altText: 'Logo Quantum-X',
  }
}
