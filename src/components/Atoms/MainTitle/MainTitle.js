import styled from 'styled-components';

const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.mobile.xl};
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.tablet.xl};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.desktop.xl};
  }
`;

export default MainTitle;
