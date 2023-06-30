import React from "react";
import { FundedProgressBar } from "./FundedProgressBar";
import { ProjectInStudyInfo } from "./ProjectInStudyInfo";
import { MoneyFormatter } from "../../../utils/MoneyFormatter";
import { ProjectStatus } from "../../types/types";

type Props = {
  status: ProjectStatus;
  totalProjectAmount: number;
  currentAmount: number;
  profitability: string;
};

export const HorizontalFinancialData = (props: Props) => {
  const { status, totalProjectAmount, profitability, currentAmount } = props;
  const formatedAmount = MoneyFormatter.round(totalProjectAmount);

  if (status == "in_study")
    return <ProjectInStudyInfo fullWithDivider={false} />;

  return (
    <div className="project-card__financial-data">
      <div className="project-card__financial-data--horizontal">
        <dl className="project-card__left-data">
          <dt>Rent. anual</dt>
          <dd className="project-card__highlight">{profitability}%</dd>
        </dl>
        <dl className="project-card__right-data">
          {status == "funding" ? (
            <>
              <dt>Objetivo</dt>
              <dd className="project-card__highlight">{formatedAmount}</dd>
            </>
          ) : (
            <>
              <dt>Recaudado</dt>
              <dd className="project-card__highlight">{formatedAmount}</dd>
            </>
          )}
        </dl>
      </div>

      {status == "funding" && (
        <dl>
          <dt>Recaudado</dt>
          <FundedProgressBar
            currentAmount={currentAmount}
            maxAmount={totalProjectAmount}
          />
        </dl>
      )}
    </div>
  );
};
