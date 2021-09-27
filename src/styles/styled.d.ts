import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    body: string;
    text: string;
    toggleBorder: string;
  }
}