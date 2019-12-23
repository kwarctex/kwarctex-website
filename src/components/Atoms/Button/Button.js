import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.accentColor};
  color: ${({ theme, hero }) => (hero ? theme.color.white : theme.color.black)};
  background: none;
  transition: border-color 0.3s ease-in;
  cursor: pointer;

  &:hover {
    border: 1px solid
      ${({ theme, hero }) => (hero ? theme.color.white : theme.color.black)};
  }
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
