export interface IPolicyCheck {
  id: number;
  name: string;
  idName: string;
  required: boolean;
}
export const policyCheck = [
  {
    id: 1,
    name: '이용약관',
    idName: 'use_term_policy',
    required: true,
  },
  {
    id: 2,
    name: '개인정보수집 및 이용동의',
    idName: 'personal_policy',
    required: true,
  },
  {
    id: 3,
    name: 'sms_policy 수신',
    idName: 'sms_policy',
    required: true,
  },
  {
    id: 4,
    name: '개인정보 마케팅 활용 동의',
    idName: 'marketing_policy',
    required: false,
  },
];
