import React from "react";
import { ButtonProps, ButtonSize, ButtonVariant } from "./types/types";
import "./styles/button.scss";

type LinkButtonProps = Omit<ButtonProps, "type"> & {
  href: string;
  newTab?: boolean;
};

export const LinkButton = ({
  children,
  variant,
  fullWidth,
  href,
  newTab = false,
  size = "md",
}: LinkButtonProps) => {
  const width = fullWidth && "btn--full-width";

  return (
    <a
      rel="noreferrer"
      target={newTab ? "_blank" : "_self"}
      href={href}
      className={`link-btn fit-content ${buttonStyle(
        variant
      )} ${width} ${btnSize(size)} inline-block cursor-pointer`}
    >
      {children}
    </a>
  );

  function btnSize(buttonSize: ButtonSize) {
    if (buttonSize === "sm") return "btn--sm";
    if (buttonSize === "lg") return "btn--lg";
  }

  function buttonStyle(variant: ButtonVariant) {
    if (variant == "primary") return "btn--primary";
    if (variant == "secondary") return "btn--secondary";
    if (variant == "tertiary") return "btn--tertiary";
  }
};
