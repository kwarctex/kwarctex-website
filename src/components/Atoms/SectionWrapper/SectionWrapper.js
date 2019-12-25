import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSectionWrapper = styled.section`
  max-width: ${({ styledSection }) =>
    styledSection === 'styledSection' ? '100%' : '110rem'};
  padding: 3rem;
  margin: auto;
  background-color: ${({ theme, styledSection }) =>
    styledSection === 'styledSection'
      ? theme.color.lightGrey
      : theme.color.white};

  ${({ theme }) => theme.mq.tablet} {
    padding: 3rem 6rem;
  }

  ${({ theme }) => theme.mq.tablet_1} {
    padding: 7rem;
  }
`;

const SectionWrapper = ({ children, styledSection, id }) => (
  <StyledSectionWrapper styledSection={styledSection} id={id}>
    {children}
  </StyledSectionWrapper>
);

SectionWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  styledSection: PropTypes.string,
  id: PropTypes.string.isRequired,
};

SectionWrapper.defaultProps = {
  styledSection: 'default',
};

export default SectionWrapper;
