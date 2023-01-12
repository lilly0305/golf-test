import * as Yup from 'yup';

export const yupLogin = Yup.object().shape({
  id: Yup.string().required('아이디를 입력해주세요'),
  pw: Yup.string()
    .required('비밀번호를 입력해주세요.')
    .matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/, '영문, 숫자를 포함한 8글자 이상을 입력해주세요'),
});
