import React from 'react';
import Helmet from 'react-helmet';

const SEO = () => (
  <Helmet>
    <html lang="pl" />
    <title>Kwarctex - konglomeraty kwarcowe</title>
    <meta
      name="format-detection"
      content="telephone=no,date=no,address=no,email=no,url=no"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export default SEO;
