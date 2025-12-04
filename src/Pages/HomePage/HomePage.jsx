import React from 'react'
import HeroSection from '../HomePage/HeroSection/HeroSection';
import OurVision from '../HomePage/OurVision/OurVision';
import OurPrograms from './OurPrograms/OurPrograms';
import WhyChoose from './WhyChoose/WhyChoose';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OurVision />
      <OurPrograms />
      <WhyChoose />
    </div>
  )
}
export default HomePage;
