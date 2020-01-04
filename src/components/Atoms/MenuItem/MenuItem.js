import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const StyledMenuItem = styled.li`
  position: relative;
  margin-bottom: ${({ mobile }) => (mobile ? '1.5rem' : '0')};
  text-align: left;
  cursor: pointer;
`;

const StyledMenuItemAniLink = styled(AniLink)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  color: ${({ theme, mobile }) =>
    mobile ? theme.color.white : theme.color.black};
  transition: color 0.15s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.accentColor};
  }
`;

const StyledMenuItemLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  color: ${({ theme, mobile }) =>
    mobile ? theme.color.white : theme.color.black};
  transition: color 0.15s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.accentColor};
  }
`;

const MenuItem = ({ children, to, mobile, ...props }) => {
  return (
    <StyledMenuItem mobile={mobile}>
      {to.includes('#') ? (
        <StyledMenuItemLink to={to} mobile={mobile} {...props}>
          {children}
        </StyledMenuItemLink>
      ) : (
        <StyledMenuItemAniLink
          mobile={mobile}
          to={to}
          cover
          direction="right"
          bg="hsla(0, 0%, 92%, 1)"
          {...props}
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
  mobile: PropTypes.bool,
};

MenuItem.defaultProps = {
  mobile: false,
};

export default MenuItem;
