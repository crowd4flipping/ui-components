import React from "react";

type Props = {
  src: string;
  alt: string;
  NextImageComponent?: React.ElementType;
  width?: number;
  height?: number;
};

export const ProjectCardImage = ({
  src,
  alt,
  NextImageComponent,
  width,
  height,
}: Props) => {
  const hasSize = width && height;
  try {
    if (NextImageComponent) {
      return React.createElement(NextImageComponent, {
        src,
        alt,
        layout: hasSize ? undefined : "fill",
        width,
        height,
      });
    } else {
      return (
        <img
          loading="lazy"
          alt={alt}
          src={src}
          className="project-card__image"
        />
      );
    }
  } catch {
    return (
      <img loading="lazy" alt={alt} src={src} className="project-card__image" />
    );
  }
};
