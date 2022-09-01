import { extendTheme } from '@chakra-ui/react';
import { Checkbox } from './components/Checkbox';
import { Radio } from './components/Radio';
import { Button } from './components/Button';

const digitaltheme = {
  //components specific overrides
  components: {
    Checkbox,
    Radio,
    Button,
  },
};

export default extendTheme(digitaltheme);
