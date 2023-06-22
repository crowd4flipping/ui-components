import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../../../components/cards/Tag";

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
    isDark: false,
  },
};

export const TagGreen: Story = {
  name: "Tag Green",
  args: {
    color: "green",
    children: "Green tag",
    isDark: false,
  },
};

export const TagOrange: Story = {
  name: "Tag Orange",
  args: {
    color: "orange",
    children: "Orange tag",
    isDark: false,
  },
};

export const TagYellow: Story = {
  name: "Tag Yellow",
  args: {
    color: "yellow",
    children: "Yellow tag",
    isDark: false,
  },
};
