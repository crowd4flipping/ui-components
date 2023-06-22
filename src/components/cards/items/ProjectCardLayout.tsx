import React, { ReactElement } from "react";

type ProjectLayoutProps = {
  isDark: boolean;
  leftSide: ReactElement;
  rightSide: ReactElement;
};

export const ProjectCardLayout = ({
  isDark = false,
  leftSide,
  rightSide,
}: ProjectLayoutProps) => {
  const variant = isDark && "project-card--dark-mode";
  
  return (
    <div className={`project-card ${variant}`}>
      <div className="project-card__content">
        <div className="project-card__content-left">{leftSide}</div>
        <div className="project-card__content-right">{rightSide}</div>
      </div>
    </div>
  );
};
