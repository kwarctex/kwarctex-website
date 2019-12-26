import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'components/Molecules/Logo/Logo';
import Hamburger from 'components/Atoms/Hamburger/Hamburger';
import MobileNavigatiion from 'components/Molecules/MobileNavigation/MobileNavigation';
import DesktopNavigatiion from 'components/Molecules/DesktopNavigation/DesktopNavigation';

const StyledHeader = styled.header`
  position: fixed;
  top: 0%;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7rem;
  padding: 0 3rem;
  z-index: ${({ theme }) => theme.zIndex.zIndex100};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 3px 6px -4px ${({ theme }) => theme.color.midBlack};

  ${({ theme }) => theme.mq.desktop} {
    padding: 0 15rem;
  }
`;

const Header = () => {
  const [menuIsOpen, setMenuState] = useState(false);

  const hamburgerHandler = () => {
    setMenuState(!menuIsOpen);

    if (!menuIsOpen) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  };

  return (
    <StyledHeader menuIsOpen={menuIsOpen}>
      <Logo />
      <Hamburger onClick={hamburgerHandler} menuIsOpen={menuIsOpen} />
      <MobileNavigatiion
        menuIsOpen={menuIsOpen}
        menuHandler={hamburgerHandler}
      />
      <DesktopNavigatiion />
    </StyledHeader>
  );
};

export default Header;
