import Form from '@rjsf/chakra-ui';
import { useAccordionForm } from './useAccordionForm';
import validator from '@rjsf/validator-ajv6';
import { useState } from 'react';

export const AccordionForm = (props) => {
  const { schema, uiSchema } = useAccordionForm();
  const [formState, setFormStaet] = useState({
    education: ['bachelor_education'],
    gender: 'gender_male',
  });

  console.log(formState);

  return (
    <Form
      validator={validator}
      schema={schema}
      uiSchema={uiSchema}
      formData={formState}
      onChange={console.log}
      onBlur={console.log}
    />
  );
};
