import React, { ReactElement } from "react";

type ProjectLayoutProps = {
  leftSide: ReactElement;
  rightSide: ReactElement;
};

export const ProjectCardLayoutDarkMode = ({
  leftSide,
  rightSide,
}: ProjectLayoutProps) => {
  return (
    <div className={`card card--md project-card--dark-mode`}>
      <div className="project-card__content">
        <div className="project-card__content-left">{leftSide}</div>
        <div className="project-card__content-right">{rightSide}</div>
      </div>
    </div>
  );
};
