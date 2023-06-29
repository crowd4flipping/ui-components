import React, { ReactElement } from "react";

type ProjectLayoutProps = {
  leftSide: ReactElement;
  rightSide: ReactElement;
};

export const ProjectCardLayout = ({
  leftSide,
  rightSide,
}: ProjectLayoutProps) => {
  return (
    <div className="project-card">
      <div className="project-card__content">
        <div className="project-card__image-wrapper">{leftSide}</div>
        <div className="project-card__content-right">{rightSide}</div>
      </div>
    </div>
  );
};
