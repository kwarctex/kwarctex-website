import React from 'react';
import styled from 'styled-components';
import Section from 'components/Molecules/Section/Section';
import PageTitle from 'components/Atoms/PageTitle/PageTitle';
import SubTitle from 'components/Atoms/SubTitle/SubTitle';
import Video from 'components/Atoms/Video/Video';
import SectionTextTitle from 'components/Atoms/SectionTextTitle/SectionTextTitle';
import SectionText from 'components/Atoms/SectionText/SectionText';
import Button from 'components/Atoms/Button/Button';

const StyledSubTitle = styled(SubTitle)`
  margin-top: 2rem;
`;

const StyledSectionText = styled(SectionText)`
  margin: 4rem 0;
`;

const StyledText = styled.p`
  margin-top: 8rem;
  font-size: ${({ theme }) => theme.fontSize.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.mobile.l};
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 110rem;
  margin-top: 2rem;

  ${({ theme }) => theme.mq.tablet} {
    margin-top: 4rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    margin: 4rem auto 0;
  }
`;

const InnerContent = styled.div`
  width: 100%;

  &:last-of-type {
    margin-top: 2rem;

    ${({ theme }) => theme.mq.tablet_1} {
      margin-top: 5rem;
    }

    ${({ theme }) => theme.mq.desktop} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
      margin-left: 5rem;
    }
  }
`;

const AboutTemplate = () => (
  <Section>
    <PageTitle>O NAS</PageTitle>
    <StyledSubTitle>
      Oferujemy Państwu nowy produkt na polskim rynku materiałów wykończeniowych
      i elementów mebli - konglomerat kwarcowy firmy Belenco®.
    </StyledSubTitle>
    <Content>
      <InnerContent>
        <Video />
      </InnerContent>
      <InnerContent>
        <SectionTextTitle>
          Kwarctex: nowa firma na polskim rynku - nowa szansa do rozwoju Twojego
          biznesu
        </SectionTextTitle>
        <StyledSectionText>
          Fabryka Peker Yuzey Tasarimlari A.S. została założona 10 grudnia 2011
          roku w strefie przemysłowej Manisa (Turcja) i zajmuje się produkcją
          konglomeratu kwarcowego Belenco®. Od października 2019 r., KWARCTEX
          Spółka z o.o. otrzymała od Pekera Yuzey Tasarimlari A.S., wyłączność
          na dystrybucję produktów Belenco® na polski rynek. Teraz dzięki naszej
          firmie możesz kupić sztuczny kamień od najnowocześniejszego producenta
          na świecie.
        </StyledSectionText>
        <Button>Poznaj ofertę</Button>
      </InnerContent>
    </Content>
    <StyledText>Zapraszamy firmy kamieniarskie do współpracy!</StyledText>
  </Section>
);

export default AboutTemplate;
