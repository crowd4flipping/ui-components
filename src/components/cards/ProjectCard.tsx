import React from "react";
import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { ProjectCardRightSide } from "./items/ProjectCardRightSide";
import { ProjectCardVerticalLayout } from "./items/ProjectCardVerticalLayout";
import { ProjectCardTopImage } from "./items/ProjectCardTopImage";
import { ProjectCardBottomSide } from "./items/ProjectCardBottomSide";
import "../styles/global.scss";
import { ProjectCardImage } from "./items/ProjectCardImage";

type ProjectCardRightSideProps = Parameters<
  typeof ProjectCardRightSide
>[number];
type ProjectCardImageProps = Parameters<typeof ProjectCardImage>[number];

type Props = {
  isVertical?: boolean;
} & ProjectCardRightSideProps &
  ProjectCardImageProps;

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
      leftSide={<ProjectCardImage {...props} />}
      rightSide={<ProjectCardRightSide {...props} />}
    />
  );
};
