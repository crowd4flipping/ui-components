import React, { ReactElement } from "react";
import { ProjectCardImage } from "./ProjectCardImage";
import { ProjectTag } from "../ProjectTag";
import { ImageWrapperDescription } from "../../image/ImageWrapperDescription";

type ProjectCardTopImageProps = {
  region: string;
  street: string;
  projectStatus: Project.Status;
  isDark: boolean;
  src: string | ReactElement;
};

export const ProjectCardTopImage = (props: ProjectCardTopImageProps) => {
  const { region, street, projectStatus, isDark, src } = props;

  return (
    <div className="project-card__top-image-wrapper">
      <div className="project-card__image">
        <ImageWrapperDescription title={region} subtitle={street}>
          <ProjectCardImage forVerticalLayout src={src} />
        </ImageWrapperDescription>
      </div>
      <div className="project-card__top-image-tag">
        <ProjectTag isDark={isDark} status={projectStatus} />
      </div>
    </div>
  );
};
