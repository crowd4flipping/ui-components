import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

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
      default: "background-dark",
      values: [
        { name: "background", value: "#ffffff" },
        { name: "surface", value: "#f6f2f2" },
        { name: "background-dark", value: "#010f24" },
        { name: "surface-dark", value: "#00284d" },
      ],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  },
};

export const globalTypes = {
  scheme: {
    name: "Theme Switcher",
    description: "Light and Dark Theme Selector",
    default: "dark",
    toolbar: {
      icon: "mirror",
      items: ["dark", "light"],
    },
  },
};

export default preview;
