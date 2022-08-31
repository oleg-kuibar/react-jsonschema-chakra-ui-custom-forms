import { Checkbox, CheckboxGroup, Grid, GridItem } from '@chakra-ui/react';
import { useIndeterminateCheckboxList } from './useIndeterminateCheckboxList';

const IndeterminateCheckboxList = ({
  allOption,
  options,
  onChange,
  defaultValue = [],
  columns = 1,
  spacing = 1,
}) => {
  const {
    checkboxGroupValue,
    isAllChecked,
    isAllIndeterminate,
    handleAllChange,
    handleCheckboxGroupChange,
  } = useIndeterminateCheckboxList(allOption, options, defaultValue, onChange);

  return (
    <>
      <Checkbox
        isChecked={isAllChecked}
        isIndeterminate={isAllIndeterminate}
        onChange={handleAllChange}
      >
        {allOption.label}
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
          {options.map((option) => {
            return (
              <GridItem key={option.value}>
                <Checkbox value={option.value}>{option.label}</Checkbox>
              </GridItem>
            );
          })}
        </Grid>
      </CheckboxGroup>
    </>
  );
};

export default IndeterminateCheckboxList;
