import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    transition: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      border: string;
      transparentItem: string;
    };
  }
}
