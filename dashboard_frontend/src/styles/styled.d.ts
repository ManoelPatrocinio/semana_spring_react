// arquivo de definição de tipos globais
// sobreescreve uma definição de tipos

import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      titleColor: string;
      background: string;
      text: string;
    };
  }
}
