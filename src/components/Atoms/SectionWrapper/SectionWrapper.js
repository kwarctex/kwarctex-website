import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSectionWrapper = styled.section`
  padding: 3rem;

  ${({ theme }) => theme.mq.tablet} {
    padding: 3rem 6rem;
  }

  ${({ theme }) => theme.mq.tablet_1} {
    padding: 0;
    margin: 7rem;
  }
`;

const SectionWrapper = ({ children }) => (
  <StyledSectionWrapper>{children}</StyledSectionWrapper>
);

SectionWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SectionWrapper;
