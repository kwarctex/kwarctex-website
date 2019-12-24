import styled from 'styled-components';

const SectionText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 1.5;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export default SectionText;
