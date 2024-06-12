import { Meta, StoryObj } from '@storybook/react'
  
import { SelectList as Component } from '.'

const default_data = {
  title: 'Form',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Component>

const countries = [
  {
    id: 1,
    title: 'Germany',
    value: 'DE',
  },
  {
    id: 2,
    title: 'France',
    value: 'FR',
  },
  {
    id: 3,
    title: 'Sweden',
    value: 'SW',
  },
  {
    id: 4,
    title: 'Swaziland',
    value: 'SZ',
  },
  {
    id: 5,
    title: 'Argentina',
    value: 'AR',
  },
  {
    id: 6,
    title: 'Brazil',
    value: 'BR',
  },
]
export default default_data
type Story = StoryObj<typeof default_data>

export const SearchList: Story = {
  args: {
    items: countries,
    label: 'Select country',
    placeholder: 'Enter country name (type min 2 character)',
    helperText: 'Helper',
    disabled: false,
    error: false,
    margin: 'dense',
    variant: 'filled',
    focused: false,
    clearText: 'clear',
    noOptionsText: 'No Options',
    popperHeight: 0, // 0 = auto size
    defaultValue: countries[0],
    onChangeItem: (item: any) => console.log('selected:', item),
    keyTitle: 'title',
  }
}
