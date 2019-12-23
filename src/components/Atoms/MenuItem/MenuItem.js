import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const StyledMenuItem = styled.li`
  position: relative;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  cursor: pointer;
`;

const StyledMenuItemLink = styled(AniLink)`
    font-size: 1.6rem;
    font-weight: 700;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
    /* ${({ theme }) => theme.mq.tablet} {
        // add styles
    } */
`;

const MenuItem = ({ children, ...props }) => (
  <StyledMenuItem>
    <StyledMenuItemLink {...props}>{children}</StyledMenuItemLink>
  </StyledMenuItem>
);

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MenuItem;
