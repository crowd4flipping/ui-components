import React from "react";
import { ProjectTag } from "../ProjectTag";
import { ProjectFinancialData } from "./ProjectFinancialData";

type ProjectCardLeftSideProps = {
  isDark: boolean;
  status: Project.Status;
  businessModel: string;
  currentAmount: number;
  totalProjectAmount: number;
  profitability: string;
};

export const ProjectCardLeftSide = (props: ProjectCardLeftSideProps) => {
  const {
    isDark,
    status,
    businessModel,
    currentAmount,
    totalProjectAmount,
    profitability,
  } = props;

  const businessModelColor = isDark && "project-card__business-model--dark";

  return (
    <>
      <div className="project-card__header">
        <ProjectTag isDark={isDark} status={status} />
        <h4 className={`project-card__business-model ${businessModelColor}`}>
          {businessModel}
        </h4>
      </div>
      <ProjectFinancialData
        currentAmount={currentAmount}
        profitability={profitability}
        totalProjectAmount={totalProjectAmount}
        isDark={isDark}
        status={status}
      />
    </>
  );
};
