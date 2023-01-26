import React, { memo, useCallback, useState } from 'react';

import styled from '@emotion/styled';

import { CroppedFigure, CroppedImage, ErrorMessage, RemixIcon } from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';
import { mq } from '@utils/mediaquery/mediaQuery';
import {
  fileExtensionValid,
  FILE_SIZE_MAX_LIMIT,
  ONLY_IMAGE_TYPE,
} from '@utils/functions/fileRelated';
import axios from 'axios';
import { FieldErrorsImpl, UseFormSetError, UseFormSetValue } from 'react-hook-form';
import { ISignUp, IUserProfile } from '@utils/types';
import { useUser } from '@global-states/useUser';

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
  setValue: UseFormSetValue<ISignUp | IUserProfile | any>;
  setError: UseFormSetError<ISignUp | IUserProfile | any>;
  errors: Partial<FieldErrorsImpl<ISignUp | IUserProfile>> | any;
}
function ImageInput({ idName, labelName, setValue, setError, errors }: IImageInput) {
  const theme = useTheme();
  const { userData } = useUser();

  const [file, setFile] = useState<string | undefined>(userData !== null ? userData?.file_url : '');
  const [loading, setLoading] = useState(false);

  const onFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.currentTarget;
      const files = (target.files as FileList)[0];

      if (files === undefined) {
        return;
      }

      if (!fileExtensionValid(files)) {
        target.value = '';
        setError('file_url', {
          message: `업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ONLY_IMAGE_TYPE}]`,
        });

        return;
      }

      // 파일 용량 체크
      if (files.size > FILE_SIZE_MAX_LIMIT) {
        target.value = '';
        setError('file_url', { message: '업로드 가능한 최대 용량은 10MB입니다.' });

        return;
      }

      try {
        setLoading(true);
        const res = await axios.post(
          '/api/v1/file/upload',
          {
            upfile: files,
          },
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          },
        );

        if (res.status === 200) {
          setFile(res.data.fileUrl);
          setValue('file_url', res.data.fileUrl);
          setLoading(false);
        }
      } catch (error: any) {
        console.log(error);
        setLoading(false);
      }
    },
    [setError, setValue],
  );

  const images = [
    {
      id: 1,
      src: 'https:golf-dev-bucket.s3.ap-northeast-2.amazonaws.com/golf/img/profile_sample01.png',
    },
    {
      id: 2,
      src: 'https:golf-dev-bucket.s3.ap-northeast-2.amazonaws.com/golf/img/profile_sample02.png',
    },
    {
      id: 3,
      src: 'https:golf-dev-bucket.s3.ap-northeast-2.amazonaws.com/golf/img/profile_sample03.png',
    },
    {
      id: 4,
      src: 'https:golf-dev-bucket.s3.ap-northeast-2.amazonaws.com/golf/img/profile_sample04.png',
    },
    {
      id: 5,
      src: 'https:golf-dev-bucket.s3.ap-northeast-2.amazonaws.com/golf/img/profile_sample05.png',
    },
    {
      id: 6,
      src: 'https:golf-dev-bucket.s3.ap-northeast-2.amazonaws.com/golf/img/profile_sample06.png',
    },
  ];

  return (
    <ImageInputContainer>
      <Label>{labelName}</Label>
      <ErrorMessage margin="0">{errors?.file_url?.message}</ErrorMessage>
      <Wrapper>
        {file === '' ? (
          <ImageInputLabel htmlFor={idName}>
            <StyledImageInput type="file" accept="image/*" id={idName} onChange={onFileChange} />

            {loading ? (
              'Loading..'
            ) : (
              <RemixIcon className="ri-image-add-line" color={theme.color.placeholder_color} />
            )}
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
              onClick={() => {
                setFile(image.src);
                setValue('file_url', image.src);
              }}
            />
          ))}
        </ImageWrapper>
      </Wrapper>
    </ImageInputContainer>
  );
}

export default memo(ImageInput);
