import { useState } from 'react';
import {
  Flex,
  Text,
  Box,
  Button,
  Image,
  Link,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import Acervo from '../assets/webdevprojects/Acervo.png';
import Agora from '../assets/webdevprojects/Agora.png';
import VolleyBomb from '../assets/webdevprojects/Volleybomb.png';
import Choclo from '../assets/uxuiprojects/ChocloWebsite.png';
import Millennium from '../assets/uxuiprojects/Millenium.png';
import Fabrica from '../assets/uxuiprojects/Fabrica.png';

function Portfolio() {
  const [selectedOption, setSelectedOption] = useState('All');
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const handleOptionClick = option => {
    setSelectedOption(option);
  };

  const renderProjects = () => {
    switch (selectedOption) {
      case 'Ux/Ui Design':
        return (
          <Box
            display='flex'
            flexDirection={{ base: 'column', xl: 'row' }}
            gap='2rem'
            width='80rem'
          >
            <Link href='/portfolio/uxuidesign/chocloproject'>
              <Box>
                <Image src={Choclo} alt='Choclo Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
                  color={
                    colorMode === 'dark'
                      ? theme.colors.dark.text
                      : theme.colors.light.text
                  }
                >
                  Choclo Project
                </Text>
              </Box>
            </Link>

            <Link href='/portfolio/uxuidesign/millenniumproject'>
              <Box>
                <Image src={Millennium} alt='Millennium Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
                  color={
                    colorMode === 'dark'
                      ? theme.colors.dark.text
                      : theme.colors.light.text
                  }
                >
                  Millennium Project
                </Text>
              </Box>
            </Link>

            <Link href='/portfolio/uxuidesign/fabricaproject'>
              <Box>
                <Image src={Fabrica} alt='Fabrica Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
                  color={
                    colorMode === 'dark'
                      ? theme.colors.dark.text
                      : theme.colors.light.text
                  }
                >
                  Fabrica Project
                </Text>
              </Box>
            </Link>
          </Box>
        );
      case 'Web Development':
        return (
          <Box
            display='flex'
            flexDirection={{ base: 'column', xl: 'row' }}
            gap='2rem'
            width='80rem'
          >
            <Link href='/portfolio/webdevelopment/acervoproject'>
              <Box>
                <Image src={Acervo} alt='Acervo Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
                  color={
                    colorMode === 'dark'
                      ? theme.colors.dark.text
                      : theme.colors.light.text
                  }
                >
                  Acervo Project
                </Text>
              </Box>
            </Link>

            <Link href='/portfolio/webdevelopment/agoraproject'>
              <Box>
                <Image src={Agora} alt='Agora Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
                  color={
                    colorMode === 'dark'
                      ? theme.colors.dark.text
                      : theme.colors.light.text
                  }
                >
                  Agora Project
                </Text>
              </Box>
            </Link>

            <Link href='/portfolio/webdevelopment/volleybombproject'>
              <Box>
                <Image src={VolleyBomb} alt='Volleybomb Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
                  color={
                    colorMode === 'dark'
                      ? theme.colors.dark.text
                      : theme.colors.light.text
                  }
                >
                  Volleybomb Project
                </Text>
              </Box>
            </Link>
          </Box>
        );
      default:
        return (
          <Box
            display='flex'
            flexDirection={{ base: 'column', xl: 'row' }}
            flexWrap={{ xl: 'wrap' }}
            gap='2rem'
            width='60rem'
          >
            <Flex flexDirection='row' gap='2rem'>
              <Link href='/portfolio/webdevelopment/acervoproject'>
                <Box>
                  <Image src={Acervo} alt='Acervo Project' />
                  <Text
                    mt='1rem'
                    fontWeight='600'
                    color={
                      colorMode === 'dark'
                        ? theme.colors.dark.text
                        : theme.colors.light.text
                    }
                  >
                    Acervo Project
                  </Text>
                </Box>
              </Link>

              <Link href='/portfolio/uxuidesign/chocloproject'>
                <Box>
                  <Image src={Choclo} alt='Choclo Project' />
                  <Text
                    mt='1rem'
                    fontWeight='600'
                    color={
                      colorMode === 'dark'
                        ? theme.colors.dark.text
                        : theme.colors.light.text
                    }
                  >
                    Choclo Project
                  </Text>
                </Box>
              </Link>
            </Flex>

            <Flex flexDirection='row' gap='2rem'>
              <Link href='/portfolio/webdevelopment/agoraproject'>
                <Box>
                  <Image src={Agora} alt='Agora Project' />
                  <Text
                    mt='1rem'
                    fontWeight='600'
                    color={
                      colorMode === 'dark'
                        ? theme.colors.dark.text
                        : theme.colors.light.text
                    }
                  >
                    Agora Project
                  </Text>
                </Box>
              </Link>

              <Link href='/portfolio/uxuidesign/millenniumproject'>
                <Box>
                  <Image src={Millennium} alt='Millennium Project' />
                  <Text
                    mt='1rem'
                    fontWeight='600'
                    color={
                      colorMode === 'dark'
                        ? theme.colors.dark.text
                        : theme.colors.light.text
                    }
                  >
                    Millennium Project
                  </Text>
                </Box>
              </Link>
            </Flex>

            <Flex flexDirection='row' gap='2rem'>
              <Link href='/portfolio/webdevelopment/volleybombproject'>
                <Box>
                  <Image src={VolleyBomb} alt='Volleybomb Project' />
                  <Text
                    mt='1rem'
                    fontWeight='600'
                    color={
                      colorMode === 'dark'
                        ? theme.colors.dark.text
                        : theme.colors.light.text
                    }
                  >
                    Volleybomb Project
                  </Text>
                </Box>
              </Link>

              <Link href='/portfolio/uxuidesign/fabricaproject'>
                <Box>
                  <Image src={Fabrica} alt='Fabrica Project' />
                  <Text
                    mt='1rem'
                    fontWeight='600'
                    color={
                      colorMode === 'dark'
                        ? theme.colors.dark.text
                        : theme.colors.light.text
                    }
                  >
                    Fabrica Project
                  </Text>
                </Box>
              </Link>
            </Flex>
          </Box>
        );
    }
  };
  return (
    <div>
      <Box
        margin={{
          base: '3rem 1rem 3rem 1rem',
          lg: '3rem 2rem 3rem 2rem',
          xl: '5rem 8rem 5rem 5rem',
        }}
      >
        <Text
          fontSize={{ base: '1.8rem', lg: '3.8rem' }}
          color={
            colorMode === 'dark' ? theme.colors.dark.h2 : theme.colors.light.h2
          }
          height='55px'
        >
          come take a look into
        </Text>
        <Text
          fontSize={{ base: '2.2rem', md: '5rem' }}
          fontWeight='600'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          my work here...
        </Text>
        <Text
          mt={{ base: '1rem', lg: '0' }}
          paddingRight={{ base: '0', lg: '37rem' }}
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Below, you will find a selection of my projects and experiences,
          including commissioned work and some projects completed during my
          courses.
        </Text>
      </Box>

      <Flex
        justifyContent='center'
        gap={{ base: '4', lg: '8' }}
        m={{
          base: '2rem 0 2rem 0',
          lg: '8rem 0 4rem 0',
        }}
      >
        {['All', 'Ux/Ui Design', 'Web Development'].map(option => (
          <Text
            key={option}
            fontSize='1.2rem'
            color={
              selectedOption === option
                ? colorMode === 'dark'
                  ? theme.colors.dark.h1
                  : theme.colors.light.h1
                : colorMode === 'dark'
                ? theme.colors.dark.h2
                : theme.colors.light.h2
            }
            borderBottom={
              selectedOption === option
                ? `2px solid ${
                    colorMode === 'dark'
                      ? theme.colors.dark.h1
                      : theme.colors.light.h1
                  }`
                : 'none'
            }
            cursor='pointer'
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </Text>
        ))}
      </Flex>
      <Flex
        justifyContent='center'
        gap='8'
        m={{
          base: '3rem 1rem 3rem 1rem',
          lg: '3rem 2rem 4rem 2rem',
          xl: '3rem 0 8rem 0',
        }}
      >
        {renderProjects()}
      </Flex>

      <Box
        margin={{
          base: '5rem 1rem 3rem 1rem',
          lg: '5rem 2rem 3rem 2rem',
          xl: '5rem 8rem 5rem 5rem',
        }}
      >
        <Text
          fontSize={{ base: '1.8rem', lg: '2rem' }}
          color={
            colorMode === 'dark' ? theme.colors.dark.h2 : theme.colors.light.h2
          }
          height='25px'
        >
          inspired by my work?
        </Text>
        <Text
          fontSize={{ base: '2.2rem', md: '3.8rem' }}
          fontWeight='600'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          come say hi :)
        </Text>
        <Text
          mt={{ base: '1rem', lg: '0' }}
          paddingRight={{ base: '0', lg: '37rem' }}
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          If you think my skills and projects align with what you are looking
          for, I would love to hear from you. Let's connect and discuss how I
          can contribute to your team.
        </Text>

        <Button
          variant='outline'
          borderWidth='0.1rem'
          borderColor={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
          bgColor={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
          color={
            colorMode === 'dark' ? theme.colors.dark.bg : theme.colors.light.bg
          }
          mt='1rem'
          p='1rem 2rem'
          cursor='pointer'
          mb='1rem'
          _hover={{
            bgColor:
              colorMode === 'dark'
                ? theme.colors.dark.bg
                : theme.colors.light.bg,
            color:
              colorMode === 'dark'
                ? theme.colors.dark.h1
                : theme.colors.light.h1,
          }}
        >
          Contact
        </Button>
      </Box>
    </div>
  );
}

export default Portfolio;
