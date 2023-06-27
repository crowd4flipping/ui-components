import React from "react";
import { StoryContext } from "@storybook/react";

export const colorTheme = (Story: any, context: StoryContext) => {
  const { scheme } = context.globals;
  let bgColor = "white";

  if (scheme === "dark") {
    document.body.classList.toggle("dark-theme");
    bgColor = "black";
  } else {
    document.body.classList.remove("dark-theme");
  }

  return (
    <div style={{padding: "5rem", backgroundColor: bgColor}}>
      <Story />
    </div>
  );
};
