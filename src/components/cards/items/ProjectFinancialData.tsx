import React from "react";
import { ProjectTag } from "../ProjectTag";
import { MoneyFormatter } from "../../../utils/MoenyFormatter";
import { FundedProgressBar } from "./FundedProgressBar";

type ProjectStatus = Parameters<typeof ProjectTag>[number]["status"];

type ProjectFinancialDataProps = {
  status: ProjectStatus;
  totalProjectAmount: number;
  currentAmount: number;
  profitability: string;
  isHorizontal?: boolean;
  isDarkMode?: boolean;
};

export const ProjectFinancialData = (props: ProjectFinancialDataProps) => {
  const {
    status,
    totalProjectAmount,
    profitability,
    currentAmount,
    isHorizontal = false,
    isDarkMode = false,
  } = props;

  const dataColor = isDarkMode && "financial-data__data--dark-mode";
  const formatedAmount = MoneyFormatter.round(totalProjectAmount);

  return (
    <dl className="financial-data">
      {status == "funding" && (
        <div>
          <dt>Objetivo</dt>
          <dd className={`financial-data__data ${dataColor}`}>
            {formatedAmount}
          </dd>
        </div>
      )}

      <div>
        <dt>Rentabilidad anual</dt>
        <dd className={`financial-data__data ${dataColor}`}>
          {profitability}%
        </dd>
      </div>

      <div>
        <dt>Recaudado</dt>
        {status == "funding" ? (
          <FundedProgressBar
            isDarkMode={isDarkMode}
            currentAmount={currentAmount}
            maxAmount={totalProjectAmount}
          />
        ) : (
          <dd className={`financial-data__data ${dataColor}`}>
            {formatedAmount}
          </dd>
        )}
      </div>
    </dl>
  );
};
