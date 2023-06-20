import React, { ReactComponentElement, ReactElement } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ReactButtonProps = Pick<
  ReactComponentElement<"button">["props"],
  "children" | "type" | "onClick"
>;

type ButtonProps = ReactButtonProps & {
  fullWidth?: boolean;
  variant: ButtonVariant;
};

export const Button = ({
  children,
  onClick,
  type = "button",
  fullWidth = false,
  variant,
}: ButtonProps) => {
  const width = fullWidth && "btn--full-width";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${buttonStyle(variant)} ${width}`}
    >
      {children}
    </button>
  );

  function buttonStyle(variant: ButtonVariant) {
    if (variant == "primary") return "btn--primary";
    if (variant == "secondary") return "btn--secondary";
    if (variant == "tertiary") return "btn--tertiary";
  }
};
