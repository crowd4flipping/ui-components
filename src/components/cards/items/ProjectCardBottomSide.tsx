import React from "react";
import { ProjectFinancialData } from "./ProjectFinancialData";
import { Button, LinkButton } from "../../buttons";
import { HorizontalFinancialData } from "./HorizontalFinancialData";
import { ProjectTag } from "../ProjectTag";

type Props = { businessModel: string; projectId: string } & Parameters<
  typeof ProjectFinancialData
>[number];

export const ProjectCardBottomSide = (props: Props) => {
  const {
    currentAmount,
    profitability,
    status,
    totalProjectAmount,
    businessModel,

    projectId,
  } = props;

  return (
    <div className="project-card__content-bottom">
      <div className="project-card__header--horizontal">
        <h4>{businessModel}</h4>
        <ProjectTag status={status} />
      </div>
      <HorizontalFinancialData
        status={status}
        currentAmount={currentAmount}
        totalProjectAmount={totalProjectAmount}
        profitability={profitability}
      />

      <div>
        {status == "in_progress" && (
          <span className="project-card-financial-data__info">
            Este proyecto ya está en ejecución
          </span>
        )}
        {status == "finished" && (
          <span className="project-card-financial-data__info">
            Este proyecto ya ha sido explotado
          </span>
        )}
        <LinkButton
          size="sm"
          href={`/proyectos/${projectId}`}
          fullWidth
          variant="secondary"
        >
          Ver proyecto
        </LinkButton>
      </div>
    </div>
  );
};
