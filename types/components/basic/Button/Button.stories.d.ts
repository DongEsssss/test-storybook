import type { StoryObj } from '@storybook/react';
declare const default_data: {
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
export default default_data;
type Story = StoryObj<typeof default_data>;
export declare const Buttons: Story;
