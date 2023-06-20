import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "../ProjectCard";

const meta = {
  title: "Components/Project Card",
  component: ProjectCard,
  tags: ["card"],
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MyProjectCard: Story = {
  name: "Project card",
  args: {
    href:"https://crowd4flipping.com/",
    isDark: true,
    businessModel:"Renting",
    status: "active",
    src: "https://images.unsplash.com/photo-1683009427500-71296178737f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  },
};
