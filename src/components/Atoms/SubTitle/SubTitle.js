import styled from 'styled-components';

const SubTitle = styled.p`
  max-width: 63rem;
  font-size: ${({ theme, hero }) =>
    hero ? theme.fontSize.mobile.m : theme.fontSize.mobile.s};
  color: ${({ theme, hero }) =>
    hero ? theme.color.white : theme.color.accentColor};
  line-height: 1.5;
  text-align: ${({ hero }) => (hero ? 'left' : 'center')};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.tablet.m};
  }

  ${({ theme }) => theme.mq.tablet_1} {
    margin: 3rem auto 0;
  }
`;

export default SubTitle;
