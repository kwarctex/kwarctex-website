import React from 'react';
import PropTypes from 'prop-types';
import SectionWrapper from 'components/Atoms/SectionWrapper/SectionWrapper';
import SectionContent from 'components/Atoms/SectionContent/SectionContent';

const Section = ({ children, background }) => (
  <SectionWrapper background={background}>
    <SectionContent>{children}</SectionContent>
  </SectionWrapper>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  background: PropTypes.string.isRequired,
};

export default Section;
