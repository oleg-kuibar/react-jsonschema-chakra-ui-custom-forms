export const Button = {
  variants: {
    radioButton: {
      height: '80px',
      width: '240px',
      padding: '0px',
      justifyContent: 'start',
      borderRadius: '2px',
      color: 'text.primary',
      background: 'background.white',
      boxSizing: 'border-box',
      borderStyle: 'solid',
      borderColor: 'divider',
      borderWidth: '2px',
      _hover: {
        borderColor: 'secondary.light60',
        _disabled: {
          background: 'background.page',
          borderColor: 'divider',
        },
      },
      _disabled: {
        background: 'background.page',
      },
      _focus: {
        outline: 'none',
        boxShadow: 'focus',
      },
      _checked: {
        borderColor: 'secondary.main',
      },
    },
  },
};
