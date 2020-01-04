import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Atoms/Icon/Icon';
import LogoIcon from 'assets/images/icons/crystal.svg';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  text-transform: uppercase;
`;

const StyledIcon = styled(Icon)`
  width: 2.5rem;
`;

const StyledText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.accentColor};
`;

const StyledLink = styled(AniLink)`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.color.accentColor};
  }
`;

const Logo = () => (
  <StyledLink to="/" cover direction="right" bg="hsla(0, 0%, 92%, 1)">
    <LogoWrapper>
      <StyledIcon src={LogoIcon} />
      <StyledText>Kwarctex</StyledText>
    </LogoWrapper>
  </StyledLink>
);

export default Logo;
