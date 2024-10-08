import React from "react";
import { MoneyFormatter } from "../../../utils/MoneyFormatter";
import { InnerBar } from "./InnerBar";

type FundedProgressBarProps = {
  maxAmount: number;
  currentAmount: number;
};

type Amounts = { currentAmount: number; maxAmount: number };

export const FundedProgressBar = (props: FundedProgressBarProps) => {
  const { currentAmount, maxAmount } = props;

  const roundMoney = getRoundedMoney({ currentAmount, maxAmount });

  const { percentageFunded, percentageToFund } = getFundedData({
    currentAmount,
    maxAmount,
  });

  const remainingAmount = getRemainingAmount({
    currentAmount,
    maxAmount,
  });

  return (
    <div className="progress-bar">
      <span className="progress-bar__max-amount">faltan: {roundMoney}</span>

      <div
        className="progress-bar__bar"
        style={{ width: `${percentageFunded}%` }}
      >
        <InnerBar
          percentageFunded={percentageFunded}
          percentageToFund={percentageToFund}
          remainingAmountToFund={remainingAmount}
        />
      </div>
    </div>
  );

  function getRoundedMoney(props: Amounts) {
    const { maxAmount } = props;
    const currentAmount = limitCurrentAmount(props);
    return MoneyFormatter.withUnitySufix(maxAmount - currentAmount);
  }

  function getFundedData(props: Amounts) {
    const percentageToFund = calculatePercentageToFund(props);
    const { isOverFunded, percentageFunded } = calculatePercentageFunded(props);

    const roundedPercentageFunded = isOverFunded ? 100 : percentageFunded;
    const roundedPercentageToFund = isOverFunded ? 0 : percentageToFund;

    return {
      percentageFunded: roundedPercentageFunded,
      percentageToFund: roundedPercentageToFund,
    };
  }

  function getRemainingAmount(props: Amounts) {
    const currentAmount = limitCurrentAmount(props);
    return maxAmount - currentAmount;
  }

  function calculatePercentageFunded(props: Amounts) {
    const calcPercentageFunded = (props.currentAmount / props.maxAmount) * 100;
    const isOverFunded = Math.ceil(calcPercentageFunded) > 100;
    const percentageFunded = Math.ceil(calcPercentageFunded);

    return {
      isOverFunded,
      percentageFunded,
    };
  }

  function calculatePercentageToFund(props: Amounts) {
    const { currentAmount, maxAmount } = props;
    const percentageToFund =
      ((maxAmount - currentAmount) / currentAmount) * 100;
    return Math.ceil(percentageToFund);
  }

  function limitCurrentAmount(props: Amounts) {
    const { currentAmount, maxAmount } = props;
    return currentAmount > maxAmount ? maxAmount : currentAmount;
  }
};
