import React from 'react'
import QuickEnquiry from './QuickEnquiry/QuickEnquiry';
import ProgramOverview from './ProgramOverview/ProgramOverview';
import ProgramLevels from './ProgramLevels/ProgramLevels';
import Comprehensive from './Comprehensive/Comprehensive';
import Learning from './Learning/Learning';
import Students from './Students/Students';

const Courses = () => {
  return (
    <div>
      <QuickEnquiry />
      <ProgramOverview />
      <ProgramLevels />
      <Comprehensive />
      <Learning />
      <Students />
    </div>
  )
}

export default Courses;
