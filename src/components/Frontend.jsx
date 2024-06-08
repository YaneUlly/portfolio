import React from 'react';
import '../App.css';

const Frontend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Frontend Development</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <h3 className='skills__name'>HTML</h3>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <h3 className='skills__name'>CSS</h3>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <h3 className='skills__name'>JavaScript</h3>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <h3 className='skills__name'>React</h3>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <h3 className='skills__name'>Tailwind</h3>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <h3 className='skills__name'>Chakra</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
