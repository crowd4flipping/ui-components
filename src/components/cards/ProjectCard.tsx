import React from "react";
import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { ProjectCardRightSide } from "./items/ProjectCardRightSide";
import { ProjectCardVerticalLayout } from "./items/ProjectCardVerticalLayout";
import { ProjectCardBottomSide } from "./items/ProjectCardBottomSide";
import "../styles/global.scss";
import { ProjectCardImage } from "./items/ProjectCardImage";
import { ImageWrapperDescription } from "../images";

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

export const ProjectCard = (props: Props) => {
  const { isVertical = false } = props;

  if (isVertical)
    return (
      <ProjectCardVerticalLayout
        top={
          <ProjectCardImage
            alt={`proyecto de tipo ${props.businessModel}`}
            src={props.src}
          />
        }
        bottom={<ProjectCardBottomSide {...props} />}
        region={props.region}
        street={props.street}
      />
    );

  return (
    <ProjectCardLayout
      leftSide={
        <ImageWrapperDescription title={props.region} subtitle={props.street}>
          <ProjectCardImage
            alt={`proyecto de tipo ${props.businessModel}`}
            src={props.src}
          />
        </ImageWrapperDescription>
      }
      rightSide={<ProjectCardRightSide {...props} />}
    />
  );
};
