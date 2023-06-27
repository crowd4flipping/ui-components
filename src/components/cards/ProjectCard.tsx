import React from "react";
import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { ProjectCardRightSide } from "./items/ProjectCardRightSide";
import { ProjectCardLeftSide } from "./items/ProjectCardLeftSide";
import { ProjectCardVerticalLayout } from "./items/ProjectCardVerticalLayout";
import { ProjectCardTopImage } from "./items/ProjectCardTopImage";
import { ProjectCardBottomSide } from "./items/ProjectCardBottomSide";
import "../styles/global.scss";

type ProjectCardLeftSideProps = Parameters<typeof ProjectCardLeftSide>[number];
type ProjectCardRightSideProps = Parameters<
  typeof ProjectCardRightSide
>[number];

type Props = {
  isVertical?: boolean;
} & ProjectCardLeftSideProps &
  ProjectCardRightSideProps;

export const ProjectCard = (props: Props) => {
  const { isVertical = false } = props;

  if (isVertical)
    return (
      <ProjectCardVerticalLayout
        top={<ProjectCardTopImage {...props} />}
        bottom={<ProjectCardBottomSide {...props} />}
      />
    );

  return (
    <ProjectCardLayout
      leftSide={<ProjectCardLeftSide {...props} />}
      rightSide={<ProjectCardRightSide {...props} />}
    />
  );
};
