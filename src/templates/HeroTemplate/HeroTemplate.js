import React from 'react';
import styled from 'styled-components';
// import Header from 'components/Header/Header';
// import Button from 'components/Button/Button';
import BGIMG from 'assets/images/hero.jpg';
import HeroPanel from 'components/Molecules/HeroPanel/HeroPanel';
// import BackgroundImage from 'gatsby-background-image';
// import { useStaticQuery, graphql } from 'gatsby';

const StyledHeroWrapper = styled.section`
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

// const StyledHeading = styled.h1`
//   margin-top: 6rem;
//   font-size: ${({ theme }) => theme.fontSize.mobile.xxl};
//   font-weight: ${({ theme }) => theme.fontWeight.light};
//   color: ${({ theme }) => theme.color.black};
//   ${({ theme }) => theme.mq.tablet} {
//     font-size: ${({ theme }) => theme.fontSize.tablet.xxxl};
//   }
//   ${({ theme }) => theme.mq.desktop} {
//     font-size: ${({ theme }) => theme.fontSize.desktop.xxl};
//   }
// `;

const HeroTemplate = () => {
  // const data = useStaticQuery(graphql`
  //   query HeroQuery {
  //     file(relativePath: { eq: "hero.jpg" }) {
  //       id
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);

  // const ImagePath = data.file.childImageSharp.fluid;

  return (
    <>
      <StyledHeroWrapper>
        <HeroPanel />
      </StyledHeroWrapper>
    </>
  );
};

export default HeroTemplate;
