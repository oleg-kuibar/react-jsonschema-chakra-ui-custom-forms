import { colors } from '../../colors';
import { typography } from '../../typography';

export const label = {
  ...typography.styles.body2.roman,
  color: colors.text.primary,
  _checked: {
    ...typography.styles.h4,
    // There is a bug in Chakra that unchecked label has a size 16px
    // Checked label should have the same size
    fontSize: typography.fontSizes.md,
    color: colors.text.primary,
  },
};
