import React from 'react';
import '../App.css';
import ProfileImg from '../assets/porfolio-photo.png';

const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__tile'>About me</h2>
      <span className='section__subtitle'>My introduction</span>
      <div className='about__container container grid'>
        <img src={ProfileImg} alt='' className='about__img' />

        <div className='about__data'>
          <p className='about__description'>
            With a quirky blend of scientific research and customer support
            tucked under my belt, I bring a fresh perspective to the table. Ever
            since I can remember, I've been fueled by curiosity. It's what drove
            me from test tubes to lines of code, always seeking to understand
            and improve.{' '}
          </p>
          <p className='about__description'>
            I've got a knack for turning ideas into reality, whether I'm
            tweaking code or crafting pixel-perfect designs. It's like being a
            mad scientist in a digital lab, mixing creativity with logic to cook
            up something truly magical.
          </p>
          <p className='about__description'>
            When I'm not lost in the digital wilderness, you'll find me chasing
            sunsets with my camera, plotting world domination over a board game,
            or sipping espresso at the latest hipster café. I'm here to **make a
            difference**, to shake things up, and to **create experiences that
            leave a lasting impact**. Let's make some magic happen!
          </p>
          <a download='' href='' className='button'>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
