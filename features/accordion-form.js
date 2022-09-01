import Form from '@rjsf/chakra-ui';
import { useAccordionForm } from './useAccordionForm';
import validator from '@rjsf/validator-ajv6';
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { syntaxHighlight } from '../utils/SyntaxHighlight';

export const AccordionForm = () => {
  const { schema, uiSchema } = useAccordionForm();
  const [defaultFormValue] = useState({
    education: ['bachelor_education'],
    gender: 'gender_male',
  });
  const [formValue, setFormValue] = useState(defaultFormValue);

  return (
    <>
      <Box mb="5vh" bg="gray.700" color="white">
        <Text bg="gray.900" p={2}>
          Form Data:
        </Text>
        <pre
          dangerouslySetInnerHTML={{
            __html: syntaxHighlight(JSON.stringify(formValue, undefined, 3)),
          }}
        ></pre>
      </Box>
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
