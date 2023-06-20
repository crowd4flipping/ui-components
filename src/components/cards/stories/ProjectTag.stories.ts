import type { Meta, StoryObj } from "@storybook/react";
import { ProjectTag } from "../ProjectTag";

const meta = {
  title: "Components/Project Tag",
  component: ProjectTag,
  tags: ["tag"],
} satisfies Meta<typeof ProjectTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TagProjectInStudy: Story = {
  name: "In study",
  args: {
    isDarkMode: false,
    status: "in_study",
  },
};

export const TagFundingProject: Story = {
  name: "Funding",
  args: {
    isDarkMode: false,
    status: "funding",
  },
};

export const TagActiveProject: Story = {
  name: "Active",
  args: {
    isDarkMode: false,
    status: "active",
  },
};

export const TagProjectFinished: Story = {
  name: "Finished",
  args: {
    isDarkMode: false,
    status: "finished",
  },
};
