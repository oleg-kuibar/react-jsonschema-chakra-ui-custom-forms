import { colors } from '../../colors';

const commonControlProperties = {
  borderRadius: '56px',
  boxSizing: 'border-box',
  borderStyle: 'solid',
  background: colors.background.transparent,
};

const commonOutlineProperties = {
  outline: '2px solid',
  outlineColor: colors.secondary.main,
  outlineOffset: '2px',
  boxShadow: 'none',
};

const commonPressedProperties = {
  ...commonControlProperties,
  borderColor: colors.secondary.main,
};

const commonHoveredProperties = {
  ...commonControlProperties,
  color: colors.secondary.light60,
  borderColor: colors.secondary.light60,
};

const commonDisabledProperties = {
  ...commonControlProperties,
  borderColor: colors.divider,
};

export const control = {
  ...commonControlProperties,
  borderWidth: '2px',
  borderColor: colors.background.dark,
  _disabled: commonDisabledProperties,
  _active: commonPressedProperties,
  _focus: {
    ...commonControlProperties,
    ...commonOutlineProperties,
    borderColor: colors.background.dark,
  },
  _hover: {
    ...commonHoveredProperties,
    _disabled: commonDisabledProperties,
  },
  _checked: {
    ...commonControlProperties,
    borderColor: colors.secondary.main,
    color: colors.text.primary,
    _disabled: commonDisabledProperties,
    _active: commonPressedProperties,
    _focus: {
      ...commonControlProperties,
      ...commonOutlineProperties,
      borderColor: colors.secondary.main,
    },
    _hover: {
      ...commonHoveredProperties,
      _disabled: commonDisabledProperties,
    },
  },
};
