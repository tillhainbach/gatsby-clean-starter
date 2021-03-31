// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    breakpoints: {
      desktop: Int16;
      tablet: Int16;
      phone: Int16;
    };

    transition: {
      timeout: Int16;
    };

    accent: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
