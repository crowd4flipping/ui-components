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
    defaultValue: "Manzana",
    placeholder: "Select a status",
    onValueChange(value) {
      console.log(value);
    },
    options: [
      {
        sectionLabel: "Frutas",
        values: [{ value: "Manzana" }, { value: "Pera" }, { value: "Melon" }],
      },
      {
        sectionLabel: "Verduras",
        values: [
          { value: "Lechuga", isDesabled: true },
          { value: "Zanahoria", isDesabled: true },
          { value: "Patata" },
        ],
      },
      {
        sectionLabel: "Carnes",
        values: [{ value: "Ternera" }, { value: "Cerdo" }, { value: "Pollo" }],
      },
    ],
  },
};
