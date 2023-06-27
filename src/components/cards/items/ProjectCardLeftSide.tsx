import React from "react";
import { ProjectTag } from "../ProjectTag";
import { ProjectFinancialData } from "./ProjectFinancialData";
import { ProjectStatus } from "../../types/types";

type ProjectCardLeftSideProps = {
  status: ProjectStatus;
  businessModel: string;
  currentAmount: number;
  totalProjectAmount: number;
  profitability: string;
};

export const ProjectCardLeftSide = (props: ProjectCardLeftSideProps) => {
  const {
    status,
    businessModel,
    currentAmount,
    totalProjectAmount,
    profitability,
  } = props;

  return (
    <>
      <div className="project-card__header">
        <ProjectTag status={status} />
        <h4 className={`project-card__business-model`}>
          {businessModel}
        </h4>
      </div>
      <ProjectFinancialData
        currentAmount={currentAmount}
        profitability={profitability}
        totalProjectAmount={totalProjectAmount}
        status={status}
      />
    </>
  );
};
