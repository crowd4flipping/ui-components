import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["buttons"],
  argTypes: {
    label: { defaultValue: "My custom button", description: "Button label" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MyButton: Story = {
  name: "Mi first story button",
  args: {
    label: "My Button",
  },
};
