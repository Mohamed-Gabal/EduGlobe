import React from 'react'
import HeroSection from '../HomePage/HeroSection/HeroSection';
import OurVision from '../HomePage/OurVision/OurVision';
import OurPrograms from './OurPrograms/OurPrograms';
import WhyChoose from './WhyChoose/WhyChoose';
import Students from './Students/Students';
import GetTouch from './GetTouch/GetTouch';
import SectionFooter from './SectionFooter/SectionFooter';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OurVision />
      <OurPrograms />
      <WhyChoose />
      <Students />
      <GetTouch />
      <SectionFooter />
    </div>
  )
}
export default HomePage;
