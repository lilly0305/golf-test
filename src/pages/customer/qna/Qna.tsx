import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { SingleCheckInput } from '@components/inputs';

const Container = styled.div(() => ({}));

const ButtonWrapper = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  borderRadius: '3rem',
  background: theme.color.point_color,
  color: theme.color.white,
  fontWeight: theme.fontWeight.bold,
  padding: '0.4rem 1.2rem',
}));

function Qna() {
  const [checkArr, setCheckArr] = useState<string[]>([]);

  return (
    <Container>
      <ButtonWrapper>
        <SingleCheckInput
          idName="my_qna"
          labelName="내가 쓴 문의글 보기"
          setCheckArr={setCheckArr}
          checkArr={checkArr}
        />
        <StyledLink to="/qna-write">문의하기</StyledLink>
      </ButtonWrapper>
    </Container>
  );
}

export default memo(Qna);
