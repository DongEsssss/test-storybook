import type { Meta, StoryObj } from '@storybook/react';
import { SwitchButton as Component } from './Switch';

const storyData: Meta = {
  title: 'Switch',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: {
      control: { type: 'radio' },
      options: [
        'secondary',
        'warning',
        'default',
        'error',
        'info',
        'success',
        'primary',
      ],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default storyData;
type Story = StoryObj<typeof storyData>;

export const Switch: Story = {
  args: {
    color: 'warning',
  },
};
