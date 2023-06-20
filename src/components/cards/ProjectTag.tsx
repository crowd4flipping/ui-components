import React from "react";
import { Tag } from "./Tag";
import { unhandledType } from "../../../src/utils/utils";

type ProjectStatus = "in_study" | "funding" | "active" | "finished";

type ProjectTagProps = {
  status: ProjectStatus;
  isDarkMode?: boolean;
};

export const ProjectTag = ({ status, isDarkMode = true }: ProjectTagProps) => {
  if (isDarkMode)
    switch (status) {
      case "in_study":
        return <Tag color="blue-darkmod">En estudio</Tag>;
      case "funding":
        return <Tag color="green-darkmod">En financiación</Tag>;
      case "active":
        return <Tag color="yellow-darkmod">Activo</Tag>;
      case "finished":
        return <Tag color="orange-darkmod">Finalizado</Tag>;
      default:
        unhandledType(status);
    }

  switch (status) {
    case "in_study":
      return <Tag color={"blue"}>En estudio</Tag>;
    case "funding":
      return <Tag color={"green"}>En financiación</Tag>;
    case "active":
      return <Tag color={"yellow"}>Activo</Tag>;
    case "finished":
      return <Tag color={"orange"}>Finalizado</Tag>;
    default:
      unhandledType(status);
  }
};
