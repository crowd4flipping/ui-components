import React from "react";
import { MoneyFormatter } from "../../../utils/MoneyFormatter";
import { FundedProgressBar } from "./FundedProgressBar";
import { ProjectInStudyInfo } from "./ProjectInStudyInfo";
import { ProjectStatus } from "../../types/types";

type ProjectFinancialDataProps = {
  status: ProjectStatus;
  totalProjectAmount: number;
  currentAmount: number;
  profitability: string;
};

export const ProjectFinancialData = (props: ProjectFinancialDataProps) => {
  const { status, totalProjectAmount, profitability, currentAmount } = props;

  const formatedAmount = MoneyFormatter.round(totalProjectAmount);

  if (status === "in_study")
    return (
      <div className="project-card__financial-data">
        <ProjectInStudyInfo />
      </div>
    );

  return (
    <div className="project-card__financial-data">
      {status == "funding" && (
        <dl>
          <dt>Objetivo</dt>
          <dd className="project-card__highlight">{formatedAmount}</dd>
        </dl>
      )}

      <dl>
        <dt>Rentabilidad anual</dt>
        <dd className="project-card__highlight">{profitability}%</dd>
      </dl>

      <dl>
        <dt>Recaudado</dt>
        {status == "funding" ? (
          <FundedProgressBar
            currentAmount={currentAmount}
            maxAmount={totalProjectAmount}
          />
        ) : (
          <dd className="project-card__highlight">{formatedAmount}</dd>
        )}
      </dl>
    </div>
  );
};
