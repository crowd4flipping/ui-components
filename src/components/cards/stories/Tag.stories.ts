import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../Tag";

const meta = {
  title: "Components/Tags",
  component: Tag,
  tags: ["tag"],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TagBlue: Story = {
  name: "Tag Blue",
  args: {
    color: "blue",
    children: "Blue tag",
  },
};
