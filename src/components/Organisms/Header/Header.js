import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'components/Molecules/Logo/Logo';
import Hamburger from 'components/Atoms/Hamburger/Hamburger';
import MobileNavigatiion from 'components/Molecules/MobileNavigation/MobileNavigation';
import DesktopNavigatiion from 'components/Molecules/DesktopNavigation/DesktopNavigation';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7rem;
  padding: 0 3rem;

  ${({ theme }) => theme.mq.desktop} {
    padding: 0 15rem;
  }
`;

const Header = () => {
  const [menuIsOpen, setMenuState] = useState(false);

  const hamburgerHandler = () => {
    if (!menuIsOpen) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }

    setMenuState(!menuIsOpen);
  };

  return (
    <StyledHeader menuIsOpen={menuIsOpen}>
      <Hamburger onClick={hamburgerHandler} menuIsOpen={menuIsOpen} />
      <Logo />
      <MobileNavigatiion
        menuIsOpen={menuIsOpen}
        menuHandler={hamburgerHandler}
      />
      <DesktopNavigatiion />
    </StyledHeader>
  );
};

export default Header;
