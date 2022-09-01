import React, { useState } from 'react';
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

  const { value: groupValue, onChange } = useCheckboxGroup();

  console.log(groupValue);

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
