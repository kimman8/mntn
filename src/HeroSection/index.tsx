import React, { useState } from 'react';
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  ImgBg,
} from './HeroElements';
import img from '../images/MNTN.svg';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg src={img} />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Be Prepared For The <br /> Mountains And Beyond!
        </HeroH1>
        <HeroP>scroll down</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
