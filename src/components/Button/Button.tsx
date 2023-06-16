import React from "react";
import "../styles/theme/05.components/atoms/_button.scss";

type ButtonProps = {
  label: string;
};

export const Button = ({ label }: ButtonProps) => {
  return <button className="btn btn-primary" >{label}</button>;
};
