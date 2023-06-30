import React, { ReactElement } from "react";

type ProjectCardVerticalLayoutProps = {
  top: ReactElement | ReactElement[];
  bottom: ReactElement | ReactElement[];
  street:string;
  region:string;
};

export const ProjectCardVerticalLayout = ({
  top,
  bottom,
  street,
  region,
}: ProjectCardVerticalLayoutProps) => {
  return (
    <div className="project-card project-card--vertical-layout">
      {bottom}
      {top}
      <div className="img-wrapper-title__content">
        <p className="img-wrapper-title__title">{region}</p>
        <p className="img-wrapper-title__subtitle">{street}</p>
      </div>
    </div>
  );
};
