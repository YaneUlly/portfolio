import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/yane-ully-martins/'
        target='_blank'
        rel='noreferrer'
      >
        <box-icon type='logo' name='linkedin'></box-icon>
      </a>

      <a
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/YaneUlly'
        target='_blank'
        rel='noreferrer'
      >
        GitHub
      </a>
    </div>
  );
};

export default SocialMediaIcons;
