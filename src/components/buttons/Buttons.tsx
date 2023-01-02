import React, { memo } from 'react';

import styled from '@emotion/styled';

const ButtonsContainer = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0 1.2rem',
  marginTop: '2rem',
}));

interface IStyledButton {
  active?: boolean;
}
const StyledButton = styled.button<IStyledButton>(({ theme, active = true }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  borderRadius: '4rem',
  height: '3.8rem',
  color: theme.color.white,
  fontWeight: theme.fontWeight.bold,
  background: active ? theme.color.point_color : theme.color.disabled_grey,
}));

interface IButtons {
  noCancelButton?: boolean;
}
function Buttons({ noCancelButton = false }: IButtons) {
  return (
    <ButtonsContainer>
      {!noCancelButton && <StyledButton active={false}>취소</StyledButton>}

      <StyledButton>로그인</StyledButton>
    </ButtonsContainer>
  );
}

export default memo(Buttons);
