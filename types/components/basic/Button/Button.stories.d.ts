import type { StoryObj } from '@storybook/react';
declare const storyData: {
    title: string;
    component: ({ variant, color: colorProp, ...props }: import("@mui/material").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        color: {
            control: {
                type: string;
            };
            options: string[];
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
        };
        variant: {
            control: {
                type: string;
            };
            options: string[];
        };
    };
};
export default storyData;
type Story = StoryObj<typeof storyData>;
export declare const Buttons: Story;
