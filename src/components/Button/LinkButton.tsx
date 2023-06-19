import React from "react";
import { Button } from "./Button";

type LinkButtonVariant = Parameters<typeof Button>[number]["variant"];
type LinkButtonProps = Parameters<typeof Button>[number] & {
  href: string;
  newTab?: boolean;
};

export const LinkButton = ({
  children,
  variant,
  fullWidth,
  href,
  newTab = false,
}: LinkButtonProps) => {
  const width = fullWidth && "btn--full-width";

  return (
    <div
      className={`btn ${buttonStyle(
        variant
      )} ${width} inline-block cursor-pointer`}
    >
      <a rel="noopener" target={newTab ? "_blank" : "_self"} href={href}>
        {children}
      </a>
    </div>
  );

  function buttonStyle(variant: LinkButtonVariant) {
    if (variant == "primary") return "btn--primary";
    if (variant == "secondary") return "btn--secondary";
    if (variant == "tertiary") return "btn--tertiary";
  }
};
