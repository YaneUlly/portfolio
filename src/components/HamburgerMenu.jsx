import React, { useState } from 'react';
import 'boxicons';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Ícone do hambúrguer */}
      <div>
        <box-icon name='menu-alt-right' onClick={toggleMenu}></box-icon>
      </div>

      {/* Menu */}
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center'>
          <button
            className='p-2 m-4 text-white bg-red-500 rounded'
            onClick={toggleMenu}
          >
            {/* Ícone de fechar */}
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </button>

          <ul className='p-4 text-center'>
            <li className='p-2 border-b border-gray-700'>Home</li>
            <li className='p-2 border-b border-gray-700'>About</li>
            <li className='p-2 border-b border-gray-700'>Portfolio</li>
            <li className='p-2 border-b border-gray-700'>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
