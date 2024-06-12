
import { Meta, StoryObj } from '@storybook/react'
import { StaticTable as Component } from '.'

const storyData = {
  title: 'StaticTable',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    horizontal
      : {
      control: { type: 'boolean' },
      options: ['True', 'False'],
    },
  }
} as Meta

export default storyData
type Story = StoryObj<typeof storyData>

const data = {
  head: ['heading 1', 'heading 2'],
  body: [
    ['row1 col1', 'row1 col2'],
    ['row2 col1', 'row2 col2'],
    ['row3 col1', 'row3 col2'],
    ['row4 col1', 'row4 col2'],
  ],
  edit: [
    [
      {
        icon: true,
        inputValue:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      },
      {
        icon: true,
        copyValue: 'test',
        inputValue: 'row1 col2',
        isValid: (value: any) => console.log('Checking Validation', value),
        errorMessage: 'Please enter valid value.',
      },
    ],
    [
      {
        icon: false,
      },
      {
        icon: false,
        clickableLink: 'https://google.com',
      },
    ],
  ],
}


export const Table: Story = {
  args: {
    data: data
  }
}
