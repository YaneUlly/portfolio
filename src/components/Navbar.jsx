import { Flex, Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import 'boxicons';

function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Flex
      as='nav'
      justify='space-between'
      align='center'
      color={darkMode ? '#CCCCCC' : '#101010'}
      p='0.5rem'
      width='100%'
      position='relative'
    >
      {location.pathname !== '/' ? (
        <Flex alignItems='center'>
          <Text
            fontSize='1rem'
            color={darkMode ? '#CCCCCC' : '#101010'}
            pl='1rem'
          >
            <strong>Yane Ully</strong> Portfolio.
          </Text>
          <Box as='span' ml='0.5rem' onClick={toggleDarkMode}>
            <box-icon name='moon' size='25px'></box-icon>
          </Box>
        </Flex>
      ) : (
        <Box as='span' ml='1rem' onClick={toggleDarkMode}>
          <box-icon name='moon' size='30px'></box-icon>
        </Box>
      )}
      <Box mr={'1rem'}>
        <HamburgerMenu />
      </Box>
    </Flex>
  );
}

export default Navbar;
