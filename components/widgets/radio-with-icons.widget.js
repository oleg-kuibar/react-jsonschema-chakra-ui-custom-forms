import { HStack, RadioGroup } from '@chakra-ui/react';
import React from 'react';
import { DefaultAllGender, SelectedAllGender } from '../icons.40';
import RadioButton from '../RadioButton';

export const RadioWithIcons = (props) => {
  return (
    <RadioGroup value={props.value} onChange={props.onChange}>
      {props.options.enumOptions.map((element, index) => {
        const icon = React.createElement(props.options.icons[index]);
        const selectedIcon = React.createElement(
          props.options.selectedIcons[index]
        );

        return (
          <HStack spacing="40px">
            <RadioButton
              key={`${index}_${element.value}`}
              title={element.label}
              value={element.value}
              icon={icon}
              selectedIcon={selectedIcon}
            />
            {/* <RadioButton
          title={availableAttributes.items[1].label}
          value={availableAttributes.items[1].value}
          icon={<DefaultMale />}
          selectedIcon={<SelectedMale />}
        />
        <RadioButton
          title={availableAttributes.items[2].label}
          value={availableAttributes.items[2].value}
          icon={<DefaultFemale />}
          selectedIcon={<SelectedFemale />}
        /> */}
          </HStack>
        );
      })}
    </RadioGroup>
  );
};
