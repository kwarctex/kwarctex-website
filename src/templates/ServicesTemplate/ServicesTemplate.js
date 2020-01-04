import React from 'react';
import styled from 'styled-components';
import Section from 'components/Molecules/Section/Section';
import PageTitle from 'components/Atoms/PageTitle/PageTitle';
import SubTitle from 'components/Atoms/SubTitle/SubTitle';
import SectionText from 'components/Atoms/SectionText/SectionText';
import SectionTextTitle from 'components/Atoms/SectionTextTitle/SectionTextTitle';

import imgService from 'assets/images/backgrounds/service.jpg';

const Services = [
  {
    title: 'Dostawa',
    description:
      'Dostarczamy nasze konglomeraty na terenie całej Polski. Skontaktujemy się z Tobą celem ustalenia szczegółów.',
  },

  {
    title: 'Konglomeraty',
    description:
      'W nasze ofercie znajdziesz konglomeraty, który zaspokoją różne gusta i potrzeby.',
  },
];

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 110rem;
  margin: 2rem auto 0;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    margin: 4rem auto 0;
  }
`;

const InnerContent = styled.div`
  display: block;

  ${({ theme }) => theme.mq.desktop} {
    &:last-of-type {
      margin-left: 5rem;
    }
  }
`;

const Service = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.midGrey};
  margin-top: 2rem;

  ${({ theme }) => theme.mq.desktop} {
    padding: 2rem;
    &:first-of-type {
      margin-top: 0rem;
    }
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const StyledSectionTextTitle = styled(SectionTextTitle)`
  margin-bottom: 1rem;
`;

const ServicesTemplate = () => (
  <Section id="uslugi">
    <PageTitle>Usługi Kwarctex</PageTitle>
    <SubTitle>
      Obecnie swiadczymy nasze usługi dla firm kamieniarskich. Zapraszmy do
      współpracy.
    </SubTitle>
    <Content>
      <InnerContent>
        <Img src={imgService} alt="image of stacked plates and pineapple" />
      </InnerContent>
      <InnerContent>
        {Services.map(service => {
          return (
            <Service key={service.title}>
              <StyledSectionTextTitle>{service.title}</StyledSectionTextTitle>
              <SectionText>{service.description}</SectionText>
            </Service>
          );
        })}
      </InnerContent>
    </Content>
  </Section>
);

export default ServicesTemplate;
