import React from 'react';
import PropTypes from 'prop-types';
// import window from 'global';
import styled from 'styled-components';
import MenuItem from 'components/Atoms/MenuItem/MenuItem';
import menuItemsArray from 'components/Atoms/MenuItem/menu-items-array';

const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
  transform: translateX(${({ menuIsOpen }) => (menuIsOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in;
`;

const StyledMenuItemsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 5rem 0;
  list-style: none;
`;

const MobileNavigation = ({ menuIsOpen, menuHandler }) => {
  return (
    <StyledNavigation menuIsOpen={menuIsOpen}>
      <StyledMenuItemsWrapper>
        {menuItemsArray.map(item => (
          <MenuItem
            key={item.title}
            to={item.linkTo}
            onClick={menuHandler}
            // menuIsOpen={menuIsOpen}
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
