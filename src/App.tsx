import React from 'react';
import HeroSection from './HeroSection';
import './App.css';
import InfoSection from './InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from './InfoSection/Data';

const App: React.FC = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default App;
