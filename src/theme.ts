import { Theme } from '@emotion/react';

export const image = {
  logoWhite: require('@assets/images/itda_logo_white.png'),
  defaultProfile: require('@assets/images/default-profile.png'),
};

export const AppTheme: Theme = {
  image,
  color: {
    white: '#ffffff',
    base_black: '#111827',
    point_color: '#68B984',
    sub_point_color: '#95C15B',
    red_color: '#F15757',
    placeholder_color: '#7D7D7D',
    divider_grey: '#DCDCDC',
    disabled_grey: '#EFEFEF',
    grey_opacity_60: '#F1F1F1',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 600,
    extraBold: 700,
  },
};

export type ITheme = typeof AppTheme;

export default AppTheme;
