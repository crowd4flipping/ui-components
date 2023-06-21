import React from "react";
import { MoneyFormatter } from "../../../utils/MoenyFormatter";

type InnerBarProps = {
  percentageFunded: number;
  percentageToFund: number;
  remainingAmountToFund: number;
  isDarkMode: boolean;
};

export const InnerBar = (props: InnerBarProps) => {
  const {
    percentageFunded,
    percentageToFund,
    remainingAmountToFund,
    isDarkMode = false,
  } = props;

  const roundMoney = MoneyFormatter.withUnitySufix(remainingAmountToFund);

  const maxAmountColor = isDarkMode && "inner-bar__max-amount--dark-mode";
  const percentageColor =
    isDarkMode && "inner-bar__percentage-funded--dark-mode";

  return (
    <>
      <div
        className="inner-bar__bar-wrapper"
        style={{
          width: `${percentageToFund + 102}%`,
        }}
      >
        <span className={`inner-bar__max-amount ${maxAmountColor}`}>
          faltan: {roundMoney}
        </span>
      </div>
      {percentageFunded >= 15 && (
        <div className="inner-bar__percentage-wrapper">
          <span className={`inner-bar__percentage-funded ${percentageColor}`}>
            {percentageFunded}%
          </span>
        </div>
      )}
    </>
  );
};
