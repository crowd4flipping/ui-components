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
    <div className={`card card--md project-card--dark-mode`}>
      <div className="project-card__content--vertical">
        <div>{top}</div>
        <div className="project-card__content-bottom">{bottom}</div>
      </div>
    </div>
  );
};
