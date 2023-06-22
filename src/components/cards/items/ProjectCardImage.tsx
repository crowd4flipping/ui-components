import React, { ReactElement } from "react";
import { C4FComponentError } from "../../../errors/C4FComponentError";

type ProjectCardImageProps = {
  src: string | ReactElement;
  forVerticalLayout: boolean;
};

export const ProjectCardImage = ({
  src,
  forVerticalLayout,
}: ProjectCardImageProps) => {
  const imageHeight = forVerticalLayout ? 208 : 227;

  return (
    <>
      {isReactImageElement(src) ? (
        src
      ) : (
        <img
          width={272}
          height={imageHeight}
          loading="lazy"
          alt="imagen del proyecto"
          src={src}
        />
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
