import type { Preview } from "@storybook/react";
import "../src/components/styles/global.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#010f24"},
        { name: "light", value: "#ffffff" },
        { name: "surface", value: "#f6f2f2" },
        { name: "surface-dark", value: "#00284d" },
      ],
    },
  },
};

export default preview;

export const globalTypes = {
  scheme: {
    name: "Theme Switcher",
    description: "Light and Dark Theme Selector",
    default: "light",
    toolbar: {
      icon: "mirror",
      items: ["light", "dark"],
      dynamicTitle: true,
    },
  },
};
