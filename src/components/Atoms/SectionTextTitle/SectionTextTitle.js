import styled from 'styled-components';

const SectionTextTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mobile.l};
  line-height: 1.5;

  ${({ theme }) => theme.mq.tablet_1} {
    font-size: ${({ theme }) => theme.fontSize.tablet.l};
    line-height: 1.2;
  }
`;

export default SectionTextTitle;
