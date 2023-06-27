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
    /* backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#00aced" },
        { name: "light", value: "#3b5998" },
      ],
    }, */
  },
};

export default preview;

export const globalTypes = {
  scheme: {
    name: "Sheme",
    description: "Light and Dark Theme Selector",
    default: "light",
    toolbar: {
      icon: "mirror",
      items: ["light", "dark"],
      dynamicTitle: true,
    },
  },
};
