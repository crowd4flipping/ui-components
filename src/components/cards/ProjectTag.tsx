import React, { ReactElement } from "react";
import { Tag } from "./Tag";
//import "./styles/project-card.scss";
import { ProjectStatus } from "../types/types";

type ProjectTagProps = {
  status: ProjectStatus;
};

export const ProjectTag = ({ status }: ProjectTagProps) => {
  const projectTag: Record<ProjectStatus, ReactElement> = {
    in_study: <Tag color="blue">En estudio</Tag>,
    funding: <Tag color="green">En financiación</Tag>,
    in_progress: <Tag color="magenta">En ejecución</Tag>,
    finished: <Tag color="orange">Finalizado</Tag>,
  };

  return <div>{projectTag[status]}</div>;
};
