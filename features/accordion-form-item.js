import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import Form from '@rjsf/chakra-ui';
import validator from '@rjsf/validator-ajv6';
import { useCallback } from 'react';

// HOC
export const AccordionFormItem = ({
  schema,
  uiSchema,
  widgets,
  templates,
  onChange,
}) => {
  const handleChange = useCallback(
    ({ formData }) => console.log(formData),
    onChange
  );

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {schema.title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          onChange={handleChange}
          validator={validator}
          templates={templates}
          widgets={widgets}
        />
      </AccordionPanel>
    </AccordionItem>
  );
};
