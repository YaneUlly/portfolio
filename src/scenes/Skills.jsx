import React from 'react';
import Frontend from '../components/Frontend';
import Backend from '../components/Backend';
import UxUiDesign from '../components/UxUiDesign';
import '../App.css';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'> Skills</h2>
      <span className='section__subtitle'>My technical level</span>

      <div className='skills__container container grid'>
        <Frontend />
        <Backend />
        <UxUiDesign />
      </div>
    </section>
  );
};

export default Skills;
