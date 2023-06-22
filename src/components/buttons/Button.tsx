import React, { ReactComponentElement } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
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

  function buttonStyle(variant: ButtonVariant) {
    if (variant == "primary") return "btn--primary";
    if (variant == "secondary") return "btn--secondary";
    if (variant == "tertiary") return "btn--tertiary";
  }

  function btnSize(buttonSize: ButtonSize) {
    if (buttonSize === "sm") return "btn--sm";
    if (buttonSize === "lg") return "btn--lg";
  }
};
