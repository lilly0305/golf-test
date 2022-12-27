import { Theme } from '@emotion/react';

export const image = {};

export const AppTheme: Theme = {
  color: {
    white: '#ffffff',
    black: '#111111',
  },
  image: typeof image,
};

export type ITheme = typeof AppTheme;

export default AppTheme;
