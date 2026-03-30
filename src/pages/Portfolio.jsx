import { useState } from 'react';
import {
  Flex,
  Text,
  Box,
  Button,
  Image,
  useColorMode,
  useTheme,
  SimpleGrid,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Acervo from '../assets/webdevprojects/Acervo.png';
import Agora from '../assets/webdevprojects/Agora.png';
import VolleyBomb from '../assets/webdevprojects/Volleybomb.png';
import Choclo from '../assets/uxuiprojects/ChocloWebsite.png';
import Remynd from '../assets/productowner/hero-photos.png';
import Millennium from '../assets/uxuiprojects/Millenium.png';
import Fabrica from '../assets/uxuiprojects/Fabrica.png';

function Portfolio() {
  const [selectedOption, setSelectedOption] = useState('All');
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const textColor =
    colorMode === 'dark' ? theme.colors.dark.text : theme.colors.light.text;

  const h1Color =
    colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1;

  const h2Color =
    colorMode === 'dark' ? theme.colors.dark.h2 : theme.colors.light.h2;

  const projects = [
    {
      title: 'Acervo Project',
      image: Acervo,
      link: '/portfolio/webdevelopment/acervoproject',
      category: 'Web Development',
    },
    {
      title: 'Agora Project',
      image: Agora,
      link: '/portfolio/webdevelopment/agoraproject',
      category: 'Web Development',
    },
    {
      title: 'Volleybomb Project',
      image: VolleyBomb,
      link: '/portfolio/webdevelopment/volleybombproject',
      category: 'Web Development',
    },
    {
      title: 'Choclo Project',
      image: Choclo,
      link: '/portfolio/uxuidesign/chocloproject',
      category: 'Ux/Ui Design',
    },
    {
      title: 'Fabrica Project',
      image: Fabrica,
      link: '/portfolio/uxuidesign/fabricaproject',
      category: 'Ux/Ui Design',
    },
    {
      title: 'Millennium Project',
      image: Millennium,
      link: '/portfolio/uxuidesign/millenniumproject',
      category: 'Ux/Ui Design',
    },
    {
      title: 'Remynd',
      image: Remynd,
      link: '/portfolio/productowner/remyndproduct',
      category: 'Product Owner',
    },
  ];

  const filteredProjects =
    selectedOption === 'All'
      ? projects
      : projects.filter(project => project.category === selectedOption);

  return (
    <Box>
      <Box
        margin={{
          base: '3rem 1rem 3rem 1rem',
          lg: '3rem 2rem 3rem 2rem',
          xl: '5rem 8rem 5rem 5rem',
        }}
      >
        <Text fontSize={{ base: '1.8rem', lg: '3.8rem' }} color={h2Color}>
          come take a look into
        </Text>

        <Text fontSize={{ base: '2.2rem', md: '5rem' }} fontWeight='600' color={h1Color}>
          my work here...
        </Text>

        <Text
          mt={{ base: '1rem', lg: '0' }}
          paddingRight={{ base: '0', lg: '37rem' }}
          color={textColor}
        >
          Below, you will find a selection of my projects and experiences,
          including commissioned work and some projects completed during my
          courses.
        </Text>
      </Box>

      <Flex
        justifyContent='center'
        flexWrap='wrap'
        gap={{ base: '4', lg: '8' }}
        m={{ base: '2rem 0', lg: '8rem 0 4rem 0' }}
      >
        {['All', 'Ux/Ui Design', 'Web Development', 'Product Owner'].map(option => (
          <Text
            key={option}
            fontSize='1.2rem'
            color={selectedOption === option ? h1Color : h2Color}
            borderBottom={selectedOption === option ? `2px solid ${h1Color}` : 'none'}
            cursor='pointer'
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </Text>
        ))}
      </Flex>

      <Box
        m={{
          base: '3rem 1rem 3rem 1rem',
          lg: '3rem 2rem 4rem 2rem',
          xl: '3rem 5rem 8rem 5rem',
        }}
      >
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} spacing='2rem'>
          {filteredProjects.map(project => (
            <Link key={project.title} to={project.link}>
              <Box>
                <Image
                  src={project.image}
                  alt={project.title}
                  w='100%'
                  borderRadius='0.5rem'
                />
                <Text mt='1rem' fontWeight='600' color={textColor}>
                  {project.title}
                </Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>

      <Box
        margin={{
          base: '5rem 1rem 3rem 1rem',
          lg: '5rem 2rem 3rem 2rem',
          xl: '5rem 8rem 5rem 5rem',
        }}
      >
        <Text fontSize={{ base: '1.8rem', lg: '2rem' }} color={h2Color}>
          inspired by my work?
        </Text>

        <Text fontSize={{ base: '2.2rem', md: '3.8rem' }} fontWeight='600' color={h1Color}>
          come say hi :)
        </Text>

        <Text
          mt={{ base: '1rem', lg: '0' }}
          paddingRight={{ base: '0', lg: '37rem' }}
          color={textColor}
        >
          If you think my skills and projects align with what you are looking
          for, I would love to hear from you. Let's connect and discuss how I
          can contribute to your team.
        </Text>

        <Link to='/contact'>
          <Button
            variant='outline'
            borderWidth='0.1rem'
            borderColor={h1Color}
            bgColor={h1Color}
            color={colorMode === 'dark' ? theme.colors.dark.bg : theme.colors.light.bg}
            mt='1rem'
            p='1rem 2rem'
            cursor='pointer'
            mb='1rem'
            _hover={{
              bgColor:
                colorMode === 'dark'
                  ? theme.colors.dark.bg
                  : theme.colors.light.bg,
              color: h1Color,
            }}
          >
            Contact
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Portfolio;