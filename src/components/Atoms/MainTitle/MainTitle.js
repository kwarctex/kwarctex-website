import styled from 'styled-components';

const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

export default MainTitle;
