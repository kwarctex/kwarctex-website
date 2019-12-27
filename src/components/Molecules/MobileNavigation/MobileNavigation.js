import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuItem from 'components/Atoms/MenuItem/MenuItem';
import menuItemsArray from 'components/Atoms/MenuItem/menu-items-array';

const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.zIndex90};
  background-color: ${({ theme }) => theme.color.midBlack};
  transform: translateX(${({ menuIsOpen }) => (menuIsOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

const StyledMenuItemsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 45%;
  padding: 3rem;
  list-style: none;

  ${({ theme }) => theme.mq.tablet} {
    height: 25%;
  }
`;

const MobileNavigation = ({ menuIsOpen, menuHandler }) => {
  return (
    <StyledNavigation menuIsOpen={menuIsOpen}>
      <StyledMenuItemsWrapper>
        {menuItemsArray.map(item => (
          <MenuItem
            mobile
            key={item.title}
            to={item.linkTo}
            onClick={menuHandler}
          >
            {item.title}
          </MenuItem>
        ))}
      </StyledMenuItemsWrapper>
    </StyledNavigation>
  );
};

MobileNavigation.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  menuHandler: PropTypes.func.isRequired,
};

export default MobileNavigation;
