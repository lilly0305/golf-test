export interface ILoginForm {
  user_id: string;
  user_pw: string;
}

export interface ISignUp {
  nickname: string;
  user_id: string;
  user_pw: string;
  confirm_pw: string;
  phone: string;
  useterm: boolean;
  personal_info: boolean;
  sms: boolean;
  marketing: boolean;
}

export interface IFindId {
  phone: string;
}

export interface IFindPw {
  user_id: string;
  phone: string;
}

export interface IUserAccount {
  user_id: string;
  phone: string;
  useterm: boolean;
  personal_info: boolean;
  sms: boolean;
  marketing: boolean;
}

export interface IUserProfile {
  nickname: string;
  pro_type: string;
}

export interface IChangePw {
  user_pw: string;
  new_pw: string;
  confirm_pw: string;
}

export interface IUser {
  id: number;
  name: string;
  nickname: string;
  phone: string;
}
