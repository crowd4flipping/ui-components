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
    <div className="project-card-financial-data">
      <div className="project-card-financial-data--horizontal">
        <dl>
          <dt>Rent. anual</dt>
          <dd className="project-card-financial-data__data">
            {profitability}%
          </dd>
        </dl>
        <dl>
          {status == "funding" ? (
            <>
              <dt>Objetivo</dt>
              <dd className="project-card-financial-data__data">
                {formatedAmount}
              </dd>
            </>
          ) : (
            <>
              <dt>Recaudado</dt>
              <dd className="project-card-financial-data__data">
                {formatedAmount}
              </dd>
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

      {status == "active" && (
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
