import validator from '@rjsf/validator-ajv6';
import IndeterminateCheckboxList from '../checkbox-group/IndeterminateCheckboxList';

export const CheckboxGroupWidget = (props) => {
  return <IndeterminateCheckboxList options={props.value} />;
};

// "ui:widget": "CustomCheckboxGroup"
