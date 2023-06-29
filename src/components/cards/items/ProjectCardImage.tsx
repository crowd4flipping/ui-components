import React, { ReactElement } from "react";
import { C4FComponentError } from "../../../errors/C4FComponentError";
import { ImageWrapperDescription } from "../../images/ImageWrapperDescription";

type ProjectCardImageProps = {
  src: string | ReactElement;
  region: string;
  street: string;
};

export const ProjectCardImage = ({
  src,
  region,
  street,
}: ProjectCardImageProps) => {
  return (
    <>
      {isReactImageElement(src) ? (
        <ImageWrapperDescription title={region} subtitle={street}>
          {src}
        </ImageWrapperDescription>
      ) : (
        <ImageWrapperDescription title={region} subtitle={street}>
          <img
            loading="lazy"
            alt="imagen del proyecto"
            src={src}
            className="project-card__image"
          />
        </ImageWrapperDescription>
      )}
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
