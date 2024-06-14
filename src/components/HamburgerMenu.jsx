import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './styles/HamburgerMenu.css';
import 'boxicons';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className='menu-button' onClick={toggleMenu}>
        <box-icon name='menu' size='60px'></box-icon>
      </button>

      {/* Menu */}
      {isOpen && (
        <div className='overlay'>
          <div className='menu'>
            <button className='close-button' onClick={toggleMenu}>
              <box-icon name='x' size='60px'></box-icon>
            </button>

            <ul>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <li>Home</li>
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link to='/about'>
                  <li>About</li>
                </Link>
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <li>Portfolio</li>
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <li>Contact</li>
              </motion.div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
