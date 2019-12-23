import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate/';
import HeroTemplate from 'templates/HeroTemplate/HeroTemplate/';
import AboutTemplate from 'templates/AboutTemplate/AboutTemplate/';
import ResonsForKwarctexTemplate from 'templates/ResonsForKwarctexTemplate/ResonsForKwarctexTemplate/';

const IndexPage = () => (
  <div>
    <MainTemplate>
      <HeroTemplate />
      <AboutTemplate />
      <ResonsForKwarctexTemplate />
    </MainTemplate>
  </div>
);

export default IndexPage;
