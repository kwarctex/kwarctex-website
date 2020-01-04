import React from 'react';
import styled from 'styled-components';
import SubTitle from 'components/Atoms/SubTitle/SubTitle';

const FooterItems = [
  {
    title: 'Adres:',
    item1: 'Przemysłowa 4',
    item2: '05-100 Nowy Dwór Mazowiecki',
  },
  {
    title: 'Dane firmowe:',
    item1: 'NIP: 5311706905',
    item2: 'KRS: 0000809083',
  },
  {
    title: 'Kontakt:',
    item1: '+48 888 717 777',
    item2: 'biuro.kwarctex@gmail.com',
  },
];

const StyledFooter = styled.footer`
  padding: 3rem;
  background: ${({ theme }) =>
    theme.color.midBlack}; /* fallback for old browsers */
  background: linear-gradient(
    to right,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
`;

const Content = styled.div`
  max-width: 80rem;
  margin: auto;

  ${({ theme }) => theme.mq.desktop} {
    margin: 10rem auto;
  }
`;

const StyledListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledListItem = styled.li`
  margin-top: 3rem;
`;

const StyledListItemTitle = styled.h4`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.darkGrey};
`;

const StyledListItemText = styled.p`
  line-height: 1.4;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.desktop} {
    line-height: 1.6;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const StyledSubTitle = styled(SubTitle)`
  margin: auto;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-align: left;
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.desktop} {
    width: 80rem;
  }
`;

const StyledFooterTitle = styled.h3`
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const StyledCopyright = styled.p`
  max-width: 80rem;
  margin: 4rem auto 0;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.darkGrey};
`;

const Footer = () => (
  <StyledFooter id="kontakt">
    <StyledSubTitle>
      Masz do nas pytania ? Chętnie na je odpowiemy.
    </StyledSubTitle>
    <Content>
      <StyledFooterTitle>Kwarctex Sp. z o.o.</StyledFooterTitle>
      <StyledListWrapper>
        {FooterItems.map(footerItem => {
          return (
            <StyledListItem key={footerItem.title}>
              <StyledListItemTitle>{footerItem.title}</StyledListItemTitle>
              <StyledListItemText>{footerItem.item1}</StyledListItemText>
              <StyledListItemText>{footerItem.item2}</StyledListItemText>
            </StyledListItem>
          );
        })}
      </StyledListWrapper>
    </Content>
    <StyledCopyright>
      © Copyright 2020 Kwarctex Sp. z o.o. All Rights Reserved.
    </StyledCopyright>
  </StyledFooter>
);

export default Footer;
