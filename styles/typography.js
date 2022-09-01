const fontWeights = {
  roman: 400,
  light: 400,
  regular: 400,
  bold: 700,
  black: 800,
  heavy: 900,
};

const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '24px',
  xl2: '30px',
};

const lineHeights = {
  xs: '16px',
  sm: '18px',
  md: '20px',
  lg: '24px',
  xl: '32px',
  xl2: '40px',
};

const fontFamilies = {
  montserrat: 'Montserrat',
};

const commonTextStyleProperties = {
  fontStyle: 'normal',
  fontFamily: fontFamilies.montserrat,
};

const textStyles = {
  h1: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    letterSpacing: '0.3px',
  },
  stepperHBold: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
  },
  stepperHRegular: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
  },
  headerHBold: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
  },
  headerHRegular: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
  },
  number1: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.black,
    fontSize: fontSizes.xl2,
    lineHeight: lineHeights.xl2,
  },
  h2: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.heavy,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
  },
  h3: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.heavy,
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
  },
  h4: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.heavy,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
  },
  body1: {
    light: {
      ...commonTextStyleProperties,
      fontWeight: fontWeights.light,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
    },
    roman: {
      ...commonTextStyleProperties,
      fontWeight: fontWeights.roman,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
    },
  },
  body2: {
    light: {
      ...commonTextStyleProperties,
      fontWeight: fontWeights.light,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.sm,
    },
    roman: {
      ...commonTextStyleProperties,
      fontWeight: fontWeights.roman,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.sm,
    },
  },
  caption: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.roman,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
  },
  overline: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.heavy,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  crossedOut: {
    ...commonTextStyleProperties,
    fontWeight: fontWeights.roman,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    textDecorationLine: 'line-through',
  },
};

export const typography = {
  fontWeights,
  fontSizes,
  lineHeights,
  fontFamilies,
  styles: textStyles,
};
