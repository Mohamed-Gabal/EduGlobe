import React from 'react'
import QuickEnquiry from './QuickEnquiry/QuickEnquiry';
import ProgramOverview from './ProgramOverview/ProgramOverview';
import ProgramLevels from './ProgramLevels/ProgramLevels';
import Comprehensive from './Comprehensive/Comprehensive';

const Courses = () => {
  return (
    <div>
      <QuickEnquiry />
      <ProgramOverview />
      <ProgramLevels />
      <Comprehensive />
    </div>
  )
}

export default Courses;
