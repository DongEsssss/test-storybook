import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const storyData = {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'success', 'error', 'warning'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['text', 'outlined', 'contained'],
    },
  },
} satisfies Meta<typeof Button>;

export default storyData;
type Story = StoryObj<typeof storyData>;

export const Buttons: Story = {
  args: {
    size: 'medium',
    variant: 'text',
  },
};
