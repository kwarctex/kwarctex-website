import React from 'react';
import PropTypes from 'prop-types';
import SectionWrapper from 'components/Atoms/SectionWrapper/SectionWrapper';
import SectionContent from 'components/Atoms/SectionContent/SectionContent';

const Section = ({ children, styledSection, id }) => (
  <SectionWrapper styledSection={styledSection} id={id}>
    <SectionContent>{children}</SectionContent>
  </SectionWrapper>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  styledSection: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Section.defaultProps = {
  styledSection: 'default',
};

export default Section;
