import styled from 'styled-components';

const SectionTextTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.5;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  ${({ theme }) => theme.mq.tablet_1} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 1.2;
  }
`;

export default SectionTextTitle;
