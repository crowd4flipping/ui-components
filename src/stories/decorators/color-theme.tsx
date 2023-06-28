import React from "react";
import { StoryContext } from "@storybook/react";

let previousTheme: string;

export const colorTheme = (Story: any, context: StoryContext) => {
  const { scheme, backgrounds } = context.globals;
  const bgColor = backgrounds.value;

  if (previousTheme !== scheme) {
    document.body.classList.toggle("dark-theme");
    previousTheme = scheme;
  }

  return (
    <div style={{ backgroundColor: bgColor }}>
      <Story />
    </div>
  );
};
