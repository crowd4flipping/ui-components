import type { StoryObj, Meta } from "@storybook/react";
import { ImageWrapperDescription } from "./ImageWrapperDescription";
import React from "react";

const meta = {
  title: "Components/Image Title",
  component: ImageWrapperDescription,
} satisfies Meta<typeof ImageWrapperDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ImageTitle: Story = {
  name: "Image Title",
  args: {
    title: "Image title",
    subtitle: "Image subtitle",
    children: (
      <img
        width={272}
        height={227}
        loading="lazy"
        alt="imagen del proyecto"
        src="https://images.unsplash.com/photo-1683009427500-71296178737f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      />
    ),
  },
};
