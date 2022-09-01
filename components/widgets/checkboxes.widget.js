import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Checkbox,
  CheckboxGroup,
  Grid,
  GridItem,
  Text,
  FormLabel,
  FormControl,
  useCheckboxGroupContext,
  useCheckboxGroup,
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
    rawErrors = [],
  } = props;

  const { enumOptions, enumDisabled, spacing = 1, columns = 1 } = options;

  // !!! TODO
  // const chakraProps = getChakra({ uiSchema });
  const chakraProps = {};

  const _onBlur = ({ target: { value } }) => onBlur(id, value);
  const _onFocus = ({ target: { value } }) => onFocus(id, value);

  const isAllChecked = enumOptions.length === value.length;
  const isAllIndeterminate = value.length > 0 && !isAllChecked;
  const handleAllChange = (event) => {
    if (event.target.checked) {
      onChange(enumOptions.map((option) => option.value));
    } else {
      onChange([]);
    }
  };

  const handleChange = useCallback((changedValue) => {
    const allChecked =
      changedValue.length === enumOptions.length - 1 &&
      !changedValue.includes(enumOptions[0].value);
    // if all checkboxes are checked, add enumOptions[0].value to changedValue at 0 index
    if (allChecked) {
      return props.onChange([enumOptions[0].value, ...changedValue]);
    }
    // if all checkboxes are unchecked, remove enumOptions[0].value from changedValue at 0 index
    else {
      return props.onChange([
        ...changedValue.filter((value) => value !== enumOptions[0].value),
      ]);
    }
  });

  return (
    <>
      <Checkbox
        isChecked={isAllChecked}
        isIndeterminate={isAllIndeterminate}
        onChange={handleAllChange}
      >
        {/* TODO: map enum value to label  */}
        {enumOptions[0].label}
      </Checkbox>
      <CheckboxGroup value={props.value} onChange={handleChange}>
        <Grid
          pl={6}
          mt={spacing}
          spacing={spacing}
          rowGap={spacing}
          columnGap="34px"
          templateColumns={`repeat(${columns.toString()}, minmax(0, max-content))`}
        >
          {enumOptions.map((option, index) => {
            if (index === 0) {
              return null;
            }

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
    </>
  );
};

export default CheckboxesWidget;
