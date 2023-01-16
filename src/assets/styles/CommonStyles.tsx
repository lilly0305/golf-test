import React from 'react';
import styled from '@emotion/styled';
import { mq } from '@utils/mediaquery/mediaQuery';

// NOTE: 이미지 가운데 정렬 & overflow: hidden
interface ICroppedFigure {
  width: string;
  height: string;
}
export const CroppedFigure = styled.figure<ICroppedFigure>(({ width, height }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: width,
  height: height,
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
}
export const RemixIcon = styled.i<IRemixIcon>(({ fontSize = '2.4rem', color = '#fff' }) => ({
  fontSize: fontSize,
  color: color,
}));

export const ErrorMessage = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem 0',
  fontSize: '1.2rem',
  color: theme.color.red_color,
  margin: '0.4rem 0',
  height: '100%',
  minHeight: '1.4rem',
  [mq('desktop')]: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0.4rem 0 0.4rem 12rem',
  },
}));

// input styling
export const InputLabel = styled.label(() => ({
  display: 'inline-block',
  minWidth: '12rem',
}));

export const InputContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem 0',
  [mq('desktop')]: {
    flexDirection: 'row',
    alignItems: 'center',
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
  display: 'none',
}));
