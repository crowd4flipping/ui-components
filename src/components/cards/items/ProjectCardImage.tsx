import React from "react";

type ProjectCardImageProps = {
  src: string;
  alt: string;
};

export const ProjectCardImage = ({
  src,
  alt,
  ...props
}: ProjectCardImageProps) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const nextImage = require("next/image");
  try {
    return React.createElement(nextImage, {
      src,
      ...props,
    });
  } catch {
    return (
      <img loading="lazy" alt={alt} src={src} className="project-card__image" />
    );
  }
};
