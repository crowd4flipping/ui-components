import React, { ReactElement } from "react";

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
    <div className="img-wrapper-title">
      {children}
      <div className="img-wrapper-title__content">
        <p className="img-wrapper-title__title">{title}</p>
        {subtitle && <p className="img-wrapper-title__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};
