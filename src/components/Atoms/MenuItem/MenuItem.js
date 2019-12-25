import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const StyledMenuItem = styled.li`
  position: relative;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  cursor: pointer;
`;

const StyledMenuItemLink = styled(AniLink)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  transition: color 0.15s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.accentColor};
  }
`;

const MenuItem = ({ children, to }) => (
  <StyledMenuItem>
    <StyledMenuItemLink
      to={to}
      cover
      direction="right"
      bg="hsla(186, 100%, 27%, 1)"
    >
      {children}
    </StyledMenuItemLink>
  </StyledMenuItem>
);

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
