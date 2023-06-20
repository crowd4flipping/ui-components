import React from "react";

const tagColors = ["green", "blue", "yellow", "orange"] as const;

type TagColorLightMod = (typeof tagColors)[number];

type TagProps = {
  children: string;
  color: TagColorLightMod;
  isDarkMode?: boolean;
};

export const Tag = ({ children, color, isDarkMode = false }: TagProps) => {
  const lightModeColors: Record<TagColorLightMod, string> = {
    blue: "tag--blue",
    green: "tag--green",
    orange: "tag--orange",
    yellow: "tag--yellow",
  };

  return (
    <div className={`tag ${getColor(color)}`}>
      <span>{children}</span>
    </div>
  );

  function getColor(color: TagColorLightMod) {
    return isDarkMode
      ? `${lightModeColors[color]}-dark-mode`
      : lightModeColors[color];
  }
};
