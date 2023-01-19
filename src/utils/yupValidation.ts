import * as Yup from 'yup';
import {
  codePlaceholder,
  confirmPwPlaceholder,
  nicknamePlaceholder,
  phonePlaceholder,
  userIdPlaceholder,
  userPwPlaceholder,
  validPersonalPlaceholer,
  validPwPlaceholder,
  validSmsPlaceholer,
  validUsetermPlaceholer,
} from './placeholder';

export const yupLogin = Yup.object().shape({
  user_id: Yup.string().required(userIdPlaceholder),
  user_pw: Yup.string()
    .required(validPwPlaceholder)
    .matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/g, userPwPlaceholder),
});

export const yupJoin = Yup.object().shape({
  nickname: Yup.string().required(nicknamePlaceholder).max(8, '최대 8글자까지 입력 가능합니다'),
  user_id: Yup.string().required(userIdPlaceholder),
  user_pw: Yup.string()
    .required(validPwPlaceholder)
    .matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/g, userPwPlaceholder),
  confirm_pw: Yup.string()
    .required(confirmPwPlaceholder)
    .oneOf([Yup.ref('user_pw')], '비밀번호와 일치하지 않습니다'),
  phone: Yup.string().required(phonePlaceholder),
  useterm: Yup.bool().oneOf([true], validUsetermPlaceholer),
  personal_info: Yup.bool().oneOf([true], validPersonalPlaceholer),
  sms: Yup.bool().oneOf([true], validSmsPlaceholer),
});

export const yupFindId = Yup.object().shape({
  phone: Yup.string().required(phonePlaceholder),
  code: Yup.number().required(codePlaceholder).min(6).max(6),
});

export const yupFindPw = Yup.object().shape({
  user_id: Yup.string().required(userIdPlaceholder),
  phone: Yup.string().required(phonePlaceholder),
  code: Yup.number().required(codePlaceholder).min(6).max(6),
});
