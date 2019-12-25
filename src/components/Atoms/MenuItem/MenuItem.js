import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const StyledMenuItem = styled.li`
  position: relative;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

const StyledMenuItemAniLink = styled(AniLink)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  transition: color 0.15s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.accentColor};
  }
`;

const StyledMenuItemLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  transition: color 0.15s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.accentColor};
  }
`;

const MenuItem = ({ children, to }) => {
  return (
    <StyledMenuItem>
      {to.includes('#') ? (
        <StyledMenuItemLink to={to}>{children}</StyledMenuItemLink>
      ) : (
        <StyledMenuItemAniLink
          to={to}
          cover
          direction="right"
          bg="hsla(0, 0%, 92%, 1)"
        >
          {children}
        </StyledMenuItemAniLink>
      )}
    </StyledMenuItem>
  );
};

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
