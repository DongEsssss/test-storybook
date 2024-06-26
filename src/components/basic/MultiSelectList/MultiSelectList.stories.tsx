import { StoryObj } from '@storybook/react'
import { MultiSelectList as Component } from '.'

const storyData = {
  title: 'Form',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
}

const items: any[] = [
  {
    id: 1,
    title: 'Dismantler App',
    value: 'App1',
  },
  {
    id: 2,
    title: 'Application name',
    value: 'App2',
  },
  {
    id: 3,
    title: 'Title Application',
    value: 'App3',
  },
  {
    id: 4,
    title: 'CX Design lunched',
    value: 'App4',
  },
  {
    id: 5,
    title: 'Fleet Manager',
    value: 'App5',
  },
  {
    id: 6,
    title: 'Fraud Daschboard',
    value: 'App6',
  },
  {
    id: 7,
    title: 'App Manage Customers',
    value: 'App7',
  },
  {
    id: 8,
    title: 'Smart Application',
    value: 'App8',
  },
  {
    id: 9,
    title: 'Material Traceability',
    value: 'App9',
  },
]

export default storyData
type Story = StoryObj<typeof storyData>

export const MultiSelectList: Story = {
  args: {
    items: items,
    label: 'Label Name',
    placeholder: 'Enter label name (type min 2 character)',
    helperText: 'Helper',
    disabled: false,
    error: false,
    margin: 'dense',
    variant: 'filled',
    focused: false,
    popperHeight: 0, // 0 = auto size
    clearText: 'clear',
    noOptionsText: 'No Options',
    buttonAddMore: 'Add More',
    notItemsText: 'not items selected',
    keyTitle: 'title',
    tagSize: 'medium',
    onAddItem: (item: any) => console.log('items:', item),
    filterOptionsArgs: {},
  }

}
