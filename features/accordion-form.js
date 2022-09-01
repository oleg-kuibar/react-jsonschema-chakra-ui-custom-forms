import Form from '@rjsf/chakra-ui';
import { useAccordionForm } from './useAccordionForm';
import validator from '@rjsf/validator-ajv6';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Code, VStack } from '@chakra-ui/react';

export const AccordionForm = (props) => {
  const { schema, uiSchema } = useAccordionForm();
  const [defaultFormValue] = useState({
    education: ['bachelor_education'],
    gender: 'gender_male',
  });
  const [formValue, setFormValue] = useState(defaultFormValue);

  return (
    <>
      <h3>Form Data:</h3>
      <Code w="100%">{JSON.stringify(formValue)}</Code>
      <Box h="5vh" />
      <Form
        validator={validator}
        schema={schema}
        uiSchema={uiSchema}
        formData={formValue}
        onChange={({ formData }) => setFormValue(formData)}
      />
    </>
  );
};
