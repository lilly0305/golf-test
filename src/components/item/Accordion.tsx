import React, { memo, useCallback, useRef, useState } from 'react';
import { RemixIcon } from '@assets/styles/CommonStyles';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const AccordionWrapper = styled.div(() => ({}));

const AccordionTitle = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  background: theme.color.white,
  cursor: 'pointer',
  border: `1px solid ${theme.color.divider_grey}`,
}));

const StyledIndex = styled.span(({ theme }) => ({
  marginRight: '0.8rem',
  color: theme.color.point_color,
  fontWeight: theme.fontWeight.bold,
}));

const AccordionContent = styled.div(({ theme }) => ({
  background: theme.color.point_color_10,
  overflow: 'hidden',
  transition: 'max-height 0.3s ease',
  fontSize: '1.4rem',
}));

const AccordionContentIn = styled.div(() => ({
  padding: '1rem 2rem',
}));

interface IFaq {
  id: number;
  question: string;
  answer: string;
  index: string;
}

interface IAccordion {
  faq: IFaq;
}
function Accordion({ faq }: IAccordion) {
  const content = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState(false);

  const toggleAccordion = useCallback(() => {
    setActive((prev) => !prev);

    if (content.current) {
      setHeight(active ? '0px' : `${content.current.scrollHeight}px`);
    }

    setRotate(!active);
  }, [active]);

  return (
    <AccordionWrapper>
      <AccordionTitle onClick={toggleAccordion}>
        <div>
          <StyledIndex>{`Q${faq?.index}`}</StyledIndex>
          {faq?.question}
        </div>
        <RemixIcon
          className="ri-arrow-right-s-line"
          color={theme.color.placeholder_color}
          active={rotate}
        />
      </AccordionTitle>

      <AccordionContent ref={content} style={{ maxHeight: `${height}` }}>
        <AccordionContentIn>{faq?.answer}</AccordionContentIn>
      </AccordionContent>
    </AccordionWrapper>
  );
}

export default memo(Accordion);
