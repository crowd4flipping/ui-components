import React from "react";
import { StoryContext } from "@storybook/react";

let previousTheme = "light";

export const colorTheme = (Story: any, context: StoryContext) => {
  const { scheme } = context.globals;

  if (previousTheme !== scheme) {
    document.body.classList.toggle("dark-theme");
    previousTheme = scheme;
  }

  return <Story />;
};
