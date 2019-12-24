import React from 'react';
import styled from 'styled-components';
import BGIMG from 'assets/images/backgrounds/hero_1.jpg';

const StyledConglomerateHeroWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  background-image: url(${BGIMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 75% 0;
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    height: 60vh;
  }
  ${({ theme }) => theme.mq.desktop} {
    align-items: flex-start;
    padding: 0 20rem;
    background-position: 0 45%;
  }
`;

const StyledTitle = styled.p`
  width: 25rem;
  margin: auto;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.5;
  text-align: center;
  z-index: 10;

  ${({ theme }) => theme.mq.tablet} {
    width: 60rem;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: 80vh;
  opacity: 0.7;
  background-color: ${({ theme }) => theme.color.black};
`;

const ConglomerateHeroTemplate = () => (
  <StyledConglomerateHeroWrapper>
    <StyledTitle>
      Powierzchni z naturalnego kwarcu, które zaspokoją różne gusta i potrzeby.
    </StyledTitle>
    <StyledOverlay />
  </StyledConglomerateHeroWrapper>
);

export default ConglomerateHeroTemplate;
