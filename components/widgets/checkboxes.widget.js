import React, { useState } from 'react';
import {
  Checkbox,
  CheckboxGroup,
  Grid,
  GridItem,
  Text,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';

const CheckboxesWidget = (props) => {
  const {
    id,
    disabled,
    options,
    value,
    readonly,
    onChange,
    onBlur,
    onFocus,
    required,
    label,
    uiSchema,
    rawErrors = [],
    schema,
  } = props;

  const {
    enumOptions,
    enumDisabled,
    allOption = 'all',
    spacing = 1,
    columns = 1,
  } = options;

  // !!! TODO
  // const chakraProps = getChakra({ uiSchema });
  const chakraProps = {};

  const _onBlur = ({ target: { value } }) => onBlur(id, value);
  const _onFocus = ({ target: { value } }) => onFocus(id, value);

  const row = options ? options.inline : false;

  const [checkboxGroupValue, setCheckboxGroupValue] = useState(
    getCheckboxGroupInitialValue(value, allOption, options)
  );

  const isAllChecked = getIsAllChecked(checkboxGroupValue, options);
  const isAllIndeterminate = getIsAllIndeterminate(checkboxGroupValue, options);

  const handleAllChange = (event) => {
    if (event.target.checked) {
      setCheckboxGroupValue(options);
      onChange([allOption]);
    } else {
      setCheckboxGroupValue([]);
      onChange([]);
    }
  };

  const handleCheckboxGroupChange = (value) => {
    setCheckboxGroupValue(value);

    if (getIsAllChecked(value, options)) {
      onChange([allOption]);
    } else {
      onChange(value);
    }
  };

  return (
    <>
      <FormControl
        mb={1}
        {...chakraProps}
        isDisabled={disabled || readonly}
        isRequired={required}
        isReadOnly={readonly}
        isInvalid={rawErrors && rawErrors.length > 0}
      >
        <Checkbox
          isChecked={isAllChecked}
          isIndeterminate={isAllIndeterminate}
          onChange={handleAllChange}
        >
          {/* TODO: map enum value to label  */}
          {allOption}
        </Checkbox>
        <CheckboxGroup
          value={checkboxGroupValue}
          onChange={handleCheckboxGroupChange}
        >
          <Grid
            pl={6}
            mt={spacing}
            spacing={spacing}
            rowGap={spacing}
            columnGap="34px"
            templateColumns={`repeat(${columns.toString()}, minmax(0, max-content))`}
          >
            {enumOptions.map((option, index) => {
              const checked = value.indexOf(option.value) !== -1;
              const itemDisabled =
                enumDisabled && enumDisabled.indexOf(option.value) !== -1;
              return (
                <GridItem key={option.value}>
                  <Checkbox
                    key={`${id}_${index}`}
                    id={`${id}_${index}`}
                    value={option.value}
                    isChecked={checked}
                    isDisabled={disabled || itemDisabled || readonly}
                    onBlur={_onBlur}
                    onFocus={_onFocus}
                  >
                    {option.label && <Text>{option.label}</Text>}
                  </Checkbox>
                </GridItem>
              );
            })}
          </Grid>
        </CheckboxGroup>
      </FormControl>
    </>
  );
};

export default CheckboxesWidget;

function getIsAllIndeterminate(checkboxGroupValue, options) {
  return (
    checkboxGroupValue.length > 0 && checkboxGroupValue.length < options.length
  );
}

function getIsAllChecked(checkboxGroupValue, options) {
  return checkboxGroupValue.length === options.length;
}

function getCheckboxGroupInitialValue(defaultValue, allOption, options) {
  return defaultValue.length === 1 && defaultValue[0] === allOption
    ? options
    : defaultValue;
}
