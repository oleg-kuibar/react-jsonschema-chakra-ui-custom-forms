import Form from '@rjsf/chakra-ui';
import { useAccordionForm } from './useAccordionForm';
import validator from '@rjsf/validator-ajv6';
import { useState } from 'react';

export const AccordionForm = (
  props = {
    accordionForm: {},
  }
) => {
  const { schema, uiSchema } = useAccordionForm();
  const [formState, setFormStaet] = useState(props.accordionForm);

  return <Form validator={validator} schema={schema} uiSchema={uiSchema} />;
};
