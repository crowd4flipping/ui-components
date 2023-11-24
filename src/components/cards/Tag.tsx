import React from "react";
import "./styles/tag.scss";

const tagColors = ["green", "blue", "magenta", "orange"] as const;

type TagColorLightMod = (typeof tagColors)[number];

type TagProps = {
  children: string;
  color: TagColorLightMod;
};

export const Tag = ({ children, color }: TagProps) => {
  const lightModeColors: Record<TagColorLightMod, string> = {
    blue: "tag--blue",
    green: "tag--green",
    orange: "tag--orange",
    magenta: "tag--magenta",
  };

  return (
    <div className={`tag ${lightModeColors[color]}`}>
      <span>{children}</span>
    </div>
  );
};
