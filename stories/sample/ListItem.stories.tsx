import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof List> = {
  title: "Example/List",
  component: List,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof List>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Menbder: Story = {
  args: {
    header: [`名前`, `年齢`, `性別`],
    body: [
      {
        row: [`山田太郎`, `20`, `男`],
      },
      {
        row: [`山田太郎`, `20`, `男`],
      },
      {
        row: [`山田太郎`, `20`, `男`],
      },
    ],
  },
};

export const Infomation: Story = {
  args: {
    header: [`電話番号`, `住所`, `備考`],
    body: [
      {
        row: [`090-1234-5678`, `東京都`, `特になし`],
      },
      {
        row: [`090-1234-5678`, `東京都`, `特になし`],
      },
      {
        row: [`090-1234-5678`, `東京都`, `特になし`],
      },
    ],
  },
};
