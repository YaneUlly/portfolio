import { useState } from 'react';
import './header.css';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          Yane Ully
        </a>
        <div className={toggleMenu ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link active-link'>
                <i className='uil uil-estate nav__icon'></i> Home
              </a>
            </li>

            <li>
              <a href='#about' className='nav__link'>
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>

            <li>
              <a href='#skills' className='nav__link'>
                <i className='uil uil-file nav__icon'></i> Skills
              </a>
            </li>

            <li>
              <a href='#services' className='nav__link'>
                <i className='uil uil-briefcase-alt nav__icon'></i> Services
              </a>
            </li>

            <li>
              <a href='portfolio' className='nav__link'>
                <i className='uil uil-scenery nav__icon'></i> Portfolio
              </a>
            </li>

            <li>
              <a href='#contact' className='nav__link'>
                <i className='uil uil-message nav__icon'></i> Contact
              </a>
            </li>
          </ul>

          <i
            className='uil uil-times nav__close'
            onClick={() => setToggleMenu(!toggleMenu)}
          ></i>
        </div>

        <div className='nav__toggle' onClick={() => setToggleMenu(!toggleMenu)}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
