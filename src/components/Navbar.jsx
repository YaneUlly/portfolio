import {
  Flex,
  Box,
  Text,
  useColorMode,
  useTheme,
  Link,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Navbar() {
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Flex
      as='nav'
      justify='space-between'
      align='center'
      bg={colorMode === 'dark' ? theme.colors.dark.bg : theme.colors.light.bg}
      p='0.5rem'
      width='100%'
      position='relative'
    >
      {location.pathname !== '/' ? (
        <Flex alignItems='center'>
          <Link href='/'>
            <Text
              fontSize='1rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
              pl='1rem'
            >
              <strong>Yane Ully</strong> Portfolio.
            </Text>
          </Link>
          <Box as='span' ml='0.5rem' onClick={toggleColorMode} cursor='pointer'>
            {colorMode === 'dark' ? (
              <SunIcon boxSize={5} color={theme.colors.light.bg} />
            ) : (
              <MoonIcon boxSize={5} color={theme.colors.dark.bg} />
            )}
          </Box>
        </Flex>
      ) : (
        <Box as='span' ml='1rem' onClick={toggleColorMode} cursor='pointer'>
          {colorMode === 'dark' ? (
            <SunIcon boxSize={6} color={theme.colors.light.bg} />
          ) : (
            <MoonIcon boxSize={6} color={theme.colors.dark.bg} />
          )}
        </Box>
      )}
      <Box mr={'1rem'}>
        <HamburgerMenu />
      </Box>
    </Flex>
  );
}

export default Navbar;
