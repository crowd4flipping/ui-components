import type { Meta, StoryObj } from "@storybook/react";
import { ProjectTag } from "../../../components/cards/ProjectTag";
import { colorTheme } from "../../decorators/color-theme";

const meta = {
  title: "Components/Project Tag",
  component: ProjectTag,
  tags: ["tag"],
  decorators: [colorTheme],
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
  name: "In Progress",
  args: {
    status: "in_progress",
  },
};

export const TagProjectFinished: Story = {
  name: "Finished",
  args: {
    status: "finished",
  },
};
