import type { Meta, StoryObj } from "@storybook/react";
import { colorTheme } from "../../decorators/color-theme";
import { Options } from "../../../components/selectors/Options";

const meta = {
  title: "Components/Selectors/Options",
  component: Options,
  tags: ["options"],
  decorators: [colorTheme],
} satisfies Meta<typeof Options>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MySelector: Story = {
  name: "Options",
  args: {
    arialLabel: "Fruits",
    defaultValue: "Mango",
    onValueChange(value) {
      console.log(value);
    },
    values: ["Manzana", "Pera", "Mango", "Melón"],
    fullWidth: false,
    isHorizontal: false,
  },
};
