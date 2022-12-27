import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

interface IContainer {
  isActive: boolean;
}
const Container = styled.div<IContainer>(({ theme, isActive }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: isActive ? theme.color.light_gary : theme.color.black,
}));

const StyledButton = styled.button({
  padding: 20,
});

function Button() {
  const theme = useTheme();

  const [isActive, setIsActive] = useState(false);

  const onClick = useCallback(() => setIsActive((prev) => !prev), []);

  return (
    <Container isActive={isActive} color={theme.color.black_two}>
      <StyledButton onClick={onClick} />
    </Container>
  );
}

export default Button;
