import '@emotion/react';

import { image } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      white: string;
      base_black: string;
      point_color: string;
    };
    image: typeof image;
  }
}
