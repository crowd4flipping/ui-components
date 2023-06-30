import React, { ReactElement } from "react";

type ProjectCardVerticalLayoutProps = {
  top: ReactElement | ReactElement[];
  bottom: ReactElement | ReactElement[];
};

export const ProjectCardVerticalLayout = ({
  top,
  bottom,
}: ProjectCardVerticalLayoutProps) => {
  return (
    <div className="project-card project-card--vertical-layout">
      {bottom}
      {top}
    </div>
  );
};
