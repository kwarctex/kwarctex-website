import React from 'react';
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
import styled from 'styled-components';
import Section from 'components/Molecules/Section/Section';
import PageTitle from 'components/Atoms/PageTitle/PageTitle';
import SubTitle from 'components/Atoms/SubTitle/SubTitle';
import SectionText from 'components/Atoms/SectionText/SectionText';
import SectionTextTitle from 'components/Atoms/SectionTextTitle/SectionTextTitle';
import Button from 'components/Atoms/Button/Button';

import imgReason1 from 'assets/images/backgrounds/reason-1.jpg';
import imgReason2 from 'assets/images/backgrounds/reason-2.jpg';
import imgReason3 from 'assets/images/backgrounds/reason-3.jpg';

const reasons = [
  {
    img: imgReason1,
    alt: 'image of tea and sweets on the pink background',
    title: 'Naturalny kwarc, niezwykle trwały minerał',
    description:
      'W połączeniu z doskonałym designem i technologią tworzy powierzchnie kwarcowe Belenco, dzięki temu powstają konglomeraty o wysokiej odporności na ścieranie, zarysowania i uderzenia. ',
  },
  {
    img: imgReason2,
    alt: 'image of a glass of milk and berries on the grey background',
    title: 'Konglomeraty Belenco są odporne na chemikalia',
    description:
      'Nasze Powierzchnie nie są wrażliwe na agresywne kwasy i detergenty. Chemia gospodarcza nie stanowi już problemu dla konglomeratów Belenco. Nie wymagają specjalnej konserwacji.',
  },
  {
    img: imgReason3,
    alt: 'image of grass on the grey background',
    title: 'Dbamy o środowisko',
    description: ' ',
  },
];

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 120rem;
  margin: 2rem auto 0;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    margin: 4rem auto 0;
  }
`;

const InnerContent = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.midGrey};

  ${({ theme }) => theme.mq.desktop} {
    height: 48rem;
  }

  &:nth-child(2) {
    margin: 2rem 0;

    ${({ theme }) => theme.mq.desktop} {
      margin: 0 4rem;
    }
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const StyledSectionTextTitle = styled(SectionTextTitle)`
  margin: 1rem 0;

  ${({ theme }) => theme.mq.desktop} {
    margin: 4rem 0 1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 4rem;

  ${({ theme }) => theme.mq.desktop} {
    justify-content: center;
  }
`;

const ResonsForKwarctexTemplate = () => (
  <Section id="dlaczego-nasze-konglomeraty" styledSection="styledSection">
    <PageTitle>Dlaczego warto wybrać konglomeraty Kwarctex</PageTitle>
    <SubTitle>
      Nasze produkty są niezwykle trwałe, odporne na agresywne kwasy i
      detergenty.
    </SubTitle>
    <Content>
      {reasons.map(reason => {
        return (
          <InnerContent key={reason.title}>
            <Img src={reason.img} alt={reason.alt} />
            <StyledSectionTextTitle>{reason.title}</StyledSectionTextTitle>
            <SectionText>{reason.description}</SectionText>
          </InnerContent>
        );
      })}
    </Content>
    <ButtonWrapper>
      <Button>Poznaj ofertę</Button>
    </ButtonWrapper>
  </Section>
);

export default ResonsForKwarctexTemplate;
