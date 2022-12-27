import { Theme } from '@emotion/react';

export const image = {};

export const theme: Theme = {
  color: {
    white: '#ffffff',
    black: '#111111',
    yellow: '#FFE812',
    black_two: '#1C1C1C',
    gray_three: '#BDBDBD',
    gray_one: '#E0E0E0',
    gray_two: '#CFCFCF',
    gray_four: '#757575',
    gray_five: '#424242',
    light_gary: '#F4F4F4',
    light_green: '#00DA84',
    orange_red: '#FF4808',
    secondary: '#00B585',
    primary: '#3EFFB3',
    divider: '#F9FAFA',
    inActive: '#D9D9D9',
    modal_background: 'rgba(0, 0, 0, 0.5)',
  },
};

export type ITheme = typeof theme;

export default theme;