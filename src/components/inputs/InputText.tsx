import React from 'react';
import styled from '@emotion/styled';
import { mq } from '@utils/mediaquery/mediaQuery';
import { InputLabel } from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';

const InputGroupContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '3.6rem',
  marginBottom: '1.4rem',
}));

const Wrapper = styled.div(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '0.4rem 0',
  [mq('desktop')]: {
    flexDirection: 'row',
  },
}));

const Contents = styled.div(({ theme }) => ({
  height: '3.6rem',
  lineHeight: '3.6rem',
  fontWeight: theme.fontWeight.bold,
}));

interface IInputText {
  labelName: string;
  required?: boolean;
  contents: string | React.ReactNode;
}
function InputText({ labelName, required, contents }: IInputText) {
  const theme = useTheme();

  return (
    <InputGroupContainer>
      <Wrapper>
        <InputLabel>
          {labelName}
          <span style={{ color: theme.color.red_color, marginLeft: '0.2rem' }}>
            {required ? '*' : null}
          </span>
        </InputLabel>

        <Contents>{contents}</Contents>
      </Wrapper>
    </InputGroupContainer>
  );
}

export default InputText;
