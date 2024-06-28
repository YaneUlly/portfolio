import { Text, Box, Flex, Link } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import '../App.css';

function Footer() {
  const location = useLocation();

  const handleMouseEnter = event => {
    event.currentTarget.firstElementChild.setAttribute('color', '#101010');
  };

  const handleMouseLeave = event => {
    event.currentTarget.firstElementChild.setAttribute('color', '#CCCCCC');
  };

  return (
    <div className='footer'>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        flexDirection={{ base: 'column', md: 'row' }}
        gap={{ base: '1rem' }}
        mb={{ md: '1rem' }}
      >
        <Text marginLeft='1rem' fontSize='0.8rem'>
          © 2024 Design and Developed by Yane Ully
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
              >
                <Box
                  as='span'
                  mr='1rem'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <box-icon
                    name='linkedin'
                    type='logo'
                    size='sm'
                    color='#CCCCCC'
                  ></box-icon>
                </Box>
              </Link>

              <Link href='https://github.com/YaneUlly' isExternal>
                <Box
                  as='span'
                  mr='1rem'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <box-icon
                    name='github'
                    type='logo'
                    size='sm'
                    color='#CCCCCC'
                  ></box-icon>
                </Box>
              </Link>

              <Link href='mailto:yaneully@gmail.com' isExternal>
                <Box
                  as='span'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <box-icon
                    name='envelope'
                    size='sm'
                    color='#CCCCCC'
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
