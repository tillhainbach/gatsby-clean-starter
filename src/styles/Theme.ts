import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  borderRadius: '5px',

  breakpoints: {
    desktop: 992,
    tablet: 768,
    phone: 376,
  },

  transition: {
    timeout: 250,
  },

  accent: '#f90000',

  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
};

export default Theme;
