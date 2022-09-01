import { colors } from '../../colors';

const commonControlProperties = {
  borderRadius: '4px',
  boxSizing: 'border-box',
  borderWidth: '2px',
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
  borderColor: colors.secondary.light60,
};

const commonDisabledProperties = {
  ...commonControlProperties,
  borderColor: colors.divider,
};

const indeterminateDisabledProperties = {
  ...commonControlProperties,
  borderColor: colors.secondary.main,
};

export const control = {
  ...commonControlProperties,
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
  _indeterminate: {
    ...commonControlProperties,
    borderColor: colors.secondary.main,
    _disabled: indeterminateDisabledProperties,
    _active: commonPressedProperties,
    _focus: {
      ...commonControlProperties,
      ...commonOutlineProperties,
      borderColor: colors.secondary.main,
    },
    _hover: {
      ...commonHoveredProperties,
      _disabled: indeterminateDisabledProperties,
    },
  },
};
