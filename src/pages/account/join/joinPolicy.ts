export interface IPolicyCheck {
  id: number;
  name: string;
  idName: string;
  required: boolean;
  checked: boolean;
}
export const policyCheck = [
  {
    id: 1,
    name: '이용약관',
    idName: 'useterm',
    required: true,
    checked: false,
  },
  {
    id: 2,
    name: '개인정보수집 및 이용동의',
    idName: 'personal_info',
    required: true,
    checked: false,
  },
  {
    id: 3,
    name: 'SMS 수신',
    idName: 'sms',
    required: true,
    checked: false,
  },
  {
    id: 4,
    name: '개인정보 마케팅 활용 동의',
    idName: 'marketing',
    required: false,
    checked: false,
  },
];
