import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHamburgerButton = styled.button`
  position: relative;
  width: 2rem;
  height: 100%;
  border: none;
  transform: scale(${({ menuIsOpen }) => (menuIsOpen ? '1.3' : '1')});
  background-color: transparent;
  outline: none;
  transition: transform 0.1s cubic-bezier(0.53, -0.4, 0.55, 1.36);
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.zIndex100};

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

const StyledHamburgerContent = styled.div`
  position: relative;
  width: 100%;
  height: ${({ menuIsOpen }) => (menuIsOpen ? '0' : '2px')};
  background-color: ${({ theme }) => theme.color.black};
  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 0;
    width: 85%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.black};
    transition: transform 0.25s ease-in-out;
  }
  ::before {
    top: -7px;
    transform: translateY(${({ menuIsOpen }) => (menuIsOpen ? '7px' : '0')})
      rotate(${({ menuIsOpen }) => (menuIsOpen ? '45deg' : '0')});
  }
  ::after {
    top: 7px;
    transform: translateY(${({ menuIsOpen }) => (menuIsOpen ? '-7px' : '0')})
      rotate(${({ menuIsOpen }) => (menuIsOpen ? '-45deg' : '0')});
  }
`;

const Hamburger = ({ menuIsOpen, ...props }) => (
  <StyledHamburgerButton menuIsOpen={menuIsOpen} {...props}>
    <StyledHamburgerContent menuIsOpen={menuIsOpen} />
  </StyledHamburgerButton>
);

Hamburger.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
};

export default Hamburger;
