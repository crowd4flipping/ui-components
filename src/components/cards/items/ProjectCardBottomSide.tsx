import React from "react";
import { ProjectFinancialData } from "./ProjectFinancialData";
import { LinkButton } from "../../buttons";
import { HorizontalFinancialData } from "./HorizontalFinancialData";
import { ProjectTag } from "../ProjectTag";

type Props = { businessModel: string; href: string } & Parameters<
  typeof ProjectFinancialData
>[number];

export const ProjectCardBottomSide = (props: Props) => {
  const {
    currentAmount,
    profitability,
    status,
    totalProjectAmount,
    businessModel,
    href,
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

      <LinkButton size="sm" href={href} fullWidth variant="secondary">
        Ver proyecto
      </LinkButton>
    </div>
  );
};
