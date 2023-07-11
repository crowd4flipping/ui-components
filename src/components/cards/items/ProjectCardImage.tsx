import React, { ReactElement } from "react";
import { C4FComponentError } from "../../../errors/C4FComponentError";

type ProjectCardImageProps = {
  src: string | ReactElement;
};

export const ProjectCardImage = ({ src }: ProjectCardImageProps) => {
  return (
    <>
      {isReactElement(src) ? (
        { src }
      ) : (
        <img
          loading="lazy"
          alt="imagen del proyecto"
          src={src}
          className="project-card__image"
        />
      )}
    </>
  );

  function isReactElement(value: unknown): value is ReactElement {
    const obj = Object.keys(value as object);
    const type = obj.find((prop) => prop == "type");
    if (!type)
      throw new C4FComponentError(
        "Property 'src' in component ProjectCard is not a ReactElement"
      );
    return true;
  }
};
