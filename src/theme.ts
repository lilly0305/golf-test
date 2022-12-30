import { Theme } from '@emotion/react';

export const image = {};

export const AppTheme: Theme = {
  color: {
    white: '#ffffff',
    base_black: '#111827',
    point_color: '#68B984',
    sub_point_color: '#95C15B',
    red_color: '#F15757',
    placeholder_color: '#7D7D7D',
    divider_grey: '#DCDCDC',
    disabled_grey: '#EFEFEF',
  },
  image: typeof image,
};

export type ITheme = typeof AppTheme;

export default AppTheme;
