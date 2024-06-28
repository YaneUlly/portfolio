import {
  Text,
  Box,
  Flex,
  Link,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

function Footer() {
  const location = useLocation();
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const [hovered, setHovered] = useState(null);

  const hoverColor =
    colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1;
  const initialColor =
    colorMode === 'dark' ? theme.colors.dark.h2 : theme.colors.light.h2;

  return (
    <div className='footer'>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        flexDirection={{ base: 'column', md: 'row' }}
        gap={{ base: '1rem' }}
        mb={{ md: '1rem' }}
      >
        <Text
          marginLeft='1rem'
          fontSize='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          © 2024 Design and Developed by <strong>Yane Ully</strong>
        </Text>

        <Box p='0 1rem 1rem 0'>
          {location.pathname !== '/' && (
            <Flex
              flexDirection='row'
              justifyContent='flex-start'
              paddingLeft='1rem'
            >
              <Link
                href='https://www.linkedin.com/in/yane-ully-martins/'
                isExternal
                onMouseEnter={() => setHovered('linkedin')}
                onMouseLeave={() => setHovered(null)}
              >
                <Box as='span' mr='1rem'>
                  <box-icon
                    name='linkedin'
                    type='logo'
                    size='sm'
                    color={hovered === 'linkedin' ? hoverColor : initialColor}
                  ></box-icon>
                </Box>
              </Link>

              <Link
                href='https://github.com/YaneUlly'
                isExternal
                onMouseEnter={() => setHovered('github')}
                onMouseLeave={() => setHovered(null)}
              >
                <Box as='span' mr='1rem'>
                  <box-icon
                    name='github'
                    type='logo'
                    size='sm'
                    color={hovered === 'github' ? hoverColor : initialColor}
                  ></box-icon>
                </Box>
              </Link>

              <Link
                href='mailto:yaneully@gmail.com'
                isExternal
                onMouseEnter={() => setHovered('envelope')}
                onMouseLeave={() => setHovered(null)}
              >
                <Box as='span'>
                  <box-icon
                    name='envelope'
                    size='sm'
                    color={hovered === 'envelope' ? hoverColor : initialColor}
                  ></box-icon>
                </Box>
              </Link>
            </Flex>
          )}
        </Box>
      </Flex>
    </div>
  );
}

export default Footer;
