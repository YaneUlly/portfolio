import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flex, Box, IconButton, Text } from '@chakra-ui/react';
import 'boxicons';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <IconButton
        icon={<box-icon name='menu' size='60px' />}
        onClick={toggleMenu}
        color='white'
        background='none'
        _hover={{ background: 'none' }}
        aria-label='Open Menu'
      />

      {/* Menu */}
      {isOpen && (
        <Flex
          position='fixed'
          top='0'
          left='0'
          width='100%'
          height='100%'
          backgroundColor='white'
          justifyContent='flex-start'
          zIndex='50'
        >
          <Flex
            width='100%'
            height='100%'
            backgroundColor='white'
            color='black'
            paddingLeft='2rem'
            direction='column'
            alignItems='flex-start'
            justifyContent='center'
          >
            <IconButton
              icon={<box-icon name='x' size='60px' />}
              onClick={toggleMenu}
              position='absolute'
              top='1rem'
              right='1rem'
              color='black'
              background='none'
              _hover={{ background: 'none' }}
              aria-label='Close Menu'
            />

            <Box
              as='ul'
              padding='1rem'
              textAlign='left'
              display='flex'
              flexDirection='column'
              alignItems='flex-start'
            >
              <motion.div
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Link to='/'>
                  <Text fontSize='5rem' padding='0.1rem'>
                    Home
                  </Text>
                </Link>
              </motion.div>
              <motion.div
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Link to='/about'>
                  <Box as='li' fontSize='5rem' padding='0.1rem'>
                    About
                  </Box>
                </Link>
              </motion.div>
              <motion.div
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Box as='li' fontSize='5rem' padding='0.1rem'>
                  Portfolio
                </Box>
              </motion.div>
              <motion.div
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Box as='li' fontSize='5rem' padding='0.1rem'>
                  Contact
                </Box>
              </motion.div>
            </Box>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default HamburgerMenu;
