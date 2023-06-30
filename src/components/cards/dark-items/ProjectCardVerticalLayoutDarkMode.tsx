import React, { ReactElement } from "react";

type ProjectCardVerticalLayoutProps = {
  top: ReactElement | ReactElement[];
  bottom: ReactElement | ReactElement[];
};

export const ProjectCardVerticalLayoutDarkMode = ({
  top,
  bottom,
}: ProjectCardVerticalLayoutProps) => {
  return (
    <div>
      <>{top}</>
      <div className="project-card__content-bottom">{bottom}</div>
    </div>
  );
};
