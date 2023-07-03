import React, { ReactComponentElement } from "react";
import "../styles/global.scss";
import { unhandledTyles } from "../../utils/utils";

type ButtonVariant = "primary" | "secondary";

type ReactButtonProps = Pick<
  ReactComponentElement<"button">["props"],
  "children" | "type" | "onClick"
>;
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ReactButtonProps & {
  fullWidth?: boolean;
  variant: ButtonVariant;
  size?: ButtonSize;
};

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
