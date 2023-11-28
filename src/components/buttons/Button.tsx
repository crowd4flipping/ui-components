import React from "react";
//import "./styles/button.scss";
import { unhandledTyles } from "../../utils/utils";
import { ButtonProps, ButtonSize, ButtonVariant } from "./types/types";

export const Button = ({
  children,
  onClick,
  type = "button",
  fullWidth = false,
  variant,
  size = "md",
}: ButtonProps) => {
  const width = fullWidth && "btn--full-width";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${buttonStyle(variant)} ${width} ${btnSize(size)}`}
    >
      {children}
    </button>
  );

  function buttonStyle(btnVariant: ButtonVariant) {
    switch (btnVariant) {
      case "primary":
        return "btn--primary";
      case "secondary":
        return "btn--secondary";
      default:
        return unhandledTyles(btnVariant);
    }
  }

  function btnSize(buttonSize: ButtonSize) {
    switch (buttonSize) {
      case "sm":
        return "btn--sm";
      case "md":
        return;
      case "lg":
        return "btn--lg";
      default:
        return unhandledTyles(buttonSize);
    }
  }
};
