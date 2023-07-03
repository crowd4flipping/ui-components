import React from "react";
import { ProjectCardRightSide } from "../items/ProjectCardRightSide";
import { ProjectCardBottomSide } from "../items/ProjectCardBottomSide";
import "../../styles/global.scss";
import { ProjectCardImage } from "../items/ProjectCardImage";
import { ImageWrapperDescription } from "../../images";
import { ProjectCardVerticalLayoutDarkTheme } from "./ProjectCardVerticalLayoutDarkTheme";
import { ProjectCardLayoutDarkTheme } from "./ProjectCardLayoutDarkTheme";

type ProjectCardRightSideProps = Parameters<
  typeof ProjectCardRightSide
>[number];
type ProjectCardImageProps = Parameters<typeof ProjectCardImage>[number];

type Props = {
  isVertical?: boolean;
  region: string;
  street: string;
} & ProjectCardRightSideProps &
  ProjectCardImageProps;

export const ProjectCardDarkTheme = (props: Props) => {
  const { isVertical = false } = props;

  if (isVertical)
    return (
      <ProjectCardVerticalLayoutDarkTheme
        top={<ProjectCardImage src={props.src} />}
        bottom={<ProjectCardBottomSide {...props} />}
        region={props.region}
        street={props.street}
      />
    );

  return (
    <ProjectCardLayoutDarkTheme
      leftSide={
        <ImageWrapperDescription title={props.region} subtitle={props.street}>
          <ProjectCardImage src={props.src} />
        </ImageWrapperDescription>
      }
      rightSide={<ProjectCardRightSide {...props} />}
    />
  );
};
