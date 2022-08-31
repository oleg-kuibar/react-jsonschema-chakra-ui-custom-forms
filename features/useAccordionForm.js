import CheckboxesWidget from '../components/form-widgets/checkboxes.widget';
import { AccordionTemplate } from '../components/templates/accordion.template';
import schema from '../documents/accordion.schema.json';

const uiSchema = {
  education: {
    'ui:widget': CheckboxesWidget,
    title: 'Education',
  },
  gender: {
    'ui:widget': CheckboxesWidget,
    title: 'Gender',
  },
  'ui:submitButtonOptions': {
    norender: true,
  },
  'ui:ObjectFieldTemplate': AccordionTemplate,
};

export const useAccordionForm = () => {
  return {
    schema: schema[0],
    uiSchema,
  };
};
