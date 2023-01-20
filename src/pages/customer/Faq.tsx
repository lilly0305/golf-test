import React, { memo } from 'react';
import { Accordion } from '@components/item';

function Faq() {
  const faqList = [
    {
      id: 1,
      index: '01',
      question: '양수 양도는 어떻게 이뤄지나요',
      answer:
        '양수는 이렇게 이뤄지고 양도는 이렇게 이뤄집니다. 자세한 설명은 서비스 이용 안내를 참고해주세요.',
    },
    {
      id: 2,
      index: '02',
      question: '팀 찾기와 멤버 찾기의 차이점이 뭔가요',
      answer: '양수는 이렇게 이뤄지고 양도는 이렇게 이뤄집니다.',
    },
  ];

  return (
    <div>
      {faqList.map((faq) => (
        <Accordion key={faq.id} faq={faq} />
      ))}
    </div>
  );
}

export default memo(Faq);
