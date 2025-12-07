import React from 'react'
import QuickEnquiry from './QuickEnquiry/QuickEnquiry';
import ProgramOverview from './ProgramOverview/ProgramOverview';
import ProgramLevels from './ProgramLevels/ProgramLevels';

const Courses = () => {
  return (
    <div>
      <QuickEnquiry />
      <ProgramOverview />
      <ProgramLevels />
    </div>
  )
}

export default Courses;
