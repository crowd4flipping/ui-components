import { ReactComponentElement } from "react";

export type ButtonVariant = "primary" | "secondary";

export type ReactButtonProps = Pick<
  ReactComponentElement<"button">["props"],
  "children" | "type" | "onClick"
>;
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ReactButtonProps & {
  fullWidth?: boolean;
  variant: ButtonVariant;
  size?: ButtonSize;
};
