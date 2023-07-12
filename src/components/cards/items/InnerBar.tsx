import React from "react";
import { MoneyFormatter } from "../../../utils/MoneyFormatter";

type InnerBarProps = {
  percentageFunded: number;
  percentageToFund: number;
  remainingAmountToFund: number;
};

export const InnerBar = (props: InnerBarProps) => {
  const { percentageFunded, percentageToFund, remainingAmountToFund } = props;

  const roundMoney = MoneyFormatter.withUnitySufix(remainingAmountToFund);

  return (
    <>
      <div
        className="inner-bar__amount-wrapper"
        style={{
          width: `${percentageToFund + 100}%`,
        }}
      >
        <span className="inner-bar__max-amount">faltan: {roundMoney}</span>
      </div>
      {percentageFunded >= 15 && (
        <div className="inner-bar__bar-wrapper">
          <span className="inner-bar__bar">{percentageFunded}%</span>
        </div>
      )}
    </>
  );
};
