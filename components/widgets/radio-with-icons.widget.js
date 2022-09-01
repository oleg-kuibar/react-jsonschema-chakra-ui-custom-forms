import { HStack, RadioGroup } from '@chakra-ui/react';
import { DefaultAllGender, SelectedAllGender } from '../icons.40';
import RadioButton from '../RadioButton';

export const RadioWithIcons = (props) => {
  return (
    <RadioGroup value={props.value} onChange={props.onChange}>
      <HStack spacing="40px">
        <RadioButton
          title={props.uiSchema['ui:options'].title}
          value={props.uiSchema['ui:options'].title}
          icon={<DefaultAllGender />}
          selectedIcon={<SelectedAllGender />}
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
    </RadioGroup>
  );
};
