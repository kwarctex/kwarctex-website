import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSectionContent = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: auto;

  ${({ theme }) => theme.mq.tablet} {
    width: 80%;
  }

  ${({ theme }) => theme.mq.tablet_1} {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 100%;
  }
`;

const SectionContent = ({ children }) => (
  <StyledSectionContent>{children}</StyledSectionContent>
);

SectionContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SectionContent;
