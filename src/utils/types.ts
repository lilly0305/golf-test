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

export interface IUser {
  id: number;
  name: string;
  nickname: string;
  phone: string;
}

export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginResponse {
  status: string;
  access_token: string;
}

export interface IUserResponse {
  status: string;
  data: {
    user: IUser;
  };
}
