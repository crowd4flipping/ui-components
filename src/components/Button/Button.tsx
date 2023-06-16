import React from "react";

type ButtonProps = {
  label: string;
};

export const Button = ({ label }: ButtonProps) => {
  return <button >{label}</button>;
};
