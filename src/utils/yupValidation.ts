import * as Yup from 'yup';

export const yupLogin = Yup.object().shape({
  user_id: Yup.string().required('아이디를 입력해주세요'),
  user_pw: Yup.string()
    .required('비밀번호를 입력해주세요.')
    .matches(
      /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/g,
      '영문과 숫자로만 이루어진 8~24글자를 입력해주세요',
    ),
});

export const yupJoin = Yup.object().shape({
  // nickname: Yup.string().required('닉네임을 입력해주세요').max(6, '최대 6글자까지 입력 가능합니다'),
  // user_id: Yup.string().required('아이디를 입력해주세요'),
  // user_pw: Yup.string()
  //   .required('비밀번호를 입력해주세요.')
  //   .matches(
  //     /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/g,
  //     '영문과 숫자로만 이루어진 8~24글자를 입력해주세요',
  //   ),
  // confirm_pw: Yup.string()
  //   .required('비밀번호 확인을 입력해주세요')
  //   .oneOf([Yup.ref('user_pw')], '비밀번호와 일치하지 않습니다'),
  // useterm: Yup.bool().oneOf([true], '이용약관에 동의해주세요'),
  // personalInfo: Yup.bool().oneOf([true], '개인정보수집 및 이용동의에 동의해주세요'),
  // sms: Yup.bool().oneOf([true], 'SMS 수신에 동의해주세요'),
});
