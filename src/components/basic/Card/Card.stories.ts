import type { Meta, StoryObj } from '@storybook/react';
import { Cards as Component } from '.';
const default_data = {
  title: 'AppCard',
  component: Component,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['minimal', 'normal', 'large'],
    },
    imageSize: {
      control: { type: 'select' },
      options: ['small', 'normal', 'medium'],
    },
    imageShape: {
      control: { type: 'select' },
      options: ['round', 'square'],
    },
    showImage: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Component>;

export default default_data;
type Story = StoryObj<typeof default_data>;

const item = {
  title: 'Card-Title',
  subtitle: 'Quantum-X',
  image: {
    src: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=640&q=420',
    alt: 'Catena-X Card',
  },
  description:
    'Card-Description \nThis impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
  onButtonClick: () => {},
  onSecondaryButtonClick: () => {},
};

export const AppCard: Story = {
  args: {
    items: [item],
    buttonText: 'Details',
    imageSize: 'small',
    columns: 0,
    addButtonClicked: true,
    showAddNewCard: false,
    newButtonText: '',
    size: 'minimal',
  },
};
