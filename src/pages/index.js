import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate/';
import HeroTemplate from 'templates/HeroTemplate/HeroTemplate/';
import AboutTemplate from 'templates/AboutTemplate/AboutTemplate/';

const IndexPage = () => (
  <div>
    <MainTemplate>
      <HeroTemplate />
      <AboutTemplate />
    </MainTemplate>
  </div>
);

export default IndexPage;
