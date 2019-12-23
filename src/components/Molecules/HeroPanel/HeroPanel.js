import React from 'react';
import styled from 'styled-components';
import Panel from 'components/Atoms/Panel/Panel';
import MainTitle from 'components/Atoms/MainTitle/MainTitle';
import SubTitle from 'components/Atoms/SubTitle/SubTitle';
import Button from 'components/Atoms/Button/Button';

const StyledMainTitle = styled(MainTitle)`
  border-bottom: 1px solid ${({ theme }) => theme.color.white};
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 3rem;
  }
`;

const StyledSubTitle = styled(SubTitle)`
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 3rem;
  }
`;

const HeroPanel = () => (
  <Panel>
    <StyledMainTitle>Konglomeraty kwarcowe Kwarctex</StyledMainTitle>
    <StyledSubTitle hero>
      Oficjalny przedstawiciel Belenco&reg; na całej UE.
    </StyledSubTitle>
    <Button hero>Poznaj ofertę</Button>
  </Panel>
);

export default HeroPanel;
