import { control } from '../styles/chakra/radio/control';
import { label } from '../styles/chakra/radio/label';

export const Radio = {
  baseStyle: {
    control: control,
    label: label,
  },
  sizes: {
    md: {
      control: {
        height: '20px',
        width: '20px',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
};
