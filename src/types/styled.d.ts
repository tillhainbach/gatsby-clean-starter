// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    breakpoints: {
      [desktop: string]: number;
      [tablet: string]: number;
      [phone: string]: number;
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
