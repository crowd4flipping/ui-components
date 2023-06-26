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
  isDark: boolean;
};

export const HorizontalFinancialData = (props: Props) => {
  const { status, totalProjectAmount, profitability, currentAmount, isDark } =
    props;

  const dataColor = isDark && "project-card-financial-data__data--dark-mode";
  const infoColor = isDark && "project-card-financial-data__info--dark-mode";

  const formatedAmount = MoneyFormatter.round(totalProjectAmount);

  if (status == "in_study")
    return <ProjectInStudyInfo withDivider={false} isDark={isDark} />;

  return (
    <div className="project-card-financial-data">
      <div className="project-card-financial-data--horizontal">
        <dl>
          <dt>Rent. anual</dt>
          <dd className={`project-card-financial-data__data ${dataColor}`}>
            {profitability}%
          </dd>
        </dl>
        <dl>
          {status == "funding" ? (
            <>
              <dt>Objetivo</dt>
              <dd className={`project-card-financial-data__data ${dataColor}`}>
                {formatedAmount}
              </dd>
            </>
          ) : (
            <>
              <dt>Recaudado</dt>
              <dd className={`project-card-financial-data__data ${dataColor}`}>
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
            isDark={isDark}
            currentAmount={currentAmount}
            maxAmount={totalProjectAmount}
          />
        </dl>
      )}

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
