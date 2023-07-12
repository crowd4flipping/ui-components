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
  href: string;
};

export const ProjectCardRightSide = (props: Props) => {
  const {
    status,
    businessModel,
    currentAmount,
    totalProjectAmount,
    profitability,
    href,
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

      <LinkButton size="sm" fullWidth variant="secondary" href={href}>
        Ver proyecto
      </LinkButton>
    </>
  );
};
