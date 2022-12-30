import { Theme } from '@emotion/react';

export const image = {};

export const AppTheme: Theme = {
  color: {
    white: '#ffffff',
    base_black: '#111827',
    point_color: '#68B984',
  },
  image: typeof image,
};

export type ITheme = typeof AppTheme;

export default AppTheme;
