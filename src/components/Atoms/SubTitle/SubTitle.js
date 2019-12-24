import styled from 'styled-components';

const SubTitle = styled.p`
  width: 100%;
  margin: 2rem auto 0;
  font-size: ${({ theme, hero }) =>
    hero ? theme.fontSize.xs : theme.fontSize.xxs};
  color: ${({ theme, hero }) =>
    hero ? theme.color.white : theme.color.accentColor};
  line-height: 1.5;
  text-align: ${({ hero }) => (hero ? 'left' : 'center')};

  ${({ theme }) => theme.mq.tablet} {
    width: 45rem;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  ${({ theme }) => theme.mq.tablet_1} {
    margin: 1rem auto 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 63rem;
  }
`;

export default SubTitle;
