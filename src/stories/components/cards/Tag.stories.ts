import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../../../components/cards/Tag";
import { colorTheme } from "../../decorators/color-theme";

const meta = {
  title: "Components/Tags",
  component: Tag,
  tags: ["tag"],
  decorators: [colorTheme],
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

export const TagGreen: Story = {
  name: "Tag Green",
  args: {
    color: "green",
    children: "Green tag",
  },
};

export const TagOrange: Story = {
  name: "Tag Orange",
  args: {
    color: "orange",
    children: "Orange tag",
  },
};

export const TagYellow: Story = {
  name: "Tag Magenta",
  args: {
    color: "magenta",
    children: "Yellow tag",
  },
};
