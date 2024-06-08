import React from 'react';
import '../App.css';

const Backend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Backend Development</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <h3 className='skills__name'>ExpressJs</h3>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <h3 className='skills__name'>NodeJs</h3>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <h3 className='skills__name'>MongoDB</h3>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <h3 className='skills__name'>Postman</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
