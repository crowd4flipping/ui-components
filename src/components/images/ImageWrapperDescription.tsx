import React, { ReactElement } from "react";
import "./styles/image-wrapper.scss";

type ImageWrapperDescriptionProps = {
  children: ReactElement;
  title: string;
  subtitle?: string;
};

export const ImageWrapperDescription = ({
  children,
  title,
  subtitle,
}: ImageWrapperDescriptionProps) => {
  return (
    <figure className="img-wrapper-title">
      {children}
      <div className="img-wrapper-title__content">
        <figcaption className="img-wrapper-title__title">{title}</figcaption>
        {subtitle && (
          <figcaption className="img-wrapper-title__subtitle">
            {subtitle}
          </figcaption>
        )}
      </div>
    </figure>
  );
};
