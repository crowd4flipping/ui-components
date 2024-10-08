import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "../../../components/cards/ProjectCard";
import { colorTheme } from "../../decorators/color-theme";

const meta = {
  title: "Components/Project Card",
  component: ProjectCard,
  tags: ["card"],
  decorators: [colorTheme],
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const imageUrl = () => {
  return "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
};

export const MyProjectCard: Story = {
  name: "Project card",
  args: {
    region: "Baleares, Palma",
    street: "C/ Santiago el hermoso",
    isVertical: false,
    href: "https://crowd4flipping.com/",
    businessModel: "House Flipping",
    status: "in_progress",
    src: imageUrl(),
    currentAmount: 50000,
    totalProjectAmount: 150000,
    profitability: "13",
  },
};
