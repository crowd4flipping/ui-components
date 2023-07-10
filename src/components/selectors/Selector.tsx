import React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "../styles/global.scss";

type Value = {
  value: string;
  isDesabled?: boolean;
};

type OptionsProps = {
  sectionLabel?: string;
  values: Value[];
};

type Props = {
  ariaLabel: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
  options: OptionsProps[];
  fullWidth?: boolean;
};

const Selector = (props: Props) => {
  const { defaultValue, placeholder, ariaLabel, options, onValueChange } =
    props;

  return (
    <Select.Root onValueChange={onValueChange} defaultValue={defaultValue}>
      <Select.Trigger className="selector" aria-label={ariaLabel}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="selector_icon">
          <ChevronDownIcon width={20} height={20} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="selector__content">
          <Select.ScrollUpButton className="selector__scroll-button">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="selector__viewport">
            {options.map(({ sectionLabel, values }, index) => {
              const key = sectionLabel ? sectionLabel : values[0].value;
              return (
                <>
                  <Select.Group key={key}>
                    {sectionLabel && (
                      <Select.Label className="selector__label">
                        {sectionLabel}
                      </Select.Label>
                    )}
                    {values.map(({ value, isDesabled = false }) => {
                      return (
                        <SelectItem
                          key={value}
                          value={value}
                          disabled={isDesabled}
                        >
                          {value}
                        </SelectItem>
                      );
                    })}
                  </Select.Group>
                  {options.length > 0 && index !== options.length - 1 && (
                    <Select.Separator className="selector__separator" />
                  )}
                </>
              );
            })}
          </Select.Viewport>
          <Select.ScrollDownButton className="selector__scroll-button">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

type SelectItemProps = { children: string; value: string; disabled?: boolean };

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  (props, forwardedRef) => {
    const { disabled = false } = props;

    return (
      <Select.Item
        className="selector__item"
        {...props}
        disabled={disabled}
        ref={forwardedRef}
      >
        <Select.ItemText>
          <span className="fw--md">{props.children}</span>
        </Select.ItemText>
        <Select.ItemIndicator className="selector__item-indicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

export { Selector };
