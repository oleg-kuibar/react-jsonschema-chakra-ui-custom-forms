import CheckboxesWidget from '../components/widgets/checkboxes.widget';
import { RadioWithIcons } from '../components/widgets/radio-with-icons.widget';
import { AccordionTemplate } from '../components/templates/accordion.template';
import schema from '../documents/accordion.schema.json';

const uiSchema = {
  education: {
    'ui:widget': CheckboxesWidget,
    'ui:options': {
      title: 'Education',
      allOption: 'all',
      spacing: 1,
      columns: 1,
    },
  },
  gender: {
    'ui:widget': RadioWithIcons,
    'ui:options': {
      title: 'Gender',
    },
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
