import '@emotion/react';

import { image } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      white: string;
      black: string;
      yellow: string;
      black_two: string;
      gray_three: string;
      gray_one: string;
      gray_two: string;
      gray_four: string;
      gray_five: string;
      light_gary: string;
      light_green: string;
      orange_red: string;
      secondary: string;
      primary: string;
      divider: string;
      inActive: string;
      modal_background: string;
    };
    image: typeof image;
  }
}
