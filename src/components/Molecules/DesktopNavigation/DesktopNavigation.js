import React from 'react';
import styled from 'styled-components';
import MenuItem from 'components/Atoms/MenuItem/MenuItem';
import menuItemsArray from 'components/Atoms/MenuItem/menu-items-array';

const StyledNavigation = styled.nav`
  display: none;
  width: 60rem;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.desktop} {
    display: block;
  }
`;

const StyledMenuItemsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  list-style: none;
`;

const DesktopNavigation = () => {
  return (
    <StyledNavigation>
      <StyledMenuItemsWrapper>
        {menuItemsArray.map(item => (
          <MenuItem key={item.title} to={item.linkTo}>
            {item.title}
          </MenuItem>
        ))}
      </StyledMenuItemsWrapper>
    </StyledNavigation>
  );
};

export default DesktopNavigation;
