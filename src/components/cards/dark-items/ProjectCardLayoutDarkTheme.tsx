import React, { ReactElement } from "react";

type Props = {
  leftSide: ReactElement;
  rightSide: ReactElement;
};

export const ProjectCardLayoutDarkTheme = ({ leftSide, rightSide }: Props) => {
  return (
    <div className="project-card dark-theme">
      <div className="project-card__content">
        <div className="project-card__image-wrapper">{leftSide}</div>
        <div className="project-card__content-right">{rightSide}</div>
      </div>
    </div>
  );
};
