import React, { useCallback } from 'react';
import styled from '@emotion/styled';

const TabContainer = styled.div(() => ({
  display: ' flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 0 4rem',
}));

interface ITabButton {
  index: number;
  currentTab: number;
  onClick: (index: number) => void;
}
const TabButton = styled.button<ITabButton>(({ theme, index, currentTab }) => ({
  flex: 1,
  display: ' flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.6rem 0',
  background: index === currentTab ? theme.color.point_color : theme.color.white,
  border: `1px solid ${theme.color.divider_grey}`,
  fontWeight: theme.fontWeight.bold,
  color: index === currentTab ? theme.color.white : theme.color.point_color,
}));

interface ITabButtons {
  tabArr: { id: number; name: string; content: React.ReactElement }[];
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}
function TabButtons({ tabArr, currentTab, setCurrentTab }: ITabButtons) {
  const selectTabHandler = useCallback(
    (index: number) => {
      setCurrentTab(index);
    },
    [setCurrentTab],
  );

  return (
    <TabContainer>
      {tabArr.map((tab) => (
        <TabButton
          key={tab.id}
          type="button"
          index={tab.id}
          currentTab={currentTab}
          onClick={() => selectTabHandler(tab.id)}
        >
          {tab.name}
        </TabButton>
      ))}
    </TabContainer>
  );
}

export default TabButtons;
