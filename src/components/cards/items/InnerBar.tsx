import React from "react";
import { MoneyFormatter } from "../../../utils/MoneyFormatter";

type InnerBarProps = {
  percentageFunded: number;
  percentageToFund: number;
  remainingAmountToFund: number;
  isDark: boolean;
};

export const InnerBar = (props: InnerBarProps) => {
  const {
    percentageFunded,
    percentageToFund,
    remainingAmountToFund,
    isDark = false,
  } = props;

  const roundMoney = MoneyFormatter.withUnitySufix(remainingAmountToFund);

  const maxAmountColor = isDark && "inner-bar__max-amount--dark-mode";
  const percentageColor =
    isDark && "inner-bar__bar--dark-mode";

  return (
    <>
      <div
        className="inner-bar__amount-wrapper"
        style={{
          width: `${percentageToFund + 102}%`,
        }}
      >
        <span className={`inner-bar__max-amount ${maxAmountColor}`}>
          faltan: {roundMoney}
        </span>
      </div>
      {percentageFunded >= 15 && (
        <div className="inner-bar__bar-wrapper">
          <span className={`inner-bar__bar ${percentageColor}`}>
            {percentageFunded}%
          </span>
        </div>
      )}
    </>
  );
};
