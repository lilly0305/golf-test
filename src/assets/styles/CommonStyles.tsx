import React from 'react';
import styled from '@emotion/styled';
import { mq } from '@utils/mediaquery/mediaQuery';

// NOTE: 이미지 가운데 정렬 & overflow: hidden
interface ICroppedFigure {
  width: string;
  height: string;
  radius?: string;
}
export const CroppedFigure = styled.figure<ICroppedFigure>(({ width, height, radius }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: width,
  height: height,
  borderRadius: radius,
}));

export const CroppedImage = styled.img(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  inset: 0,
  objectFit: 'cover',
}));

// NOTE: remix icon
interface IRemixIcon {
  fontSize?: string;
  color?: string;
  active?: boolean;
}
export const RemixIcon = styled.i<IRemixIcon>(
  ({ fontSize = '2.4rem', color = '#fff', active }) => ({
    fontSize: fontSize,
    color: color,
    transition: 'all 0.3s',
    transform: active ? 'rotate(90deg)' : 'rotate(0deg)',
  }),
);

export const ErrorMessage = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem 0',
  fontSize: '1.2rem',
  color: theme.color.red_color,
  margin: '0.2rem 0 0',
  height: '100%',
  minHeight: '1.8rem',
  [mq('desktop')]: {
    margin: '0.2rem 0 0 12rem',
  },
}));

// input styling
export const InputLabel = styled.label(() => ({
  display: 'inline-block',
  minWidth: '12rem',
  [mq('desktop')]: {
    height: '3.6rem',
    lineHeight: '3.6rem',
  },
}));

export const InputContainer = styled.div(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  left: '-1.3rem',
  [mq('desktop')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem 0',
  },
}));

export const CheckInputLabel = styled.label(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
}));

interface IStyledInput {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export const StyledInput = styled.input<IStyledInput>(() => ({
  opacity: 0,
}));
