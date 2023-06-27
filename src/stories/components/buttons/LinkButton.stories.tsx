import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "../../../components/buttons/LinkButton";
import { colorTheme } from "../../decorators/color-theme";

const meta = {
  title: "Components/Link Button",
  component: LinkButton,
  tags: ["button"],
  decorators: [colorTheme],
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
