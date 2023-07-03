import React, { ReactElement } from "react";

type Props = {
  top: ReactElement | ReactElement[];
  bottom: ReactElement | ReactElement[];
  street: string;
  region: string;
};

export const ProjectCardVerticalLayoutDarkTheme = ({
  top,
  bottom,
  street,
  region,
}: Props) => {
  return (
    <div className="project-card dark-theme project-card--vertical-layout">
      {bottom}
      {top}
      <div className="img-wrapper-title__content">
        <p className="img-wrapper-title__title">{region}</p>
        <p className="img-wrapper-title__subtitle">{street}</p>
      </div>
    </div>
  );
};
