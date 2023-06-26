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
  const infoColor = isDark && "project-card-financial-data__info--dark-mode";
  const formatedAmount = MoneyFormatter.round(totalProjectAmount);

  if (status === "in_study")
    return <ProjectInStudyInfo withDivider isDark={isDark} />;

  return (
    <div className="project-card-financial-data">
      {status == "funding" && (
        <dl>
          <dt>Objetivo</dt>
          <dd className={`project-card-financial-data__data ${dataColor}`}>
            {formatedAmount}
          </dd>
        </dl>
      )}

      <dl>
        <dt>Rentabilidad anual</dt>
        <dd className={`project-card-financial-data__data ${dataColor}`}>
          {profitability}%
        </dd>
      </dl>

      <dl>
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
      </dl>

      {status == "active" && (
        <span className={`project-card-financial-data__info ${infoColor}`}>
          Este proyecto ya está en ejecución
        </span>
      )}
      {status == "finished" && (
        <span className={`project-card-financial-data__info ${infoColor}`}>
          Este proyecto ya ha sido explotado
        </span>
      )}
    </div>
  );
};
