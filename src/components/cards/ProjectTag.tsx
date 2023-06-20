import React, { ReactElement } from "react";
import { Tag } from "./Tag";

type ProjectStatus = "in_study" | "funding" | "active" | "finished";

type ProjectTagProps = {
  status: ProjectStatus;
  isDarkMode?: boolean;
};

export const ProjectTag = ({ status, isDarkMode = true }: ProjectTagProps) => {

  const projectTag: Record<ProjectStatus, ReactElement> = {
    in_study: (
      <Tag color="blue" isDarkMode={isDarkMode}>
        En estudio
      </Tag>
    ),
    funding: (
      <Tag color="green" isDarkMode={isDarkMode}>
        En financiación
      </Tag>
    ),
    active: (
      <Tag color="yellow" isDarkMode={isDarkMode}>
        Activo
      </Tag>
    ),
    finished: (
      <Tag color="orange" isDarkMode={isDarkMode}>
        Finalizado
      </Tag>
    ),
  };

  return <div>{projectTag[status]}</div>;
};
