import type { Meta, StoryObj } from '@storybook/react';
import { SwitchButton as Component } from './Switch';

const default_data: Meta = {
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

export default default_data;
type Story = StoryObj<typeof default_data>;

export const Switch: Story = {
  args: {
    color: 'warning',
  },
};
