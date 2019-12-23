import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: ${({ hero }) => (hero ? '13rem' : '16rem')};
  padding: ${({ hero }) => (hero ? '1.5rem' : '2rem')};
  border: 1px solid ${({ theme }) => theme.color.accentColor};
  color: ${({ theme, hero }) => (hero ? theme.color.white : theme.color.black)};
  background: none;
  transition: border-color 0.3s ease-in, box-shadow 0.3s ease-in;
  cursor: pointer;

  &:hover {
    border: 1px solid
      ${({ theme, hero }) => (hero ? theme.color.white : theme.color.black)};
  }
  box-shadow: 0 1px 3px 10px -4px ${({ theme }) => theme.color.black};
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
