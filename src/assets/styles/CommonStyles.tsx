import styled from '@emotion/styled';

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
