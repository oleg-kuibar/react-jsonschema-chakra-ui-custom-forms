import { HStack, RadioGroup } from '@chakra-ui/react';
import React from 'react';
import { DefaultAllGender, SelectedAllGender } from '../icons.40';
import RadioButton from '../RadioButton';

export const RadioWithIcons = (props) => {
  return (
    <HStack spacing="40px">
      <RadioGroup value={props.value} onChange={props.onChange}>
        {props.options.enumOptions.map((element, index) => {
          const icon = React.createElement(props.options.icons[index]);
          const selectedIcon = React.createElement(
            props.options.selectedIcons[index]
          );

          return (
            <RadioButton
              key={`${index}_${element.value}`}
              title={element.label}
              value={element.value}
              icon={icon}
              selectedIcon={selectedIcon}
            />
          );
        })}
      </RadioGroup>
    </HStack>
  );
};
