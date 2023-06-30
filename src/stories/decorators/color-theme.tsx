/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { StoryContext } from "@storybook/react";

let previousTheme = "light";

export const colorTheme = (Story: any, context: StoryContext) => {
  const { scheme } = context.globals;

  if (previousTheme !== scheme) {
    document.body.classList.toggle("dark-theme");
    previousTheme = scheme;
  }

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Story />
    </div>
  );
};
