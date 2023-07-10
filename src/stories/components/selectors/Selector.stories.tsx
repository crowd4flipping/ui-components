import type { Meta, StoryObj } from "@storybook/react";
import { colorTheme } from "../../decorators/color-theme";
import { Selector } from "../../../components/selectors/Selector";

const meta = {
  title: "Components/Selectors/Selector",
  component: Selector,
  tags: ["selector"],
  decorators: [colorTheme],
} satisfies Meta<typeof Selector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MySelector: Story = {
  name: "Selector",
  args: {
    ariaLabel: "status",
    placeholder: "Choose a fruit",
    onValueChange(value) {
      console.log(value);
    },
    options: [
      {
        sectionLabel: "Fruits",
        values: [{ value: "Mango" }, { value: "Melon" }, { value: "Apple" }],
      },
      {
        sectionLabel: "Vegetables",
        values: [
          { value: "Lettuce" },
          { value: "Carrot" },
          { value: "Potato" },
        ],
      },
    ],
  },
};
