import React from "react";
import { MoneyFormatter } from "../../../utils/MoneyFormatter";
import { FundedProgressBar } from "../items/FundedProgressBar";
import { ProjectStatus } from "../../types/types";
import { InStudyDarkMode } from "./InStudyDarkMode";

type ProjectFinancialDataProps = {
  status: ProjectStatus;
  totalProjectAmount: number;
  currentAmount: number;
  profitability: string;
};

export const ProjectCardFinancialDataDarkMode = (
  props: ProjectFinancialDataProps
) => {
  const { status, totalProjectAmount, profitability, currentAmount } = props;

  const formatedAmount = MoneyFormatter.round(totalProjectAmount);

  if (status === "in_study") return <InStudyDarkMode withDivider />;

  return (
    <div className="project-card-financial-data">
      {status == "funding" && (
        <dl>
          <dt>Objetivo</dt>
          <dd className="project-card-financial-data__data">
            {formatedAmount}
          </dd>
        </dl>
      )}

      <dl>
        <dt>Rentabilidad anual</dt>
        <dd className="project-card-financial-data__data">{profitability}%</dd>
      </dl>

      <dl>
        <dt>Recaudado</dt>
        {status == "funding" ? (
          <FundedProgressBar
            currentAmount={currentAmount}
            maxAmount={totalProjectAmount}
          />
        ) : (
          <dd className="project-card-financial-data__data">
            {formatedAmount}
          </dd>
        )}
      </dl>

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
    </div>
  );
};
