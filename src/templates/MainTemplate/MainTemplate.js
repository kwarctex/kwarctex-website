import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import SEO from 'components/Atoms/SEO/SEO';
import theme from 'assets/styles/theme';
// import Header from 'components/Header/Header';
// import ContactTemplate from 'templates/ContactTemplate/ContactTemplate';

const MainTemplate = ({ children }) => {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          {/* <Header pathname={pathname} /> */}
          {children}
          {/* <ContactTemplate /> */}
        </>
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainTemplate;
