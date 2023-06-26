import React, { ReactElement } from "react";

type ProjectCardVerticalLayoutProps = {
  top: ReactElement | ReactElement[];
  bottom: ReactElement | ReactElement[];
  isDark: boolean;
};

export const ProjectCardVerticalLayout = ({
  top,
  bottom,
  isDark,
}: ProjectCardVerticalLayoutProps) => {
  const cardColor = isDark && "project-card--dark-mode";

  return (
    <div className={`project-card ${cardColor}`}>
      <div className="project-card__content--vertical">
        <div>{top}</div>
        <div className="project-card__content-bottom">{bottom}</div>
      </div>
    </div>
  );
};
