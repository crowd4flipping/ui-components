import React from "react";
import { ProjectTag } from "../ProjectTag";
import { MoneyFormatter } from "../../../utils/MoneyFormatter";
import { FundedProgressBar } from "./FundedProgressBar";
import { ProjectInStudyInfo } from "./ProjectInStudyInfo";

type ProjectStatus = Parameters<typeof ProjectTag>[number]["status"];

type ProjectFinancialDataProps = {
  status: ProjectStatus;
  totalProjectAmount: number;
  currentAmount: number;
  profitability: string;
  isDark?: boolean;
};

export const ProjectFinancialData = (props: ProjectFinancialDataProps) => {
  const {
    status,
    totalProjectAmount,
    profitability,
    currentAmount,
    isDark = false,
  } = props;

  const dataColor = isDark && "project-card-financial-data__data--dark-mode";
  const formatedAmount = MoneyFormatter.round(totalProjectAmount);

  if (status === "in_study") return <ProjectInStudyInfo withDivider isDark={isDark} />;

  return (
    <dl className="project-card-financial-data">
      {status == "funding" && (
        <div>
          <dt>Objetivo</dt>
          <dd className={`project-card-financial-data__data ${dataColor}`}>
            {formatedAmount}
          </dd>
        </div>
      )}

      <div>
        <dt>Rentabilidad anual</dt>
        <dd className={`project-card-financial-data__data ${dataColor}`}>
          {profitability}%
        </dd>
      </div>

      <div>
        <dt>Recaudado</dt>
        {status == "funding" ? (
          <FundedProgressBar
            isDark={isDark}
            currentAmount={currentAmount}
            maxAmount={totalProjectAmount}
          />
        ) : (
          <dd className={`project-card-financial-data__data ${dataColor}`}>
            {formatedAmount}
          </dd>
        )}
      </div>
    </dl>
  );
};
