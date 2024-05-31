import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const default_data = {
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

export default default_data;
type Story = StoryObj<typeof default_data>;

export const Buttons: Story = {
  args: {
    size: 'medium',
    variant: 'text',
  },
};
