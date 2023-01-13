import React, { memo } from 'react';
import styled from '@emotion/styled';

import { RemixIcon } from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';

const GolfSearchContainer = styled.form(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '3rem 0',
}));

const GolfSearchIn = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  width: '40rem',
  border: `1px solid ${theme.color.divider_grey}`,
  borderRadius: '12rem',
  padding: '1rem 1.2rem 1rem 1.6rem',
}));

const StyledInput = styled.input(() => ({
  display: 'inline-block',
  flex: 1,
  height: '100%',
  background: 'transparent',
}));

const SearchButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.color.point_color,
  borderRadius: '50%',
  width: '4.2rem',
  height: '4.2rem',
}));

function GolfSearch() {
  const theme = useTheme();

  return (
    <GolfSearchContainer
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <GolfSearchIn>
        <StyledInput placeholder="찾으시는 골프장명을 입력해주세요." />
        <SearchButton type="submit">
          <RemixIcon className="ri-search-2-line" color={theme.color.white} />
        </SearchButton>
      </GolfSearchIn>
    </GolfSearchContainer>
  );
}

export default memo(GolfSearch);
