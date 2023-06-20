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
    size: "md",
    children: "Primary Button",
    variant: "primary",
  },
};

export const SecondaryButton: Story = {
  name: "Secondary button",
  args: {
    size: "md",
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const TertiaryButton: Story = {
  name: "Tertiary button",
  args: {
    size: "md",
    children: "Tertiary Button",
    variant: "tertiary",
  },
};
