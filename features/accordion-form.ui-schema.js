import CheckboxesWidget from '../components/widgets/checkboxes.widget';
import { RadioWithIcons } from '../components/widgets/radio-with-icons.widget';
import { AccordionTemplate } from '../components/templates/accordion.template';
import {
  DefaultAllGender,
  DefaultFemale,
  DefaultMale,
  SelectedAllGender,
  SelectedFemale,
  SelectedMale,
} from '../components/icons.40';

export const uiSchema = {
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
      icons: [DefaultAllGender, DefaultMale, DefaultFemale],
      selectedIcons: [SelectedAllGender, SelectedMale, SelectedFemale],
    },
  },
  'ui:submitButtonOptions': {
    norender: true,
  },
  'ui:ObjectFieldTemplate': AccordionTemplate,
};
