import { extendTheme } from '@chakra-ui/react';
import { Checkbox } from './components/Checkbox';
import { Radio } from './components/Radio';

const digitaltheme = {
  //components specific overrides
  components: {
    Checkbox,
    Radio,
  },
};

export default extendTheme(digitaltheme);
