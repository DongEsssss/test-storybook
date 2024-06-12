import type { StoryObj } from '@storybook/react';
declare const storyData: Meta<({ variant, color: colorProp, ...props }: MuiButtonProps) => any>;
export default storyData;
type Story = StoryObj<typeof storyData>;
export declare const Buttons: Story;
