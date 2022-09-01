import { control, icon, label } from '../styles/chakra/checkbox';

export const Checkbox = {
  baseStyle: {
    control: control,
    icon: icon,
    label: label,
  },
  sizes: {
    sm: {
      control: {
        height: '16px',
        width: '16px',
        borderWidth: '1px',
      },
    },
    md: {
      control: {
        height: '20px',
        width: '20px',
        borderWidth: '2px',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
};
