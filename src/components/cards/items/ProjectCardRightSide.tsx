import React, { ReactElement } from "react";
import { LinkButton } from "../../buttons";
import { ImageWrapperDescription } from "../../image/ImageWrapperDescription";
import { C4FComponentError } from "../../../errors/C4FComponentError";
import { ProjectCardImage } from "./ProjectCardImage";

type ProjectCardRightSide = {
  src: string | ReactElement;
  href: string;
  region: string;
  street: string;
};

export const ProjectCardRightSide = (props: ProjectCardRightSide) => {
  const { src, href, region, street } = props;
  return (
    <>
      <div className="project-card__image">
        <ImageWrapperDescription title={region} subtitle={street}>
          <ProjectCardImage forVerticalLayout={false} src={src} />
        </ImageWrapperDescription>
      </div>
      <LinkButton size="sm" fullWidth variant="secondary" href={href}>
        Ver proyecto
      </LinkButton>
    </>
  );

  function isReactImageElement(value: unknown): value is ReactElement {
    if (!isReactElement(value)) return false;
    if (value.type === "img") return true;
    throw new C4FComponentError(
      "Property 'src' in component ProjectCard is not an <img> jsx element"
    );
  }

  function isReactElement(value: unknown): value is ReactElement {
    const obj = Object.keys(value as object);
    const type = obj.find((prop) => prop == "type");
    if (!type) return false;
    return true;
  }
};
