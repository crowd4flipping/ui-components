import React, { ReactElement } from "react";
import { ProjectCardImage } from "./ProjectCardImage";
import { ProjectTag } from "../ProjectTag";
import { ImageWrapperDescription } from "../../images/ImageWrapperDescription";
import { ProjectStatus } from "../../types/types";

type ProjectCardTopImageProps = {
  region: string;
  street: string;
  status: ProjectStatus;
  src: string | ReactElement;
};

export const ProjectCardTopImage = (props: ProjectCardTopImageProps) => {
  const { region, street, status, src } = props;

  return (
    <div className="project-card__top-image-wrapper">
      <div className="project-card__image">
        <ImageWrapperDescription title={region} subtitle={street}>
          <ProjectCardImage {...props} />
        </ImageWrapperDescription>
      </div>
      <div className="project-card__top-image-tag">
        <ProjectTag status={status} />
      </div>
    </div>
  );
};
