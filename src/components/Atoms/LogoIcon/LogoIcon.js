import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

const LogoIcon = ({ src, ...props }) => (
  <div {...props}>
    <SVG src={src} />
  </div>
);

LogoIcon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LogoIcon;
