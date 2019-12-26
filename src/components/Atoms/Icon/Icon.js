import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const IconWrapper = styled.div`
  max-width: 100%;
`;

const StyledSVG = styled(SVG)`
  max-width: 100%;
  height: 100%;
`;

const Icon = ({ src, ...props }) => (
  <IconWrapper {...props}>
    <StyledSVG src={src} />
  </IconWrapper>
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Icon;
