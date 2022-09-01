import { colors } from '../../colors';

const defaultStyles = {
  color: colors.text.primary,
};

const disabledStyles = {
  color: colors.divider,
};

const disabledInterminateStyles = {
  color: colors.text.primary,
};

export const icon = {
  color: colors.text.primary,
  _disabled: disabledStyles,
  _active: defaultStyles,
  _focus: defaultStyles,
  _hover: {
    color: colors.secondary.light60,
    _disabled: disabledStyles,
  },
  _indeterminate: {
    color: colors.text.primary,
    _disabled: disabledInterminateStyles,
    _active: defaultStyles,
    _focus: defaultStyles,
    _hover: {
      color: colors.secondary.light60,
      _disabled: disabledInterminateStyles,
    },
  },
};
