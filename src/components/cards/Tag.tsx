import React from "react";
import { unhandledType } from "../../../src/utils/utils";

type DarkMod<TagColor extends readonly string[]> =
  `${TagColor[number]}-darkmod`;

const tagColors = ["green", "blue", "yellow", "orange"] as const;

type TagColorDarkMod = DarkMod<typeof tagColors>;
type TagColor = (typeof tagColors)[number] | TagColorDarkMod;

type TagProps = {
  children: string;
  color: TagColor;
};

export const Tag = ({ children, color }: TagProps) => {
  return (
    <div className={`tag ${tagColor(color)}`}>
      <span>{children}</span>
    </div>
  );

  function tagColor(color: TagColor) {
    switch (color) {
      case "blue":
        return "tag--blue";
      case "blue-darkmod":
        return "tag--blue-dark-mode";
      case "yellow":
        return "tag--yellow";
      case "yellow-darkmod":
        return "tag--yellow-dark-mode";
      case "green":
        return "tag--green";
      case "green-darkmod":
        return "tag--green-dark-mode";
      case "orange":
        return "tag--orange";
      case "orange-darkmod":
        return "tag--orange-dark-mode";
      default:
        unhandledType(color);
    }
  }
};
