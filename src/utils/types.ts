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
