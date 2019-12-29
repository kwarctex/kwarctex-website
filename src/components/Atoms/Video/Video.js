import React from 'react';
import styled from 'styled-components';

const StyledVideo = styled.iframe`
  width: 100%;
  border: none;

  ${({ theme }) => theme.mq.mobile_1} {
    height: 40rem;
  }
`;

const Video = () => (
  <StyledVideo
    src="https://www.youtube.com/embed/dAg5cxD8vF4?rel=0&mute=1"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
);

export default Video;
