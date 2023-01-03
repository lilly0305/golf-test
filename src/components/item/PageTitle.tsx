import React, { memo } from 'react';

import styled from '@emotion/styled';

const StyledPageTitle = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '3rem 0',
}));

const StyledHeader = styled.h1(({ theme }) => ({
  position: 'relative',
  fontSize: '2.4rem',
  fontWeight: theme.fontWeight.extraBold,
}));

interface ILine {
  first: boolean;
}
const Line = styled.span<ILine>(({ first, theme }) => ({
  position: 'absolute',
  background: first ? theme.color.point_color : theme.color.sub_point_color,
  height: '60%',
  width: '50%',
  top: first ? '-5%' : '-30%',
  left: first ? '60%' : '80%',
  zIndex: -20,
  opacity: 0.8,
}));

interface IPageTitle {
  pageTitle: string;
}
function PageTitle({ pageTitle }: IPageTitle) {
  return (
    <StyledPageTitle>
      <StyledHeader>
        {pageTitle}
        <Line first />
        <Line first={false} />
      </StyledHeader>
    </StyledPageTitle>
  );
}

export default memo(PageTitle);
