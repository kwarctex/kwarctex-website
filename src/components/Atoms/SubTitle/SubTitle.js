import styled from 'styled-components';

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mobile.m};
  color: ${({ theme, hero }) =>
    hero ? theme.color.white : theme.color.accentColor};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.tablet.m};
  }
`;

export default SubTitle;
