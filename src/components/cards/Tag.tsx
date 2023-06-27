import React from "react";
import "../styles/global.scss";

const tagColors = ["green", "blue", "yellow", "orange"] as const;

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
    yellow: "tag--yellow",
  };

  return (
    <div className={`tag ${lightModeColors[color]}`}>
      <span>{children}</span>
    </div>
  );
};
