import React from "react";
import { ProjectTag } from "../ProjectTag";
import { ProjectFinancialData } from "./ProjectFinancialData";
import { ProjectStatus } from "../../types/types";
import { LinkButton } from "../../buttons/LinkButton";

type Props = {
  status: ProjectStatus;
  businessModel: string;
  currentAmount: number;
  totalProjectAmount: number;
  profitability: string;
  projectId: string;
};

export const ProjectCardRightSide = (props: Props) => {
  const {
    status,
    businessModel,
    currentAmount,
    totalProjectAmount,
    profitability,
    projectId,
  } = props;

  return (
    <>
      <div className="project-card__header">
        <h4>{businessModel}</h4>
        <ProjectTag status={status} />
      </div>
      <ProjectFinancialData
        currentAmount={currentAmount}
        profitability={profitability}
        totalProjectAmount={totalProjectAmount}
        status={status}
      />
      <div>
        <p className="project-card__extra-info">
          {status == "active" && "Este proyecto ya está en ejecución"}
          {status == "finished" && "Este proyecto ya ha sido explotado"}
        </p>

        <LinkButton
          size="sm"
          fullWidth
          variant="secondary"
          href={`/proyectos/${projectId}`}
        >
          Ver proyecto
        </LinkButton>
      </div>
    </>
  );
};
