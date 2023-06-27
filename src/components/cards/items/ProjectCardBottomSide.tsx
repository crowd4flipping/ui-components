import React from "react";
import { ProjectFinancialData } from "./ProjectFinancialData";
import { Button, LinkButton } from "../../buttons";
import { HorizontalFinancialData } from "./HorizontalFinancialData";

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
    <>
      <h4 className={`project-card__business-model`}>
        {businessModel}
      </h4>
      <HorizontalFinancialData
        status={status}
        currentAmount={currentAmount}
        totalProjectAmount={totalProjectAmount}
        profitability={profitability}
      />

      <LinkButton
        size="sm"
        href={`/proyectos/${projectId}`}
        fullWidth
        variant="secondary"
      >
        Ver proyecto
      </LinkButton>
    </>
  );
};
