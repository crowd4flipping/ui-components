import React, { ReactElement } from "react";

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
    if (!type) return false;
    return true;
  }
};
