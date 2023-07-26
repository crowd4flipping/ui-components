import React from "react";
import { ProjectCardRightSide } from "./items/ProjectCardRightSide";
import { ProjectCardBottomSide } from "./items/ProjectCardBottomSide";
import { ProjectCardImage } from "./items/ProjectCardImage";
import { ImageWrapperDescription } from "../images";
import { ProjectCardVerticalLayoutDarkTheme } from "./dark-items/ProjectCardVerticalLayoutDarkTheme";
import { ProjectCardLayoutDarkTheme } from "./dark-items/ProjectCardLayoutDarkTheme";
import "../styles/global.scss";
import { ProjectCard } from "./ProjectCard";

type Props = Parameters<typeof ProjectCard>[number];

export const ProjectCardDarkTheme = (props: Props) => {
  const { isVertical = false } = props;

  if (isVertical)
    return (
      <ProjectCardVerticalLayoutDarkTheme
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
    <ProjectCardLayoutDarkTheme
      leftSide={
        <ImageWrapperDescription title={props.region} subtitle={props.street}>
          <ProjectCardImage
            alt={`proyecto de tipo ${props.businessModel}`}
            src={props.src}
            width={props.width}
            height={props.height}
          />
        </ImageWrapperDescription>
      }
      rightSide={<ProjectCardRightSide {...props} />}
    />
  );
};
