import React, { ReactElement } from "react";
import { Tag } from "./Tag";

type ProjectStatus = "in_study" | "funding" | "active" | "finished";

type ProjectTagProps = {
  status: ProjectStatus;
  isDark?: boolean;
};

export const ProjectTag = ({ status, isDark = true }: ProjectTagProps) => {

  const projectTag: Record<ProjectStatus, ReactElement> = {
    in_study: (
      <Tag color="blue" isDark={isDark}>
        En estudio
      </Tag>
    ),
    funding: (
      <Tag color="green" isDark={isDark}>
        En financiación
      </Tag>
    ),
    active: (
      <Tag color="yellow" isDark={isDark}>
        Activo
      </Tag>
    ),
    finished: (
      <Tag color="orange" isDark={isDark}>
        Finalizado
      </Tag>
    ),
  };

  return <div>{projectTag[status]}</div>;
};
