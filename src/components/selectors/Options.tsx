import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import "./styles/options.scss";

type Props = {
  fullWidth?: boolean;
  isHorizontal?: boolean;
  defaultValue?: string;
  onValueChange: (value: string) => void;
  arialLabel: string;
  values: string[];
  value?: string;
};

export const Options = (props: Props) => {
  const { fullWidth = false, isHorizontal = true } = props;

  return (
    <RadioGroup.Root
      className={`option__wrapper ${optionWrapperOrientation({
        fullWidth,
        isHorizontal,
      })}`}
      value={props.value}
      defaultValue={props.defaultValue}
      onValueChange={props.onValueChange}
      aria-label={props.arialLabel}
    >
      {props.values.map((value) => {
        return (
          <RadioGroup.Item
            key={value}
            className={`option ${fullWidth && "option--full-width"}`}
            value={value}
            id={value}
          >
            <label className="option__label" htmlFor={value}>
              {value}
            </label>
          </RadioGroup.Item>
        );
      })}
    </RadioGroup.Root>
  );

  function optionWrapperOrientation(props: {
    isHorizontal: boolean;
    fullWidth: boolean;
  }) {
    const orientation = props.isHorizontal ? "option__wrapper--horizontal" : "";
    const width = props.fullWidth ? "option__wrapper--full-width" : "";
    return orientation.concat(" ").concat(width);
  }
};
