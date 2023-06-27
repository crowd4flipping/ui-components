import React from "react";
import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { ProjectCardRightSide } from "./items/ProjectCardRightSide";
import { ProjectCardLeftSide } from "./items/ProjectCardLeftSide";
import { ProjectCardVerticalLayout } from "./items/ProjectCardVerticalLayout";
import { ProjectCardTopImage } from "./items/ProjectCardTopImage";
import { ProjectCardBottomSide } from "./items/ProjectCardBottomSide";
import "../styles/global.scss";

type ProjectCardLeftSideProps = Omit<
  Parameters<typeof ProjectCardLeftSide>[number],
  "isDark"
>;
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
        top={<ProjectCardTopImage {...props} isDark={isDark} />}
        bottom={<ProjectCardBottomSide {...props} />}
      />
    );

  return (
    <ProjectCardLayout
      isDark={isDark}
      leftSide={<ProjectCardLeftSide {...props} isDark={isDark} />}
      rightSide={<ProjectCardRightSide {...props} />}
    />
  );
};
