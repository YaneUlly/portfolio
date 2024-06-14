import HamburgerMenu from './HamburgerMenu';
import './styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='moon-icon-wrapper'>
        <box-icon name='moon' size='30px' className='moon-icon'></box-icon>
      </div>
      <HamburgerMenu />
    </div>
  );
}

export default Navbar;
