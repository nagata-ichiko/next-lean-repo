import type { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "./ListItem";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ListItem> = {
  title: "Example/ListItem",
  component: ListItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const None: Story = {
  args: {
    status: `none`,
    label: "Button",
  },
};

export const Error: Story = {
  args: {
    status: `none`,
    label: "Button",
  },
};

export const Alert: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
