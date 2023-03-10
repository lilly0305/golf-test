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
  use_term_policy: Yup.bool().oneOf([true], validUsetermPlaceholer),
  personal_policy: Yup.bool().oneOf([true], validPersonalPlaceholer),
  sms_policy: Yup.bool().oneOf([true], validSmsPlaceholer),
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
  new_pw: Yup.string().required(validPwPlaceholder),
  confirm_pw: Yup.string()
    .required(confirmPwPlaceholder)
    .oneOf([Yup.ref('new_pw')], validConfirmPwPlaceholder),
});

export const yupUserAccount = Yup.object().shape(
  {
    user_id: Yup.string()
      .required(userIdPlaceholder)
      .matches(/^[a-z]+[a-z0-9]{5,19}$/g, validUserIdPlaceholder),
    user_pw: Yup.string().when('user_pw', {
      is: (value: string) => value?.length,
      then: (rule) => rule.matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/g, userPwPlaceholder),
    }),
    confirm_pw: Yup.string().oneOf([Yup.ref('user_pw')], validConfirmPwPlaceholder),
    phone: Yup.string()
      .required(phonePlaceholder)
      .matches(/^[0-9]+$/, phonePlaceholder),
    use_term_policy: Yup.bool().oneOf([true], validUsetermPlaceholer),
    personal_policy: Yup.bool().oneOf([true], validPersonalPlaceholer),
    sms_policy: Yup.bool().oneOf([true], validSmsPlaceholer),
  },
  [
    // Add Cyclic deps here because when require itself
    ['user_pw', 'user_pw'],
  ],
);

export const yupUserProfile = Yup.object().shape({
  nickname: Yup.string().required(nicknamePlaceholder).max(8, validNicknamePlaceholder),
});

export const yupChangePw = Yup.object().shape({
  user_pw: Yup.string()
    .required(validPwPlaceholder)
    .matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/g, userPwPlaceholder),
  new_pw: Yup.string()
    .required(validPwPlaceholder)
    .matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/g, userPwPlaceholder),
  confirm_pw: Yup.string()
    .required(confirmPwPlaceholder)
    .oneOf([Yup.ref('user_pw')], validConfirmPwPlaceholder),
});
