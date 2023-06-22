import React from "react";
import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { ProjectCardRightSide } from "./items/ProjectCardRightSide";
import { ProjectCardLeftSide } from "./items/ProjectCardLeftSide";
import { ProjectCardVerticalLayout } from "./items/ProjectCardVerticalLayout";
import { ProjectCardTopImage } from "./items/ProjectCardTopImage";

type ProjectCardLeftSideProps = Parameters<typeof ProjectCardLeftSide>[number];
type ProjectCardRightSideProps = Parameters<
  typeof ProjectCardRightSide
>[number];

type Props = {
  isDark?: boolean;
  isVertical?: boolean;
} & ProjectCardLeftSideProps &
  ProjectCardRightSideProps;

export const ProjectCard = (props: Props) => {
  const { isDark = false, isVertical = false } = props;

  if (isVertical)
    return (
      <ProjectCardVerticalLayout
        isDark={isDark}
        top={<ProjectCardTopImage {...props} projectStatus={props.status} />}
        bottom={<div></div>}
      />
    );

  return (
    <ProjectCardLayout
      isDark={isDark}
      leftSide={<ProjectCardLeftSide {...props} />}
      rightSide={<ProjectCardRightSide {...props} />}
    />
  );
};
