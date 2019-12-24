import styled from 'styled-components';

const PageTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  text-transform: uppercase;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export default PageTitle;
