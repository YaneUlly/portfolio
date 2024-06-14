import { Flex, Box } from '@chakra-ui/react';
import HamburgerMenu from './HamburgerMenu';
import 'boxicons';

function Navbar() {
  return (
    <Flex
      as='nav'
      direction='row'
      justify='space-between'
      align='center'
      color='white'
      p='0.5rem'
      width='100%'
    >
      <Box as='span' ml='1rem'>
        <box-icon name='moon' size='30px'></box-icon>
      </Box>
      <HamburgerMenu />
    </Flex>
  );
}

export default Navbar;
