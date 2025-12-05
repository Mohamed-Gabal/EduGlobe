import React from 'react';
import "./SectionFooter.css";

const SectionFooter = () => {
  return (
    <section className='section_footer'>
      <h1>Ready to Transform Your English Skills</h1>
      <p>Join thousands of successful learners. Start your journey with a free consultation and placement test.</p>
      <div className='section__footer_btn'>
        <button className='section__footer_black'>Book Free Consultation</button>
        <button className="section__footer_white">Download Brochure</button>
      </div>
    </section>
  );
}

export default SectionFooter;
