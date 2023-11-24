import React from "react";
import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { ProjectCardRightSide } from "./items/ProjectCardRightSide";
import { ProjectCardVerticalLayout } from "./items/ProjectCardVerticalLayout";
import { ProjectCardBottomSide } from "./items/ProjectCardBottomSide";
import "./styles/project-card.scss";
import { ProjectCardImage } from "./items/ProjectCardImage";
import { ImageWrapperDescription } from "../images";

type ProjectCardRightSideProps = Parameters<
  typeof ProjectCardRightSide
>[number];
type ProjectCardImageProps = Omit<
  Parameters<typeof ProjectCardImage>[number],
  "alt"
>;

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
            width={props.width}
            height={props.height}
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
            width={props.width}
            height={props.height}
            src={props.src}
          />
        </ImageWrapperDescription>
      }
      rightSide={<ProjectCardRightSide {...props} />}
    />
  );
};
