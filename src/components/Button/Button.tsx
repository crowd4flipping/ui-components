import React from "react";
import "../styles/global.scss"

type ButtonProps = {
  label: string;
};

export const Button = ({ label }: ButtonProps) => {
  return <button className="btn btn-primary" >{label}</button>;
};
