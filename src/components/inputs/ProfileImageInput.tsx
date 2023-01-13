import React, { memo } from 'react';
import styled from '@emotion/styled';
import { InputLabel } from '@assets/styles/CommonStyles';

const ImageInputContainer = styled.div(() => ({}));
const Wrapper = styled.div(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '0.4rem 0',
}));

const ImageWrapper = styled.div(() => ({}));

const StyledImageInput = styled.input(() => ({}));

interface IImageInput {
  idName: string;
  labelName: string;
}
function ImageInput({ idName, labelName }: IImageInput) {
  return (
    <ImageInputContainer>
      <Wrapper>
        <InputLabel htmlFor={idName}>{labelName}</InputLabel>
        <ImageWrapper>
          <StyledImageInput type="file" />
        </ImageWrapper>
      </Wrapper>
    </ImageInputContainer>
  );
}

export default memo(ImageInput);
