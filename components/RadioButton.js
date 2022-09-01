import {
  Button,
  Radio,
  Text,
  Box,
  useRadioGroupContext,
} from '@chakra-ui/react';

const RadioButton = (props) => {
  const { title, icon, selectedIcon, value, isDisabled } = props;

  const group = useRadioGroupContext();
  const isChecked = value == group.value;
  const buttonProps = isChecked ? { 'data-checked': true } : {};
  const iconToRender = isChecked ? selectedIcon : icon;

  const handleOnClick = () => group.onChange(value);

  return (
    <Button
      {...buttonProps}
      variant="radioButton"
      onClick={handleOnClick}
      isDisabled={isDisabled}
    >
      <Box marginLeft="24px">{iconToRender}</Box>
      <Text textStyle="h4" marginLeft="24px">
        {title}
      </Text>
      <Radio
        alignSelf="self-start"
        marginLeft="auto"
        marginRight="10px"
        marginTop="10px"
        value={value}
        isDisabled={isDisabled}
        isFocusable={false}
      />
    </Button>
  );
};

export default RadioButton;
