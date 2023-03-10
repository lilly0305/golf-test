import '@emotion/react';

import { image } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

declare module '@emotion/react' {
  export interface Theme {
    image: typeof image;
    color: {
      white: string;
      base_black: string;
      point_color: string;
      point_color_10: string;
      sub_point_color: string;
      red_color: string;
      placeholder_color: string;
      divider_grey: string;
      disabled_grey: string;
      grey_opacity_60: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      bold: number;
      extraBold: number;
    };
  }
}
