import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["button"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  name: "Primary button",
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const SecondaryButton: Story = {
  name: "Secondary button",
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const TertiaryButton: Story = {
  name: "Tertiary button",
  args: {
    children: "Tertiary Button",
    variant: "tertiary",
  },
};
