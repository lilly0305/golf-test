import * as Yup from 'yup';
import {
  confirmPwPlaceholder,
  nicknamePlaceholder,
  phonePlaceholder,
  userIdPlaceholder,
  userPwPlaceholder,
  validConfirmPwPlaceholder,
  validNicknamePlaceholder,
  validPersonalPlaceholer,
  validPwPlaceholder,
  validSmsPlaceholer,
  validUserIdPlaceholder,
  validUsetermPlaceholer,
} from './placeholder';

export const yupLogin = Yup.object().shape({
  user_id: Yup.string()
    .required(userIdPlaceholder)
    .matches(/^[a-z]+[a-z0-9]{5,19}$/g, validUserIdPlaceholder),
  user_pw: Yup.string()
    .required(validPwPlaceholder)
    .matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/g, userPwPlaceholder),
});

export const yupJoin = Yup.object().shape({
  nickname: Yup.string().required(nicknamePlaceholder).max(8, validNicknamePlaceholder),
  user_id: Yup.string()
    .required(userIdPlaceholder)
    .matches(/^[a-z]+[a-z0-9]{5,19}$/g, validUserIdPlaceholder),
  user_pw: Yup.string()
    .required(validPwPlaceholder)
    .matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/g, userPwPlaceholder),
  confirm_pw: Yup.string()
    .required(confirmPwPlaceholder)
    .oneOf([Yup.ref('user_pw')], validConfirmPwPlaceholder),
  phone: Yup.string()
    .required(phonePlaceholder)
    .matches(/^[0-9]+$/, phonePlaceholder),
  useterm: Yup.bool().oneOf([true], validUsetermPlaceholer),
  personal_info: Yup.bool().oneOf([true], validPersonalPlaceholer),
  sms: Yup.bool().oneOf([true], validSmsPlaceholer),
});

export const yupFindId = Yup.object().shape({
  phone: Yup.string().required(phonePlaceholder),
});

export const yupFindPw = Yup.object().shape({
  user_id: Yup.string()
    .required(userIdPlaceholder)
    .matches(/^[a-z]+[a-z0-9]{5,19}$/g, validUserIdPlaceholder),
  phone: Yup.string().required(phonePlaceholder),
});

export const yupChangePW = Yup.object().shape({
  user_pw: Yup.string()
    .required(validPwPlaceholder)
    .matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/g, userPwPlaceholder),
  confirm_pw: Yup.string()
    .required(confirmPwPlaceholder)
    .oneOf([Yup.ref('user_pw')], validConfirmPwPlaceholder),
});
