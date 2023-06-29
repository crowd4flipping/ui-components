import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../components/buttons/Button";
import { colorTheme } from "../../decorators/color-theme";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["button"],
  decorators: [colorTheme],
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