export interface ILoginForm {
  id: string;
  pw: string;
}

export interface ISignUp {
  nickname: string;
  id: string;
  pw: string;
  confirmPw: string;
  phone: string;
  useterm: boolean;
  personalInfo: boolean;
  SMS: boolean;
  marketing: boolean;
}
