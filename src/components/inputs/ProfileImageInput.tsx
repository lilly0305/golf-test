import React, { memo, useCallback, useState } from 'react';

import styled from '@emotion/styled';

import { CroppedFigure, CroppedImage, RemixIcon } from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';
import { mq } from '@utils/mediaquery/mediaQuery';
import {
  fileExtensionValid,
  FILE_SIZE_MAX_LIMIT,
  ONLY_IMAGE_TYPE,
} from '@utils/functions/fileRelated';

const ImageInputContainer = styled.div(() => ({
  marginBottom: '1.4rem',
}));

const Label = styled.p(() => ({
  marginBottom: '1rem',
}));

const Wrapper = styled.div(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '0.4rem 1rem',
  [mq('desktop')]: {
    flexDirection: 'row',
  },
}));

const ImageInputLabel = styled.label(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${theme.color.disabled_grey}`,
  minWidth: '30rem',
  aspectRatio: '1 / 1',
  cursor: 'pointer',
}));

const StyledImageInput = styled.input(() => ({
  display: 'none',
}));

const ImageWrapper = styled.div(() => ({
  flex: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '0.2rem',
}));

interface IProfileImages {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const ProfileImages = styled.img<IProfileImages>(() => ({
  width: '100%',
  cursor: 'pointer',
}));

const ImagePreview = styled.div(({ theme }) => ({
  position: 'relative',
  minWidth: '30rem',
  aspectRatio: '1 / 1',
  border: `1px solid ${theme.color.disabled_grey}`,
}));

interface IDeleteImageButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const DeleteImageButton = styled.i<IDeleteImageButton>(({ theme }) => ({
  position: 'absolute',
  zIndex: 30,
  fontSize: '2.4rem',
  color: theme.color.placeholder_color,
  top: '0.5rem',
  right: '0.5rem',
  cursor: 'pointer',
}));

interface IImageInput {
  idName: string;
  labelName: string;
}
function ImageInput({ idName, labelName }: IImageInput) {
  const theme = useTheme();
  const [file, setFile] = useState<string>('');

  const onFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];

    if (files === undefined) {
      return;
    }

    if (!fileExtensionValid(files)) {
      target.value = '';
      console.log(`업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ONLY_IMAGE_TYPE}]`);
      return;
    }

    // 파일 용량 체크
    if (files.size > FILE_SIZE_MAX_LIMIT) {
      target.value = '';
      console.log('업로드 가능한 최대 용량은 5MB입니다. ');
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.onload = (event) => {
      const result = event?.target?.result as string;
      setFile(result);
    };
  }, []);

  const images = [
    {
      id: 1,
      src: theme.image.profileSample01,
    },
    {
      id: 2,
      src: theme.image.profileSample02,
    },
    {
      id: 3,
      src: theme.image.profileSample03,
    },
    {
      id: 4,
      src: theme.image.profileSample04,
    },
    {
      id: 5,
      src: theme.image.profileSample05,
    },
    {
      id: 6,
      src: theme.image.profileSample06,
    },
  ];

  return (
    <ImageInputContainer>
      <Label>{labelName}</Label>
      <Wrapper>
        {file === '' ? (
          <ImageInputLabel htmlFor={idName}>
            <StyledImageInput type="file" id={idName} onChange={onFileChange} />

            <RemixIcon className="ri-image-add-line" color={theme.color.placeholder_color} />
          </ImageInputLabel>
        ) : (
          <ImagePreview>
            <DeleteImageButton className="ri-close-circle-line" onClick={() => setFile('')} />

            <CroppedFigure width="100%" height="100%">
              <CroppedImage src={file} alt="선택한 프로필" />
            </CroppedFigure>
          </ImagePreview>
        )}

        <ImageWrapper>
          {images.map((image) => (
            <ProfileImages
              key={image.id}
              src={image.src}
              alt={`프로필 샘플 ${image.id}`}
              onClick={() => setFile(image.src)}
            />
          ))}
        </ImageWrapper>
      </Wrapper>
    </ImageInputContainer>
  );
}

export default memo(ImageInput);
