import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const StyledButton = styled(AniLink)`
  &,
  &:link,
  &:visited {
    display: block;
    width: ${({ hero }) => (hero ? '13rem' : '16rem')};
    padding: ${({ hero }) => (hero ? '1.5rem' : '2rem')};
    border: 1px solid ${({ theme }) => theme.color.accentColor};
    text-align: center;
    color: ${({ theme, hero }) =>
      hero ? theme.color.white : theme.color.black};
    background: none;
    text-decoration: none;
    transition: border-color 0.3s ease-in, box-shadow 0.3s ease-in;
    cursor: pointer;
  }

  &:hover {
    border: 1px solid
      ${({ theme, hero }) => (hero ? theme.color.white : theme.color.black)};
  }
`;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton
      to="/konglomeraty-kwarcowe"
      cover
      direction="right"
      bg="hsla(0, 0%, 92%, 1)"
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
