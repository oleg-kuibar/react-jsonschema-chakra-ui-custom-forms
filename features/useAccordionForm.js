import CheckboxesWidget from '../components/form-widgets/checkboxes.widget';
import { AccordionTemplate } from '../components/templates/accordion.template';

const schema = {
  type: 'object',
  properties: {
    education: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'less_than_high_school_education',
          'high_school_education',
          'college_education',
          'bachelor_education',
          'graduate_education',
        ],
        enumNames: [
          'Less Than High School Diploma',
          'High School Diploma',
          'Some College',
          'Bachelor Degree',
          'Graduate Degree',
        ],
      },
      uniqueItems: true,
    },
    gender: {
      type: 'array',
      items: {
        enum: ['gender_male', 'gender_female', 'gender_both'],
        enumNames: ['Male', 'Female', 'Both'],
      },
      uniqueItems: true,
    },
  },
};

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
    schema,
    uiSchema,
  };
};
