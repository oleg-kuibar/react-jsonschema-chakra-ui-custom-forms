import schema from '../documents/accordion.schema.json';
import { uiSchema } from './accordion-form.ui-schema';

export const useAccordionForm = () => {
  return {
    schema: schema[0],
    uiSchema: uiSchema,
  };
};
