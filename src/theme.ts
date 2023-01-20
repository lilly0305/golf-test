import { Theme } from '@emotion/react';

export const image = {
  logoWhite: require('@assets/images/itda_logo_white.png'),
  defaultProfile: require('@assets/images/default_profile.png'),
  profileSample01: require('@assets/images/profile_sample01.png'),
  profileSample02: require('@assets/images/profile_sample02.png'),
  profileSample03: require('@assets/images/profile_sample03.png'),
  profileSample04: require('@assets/images/profile_sample04.png'),
  profileSample05: require('@assets/images/profile_sample05.png'),
  profileSample06: require('@assets/images/profile_sample06.png'),
};

export const AppTheme: Theme = {
  image,
  color: {
    white: '#ffffff',
    base_black: '#111827',
    point_color: '#68B984',
    point_color_10: '#F0F8F3',
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
