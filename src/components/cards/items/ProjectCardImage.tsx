import React from "react";

type ProjectCardImageProps = {
  src: string;
};

export const ProjectCardImage = ({ src }: ProjectCardImageProps) => {
  return (
    <img
      loading="lazy"
      alt="imagen del proyecto"
      src={src}
      className="project-card__image"
    />
  );
};
