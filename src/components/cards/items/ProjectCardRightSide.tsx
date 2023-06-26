import React, { ReactElement } from "react";
import { LinkButton } from "../../buttons";
import { ImageWrapperDescription } from "../../images/ImageWrapperDescription";
import { ProjectCardImage } from "./ProjectCardImage";

type ProjectCardRightSide = {
  src: string | ReactElement;
  projectId: string;
  region: string;
  street: string;
};

export const ProjectCardRightSide = (props: ProjectCardRightSide) => {
  const { src, projectId, region, street } = props;
  return (
    <>
      <div className="project-card__image">
        <ImageWrapperDescription title={region} subtitle={street}>
          <ProjectCardImage forVerticalLayout={false} src={src} />
        </ImageWrapperDescription>
      </div>
      <LinkButton
        size="sm"
        fullWidth
        variant="secondary"
        href={`/proyectos/${projectId}`}
      >
        Ver proyecto
      </LinkButton>
    </>
  );
};
