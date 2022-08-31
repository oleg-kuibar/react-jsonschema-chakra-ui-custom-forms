import { useState } from 'react';

function getIsAllIndeterminate(checkboxGroupValue, options) {
  return (
    checkboxGroupValue.length > 0 && checkboxGroupValue.length < options.length
  );
}

function getIsAllChecked(checkboxGroupValue, options) {
  return checkboxGroupValue.length === options.length;
}

function getCheckboxGroupInitialValue(defaultValue, allOption, options) {
  return defaultValue.length === 1 && defaultValue[0] === allOption.value
    ? options.map((option) => option.value)
    : defaultValue;
}

export function useIndeterminateCheckboxList(
  allOption,
  options,
  defaultValue,
  onChange
) {
  const [checkboxGroupValue, setCheckboxGroupValue] = useState(
    getCheckboxGroupInitialValue(defaultValue, allOption, options)
  );

  const isAllChecked = getIsAllChecked(checkboxGroupValue, options);
  const isAllIndeterminate = getIsAllIndeterminate(checkboxGroupValue, options);

  const handleAllChange = (event) => {
    if (event.target.checked) {
      setCheckboxGroupValue(options.map((option) => option.value));
      onChange([allOption.value]);
    } else {
      setCheckboxGroupValue([]);
      onChange([]);
    }
  };

  const handleCheckboxGroupChange = (value) => {
    setCheckboxGroupValue(value);

    if (getIsAllChecked(value, options)) {
      onChange([allOption.value]);
    } else {
      onChange(value);
    }
  };

  return {
    checkboxGroupValue,
    isAllChecked,
    isAllIndeterminate,
    handleAllChange,
    handleCheckboxGroupChange,
  };
}
