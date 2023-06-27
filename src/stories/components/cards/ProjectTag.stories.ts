import type { Meta, StoryObj } from "@storybook/react";
import { ProjectTag } from "../../../components/cards/ProjectTag";

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
    status: "in_study",
  },
};

export const TagFundingProject: Story = {
  name: "Funding",
  args: {
    status: "funding",
  },
};

export const TagActiveProject: Story = {
  name: "Active",
  args: {
    status: "active",
  },
};

export const TagProjectFinished: Story = {
  name: "Finished",
  args: {
    status: "finished",
  },
};
