// List.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Titles } from "./Titles";

const meta = {
  title: "Theme/Titles",
  component: Titles,
  tags: ["theme"],
} satisfies Meta<typeof Titles>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MyTitles: Story = {
  name: "Titles",
};
