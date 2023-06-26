import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "../../../components/buttons/LinkButton";

const meta = {
  title: "Components/Link Button",
  component: LinkButton,
  tags: ["button"],
} satisfies Meta<typeof LinkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MyLinkButton: Story = {
  name: "Primary button",
  args: {
    children: "Primary Button",
    variant: "primary",
    href: "https://www.google.com/"
  },
};
