import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate/';
import HeroTemplate from 'templates/HeroTemplate/HeroTemplate/';
import AboutTemplate from 'templates/AboutTemplate/AboutTemplate/';
import ResonsForKwarctexTemplate from 'templates/ResonsForKwarctexTemplate/ResonsForKwarctexTemplate/';
import ServicesTemplate from 'templates/ServicesTemplate/ServicesTemplate/';

const IndexPage = () => (
  <div>
    <MainTemplate>
      <HeroTemplate />
      <AboutTemplate />
      <ResonsForKwarctexTemplate />
      <ServicesTemplate />
    </MainTemplate>
  </div>
);

export default IndexPage;
