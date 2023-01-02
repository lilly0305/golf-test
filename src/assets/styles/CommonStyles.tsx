import styled from '@emotion/styled';

interface ICroppedFigure {
  width: string;
  height: string;
}
export const CroppedFigure = styled.figure<ICroppedFigure>(() => ({
  position: 'relative',
  overflow: 'hidden',
  width: '73px',
  height: '42px',
}));
