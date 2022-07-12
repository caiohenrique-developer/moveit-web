import 'styled-components';

// Globals styles
export module 'styled-components' {
  export interface DefaultTheme {
    dark?: string;
    light?: string;
    [styleProps: string]: string;
  }
}
