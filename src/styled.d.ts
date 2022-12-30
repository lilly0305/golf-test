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
      sub_point_color: string;
      red_color: string;
      placeholder_color: string;
      divider_grey: string;
      disabled_grey: string;
    };
    image: typeof image;
  }
}
