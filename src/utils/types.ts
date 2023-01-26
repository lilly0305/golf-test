// NOTE: 로그인
export interface ILoginForm {
  user_id: string;
  user_pw: string;
}
export interface INicknameCheck {
  nickname: string;
}

export interface IUserIdCheck {
  user_id: string;
}

// NOTE: 회원가입
export interface ISignUp {
  gender: string;
  user_name: string;
  nickname: string;
  user_id: string;
  user_pw: string;
  confirm_pw: string;
  phone: string;
  use_term_policy: boolean;
  personal_policy: boolean;
  sms_policy: boolean;
  marketing_policy: boolean;
  file_url: string;
}

// NOTE: 아이디 찾기
export interface IFindId {
  phone: string;
}

// NOTE: 비밀번호 찾기
export interface IFindPw {
  user_id: string;
  phone: string;
}

// NOTE: 회원 정보 수정
export interface IUserAccount {
  user_id: string;
  nickname: string;
  phone: string;
  use_term_policy: boolean;
  personal_policy: boolean;
  sms_policy: boolean;
  marketing_policy: boolean;
}

// NOTE: 프로필 수정
export interface IUserProfile {
  nickname: string;
  pro_yn: boolean;
  pro_type: string;
  avg_score: string;
  career: string;
  introduce: string;
  file_url: string;
}

// NOTE: 비밀번호 찾기
export interface IChangePw {
  user_pw: string;
  new_pw: string;
  confirm_pw: string;
}

// NOTE: 유저 정보
export interface IUser {
  id: number;
  name: string;
  nickname: string;
  phone: string;
}
