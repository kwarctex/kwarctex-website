import styled from 'styled-components';

const SectionText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 1.5;

  ${({ theme }) => theme.mq.tablet_1} {
    font-size: ${({ theme }) => theme.fontSize.mobile.m};
  }
`;

export default SectionText;
