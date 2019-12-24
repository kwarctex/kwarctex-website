import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSectionWrapper = styled.section`
  padding: 3rem;
  background-color: ${({ theme, background }) =>
    background === 'grey' ? theme.color.lightGrey : theme.color.white};

  ${({ theme }) => theme.mq.tablet} {
    padding: 3rem 6rem;
  }

  ${({ theme }) => theme.mq.tablet_1} {
    padding: 7rem;
  }
`;

const SectionWrapper = ({ children, background }) => (
  <StyledSectionWrapper background={background}>
    {children}
  </StyledSectionWrapper>
);

SectionWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  background: PropTypes.string.isRequired,
};

export default SectionWrapper;
