import { useState, useEffect } from 'react';
import Volleybomb from '../../assets/webdevprojects/Volleybomb.png';
import Agora from '../../assets/webdevprojects/Agora.png';
import Acervo from '../../assets/webdevprojects/Acervo.png';
import {
  Flex,
  Text,
  Box,
  Image,
  Button,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function VolleyBombProject() {
  const [activeSection, setActiveSection] = useState('');

  const { colorMode } = useColorMode();
  const theme = useTheme();

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'pitch', label: 'Pitch' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'mistakes', label: 'Mistakes' },
    { id: 'learnings', label: 'Learnings' },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let currentSection = '';
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element && element.offsetTop <= scrollPosition) {
        currentSection = section.id;
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Breadcrumb
        fontWeight='medium'
        fontSize='sm'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
        m={{ base: '1rem 0 0 1rem', xl: '2rem 0 0 2rem' }}
      >
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to='/portfolio'>Portfolio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <Link to='/portfolio/webdevelopment/volleybombproject'>
              VolleyBomb Project
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Text
        fontSize={{ base: '2.8rem', md: '3.8rem' }}
        m='3rem 0 0 2rem'
        color={
          colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
        }
      >
        VolleyBomb Game
      </Text>

      <Text
        m={{ base: '0 1rem 2rem 1rem', xl: '0 0 4rem 2rem' }}
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
        A fun and dynamic game.
      </Text>

      <Image
        src={Volleybomb}
        alt='volleybomb-logo'
        width={{ base: '90%', xl: '80%' }}
        ml={{ base: '1rem', xl: '8rem' }}
      />

      <Flex flexDirection={{ base: 'column', xl: 'row' }}>
        <Box
          m={{ base: '2rem 0 0 0', xl: '2rem 0 0 8rem' }}
          flex={{ xl: '1' }}
          maxWidth={{ base: '100%', xl: '300px' }}
          display={{ base: 'flex', xl: 'block' }}
          flexDirection={{ base: 'row' }}
        >
          <UnorderedList
            display={{ base: 'flex', xl: 'block' }}
            flexDirection={{ base: 'row', xl: 'column' }}
            justifyContent={{ base: 'flex-start', md: 'none' }}
            overflowX={{ base: 'auto', xl: 'visible' }}
            gap={{ base: '1rem' }}
            pb={{ base: '0.8rem' }}
            styleType='none'
            spacing={{ xl: '3' }}
            fontWeight='600'
            fontSize='1.2rem'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.h3
                : theme.colors.light.h3
            }
          >
            {sections.map(section => (
              <ListItem key={section.id}>
                <Link
                  to={`#${section.id}`}
                  _hover={{ color: '#E7CE35' }}
                  style={{
                    color: activeSection === section.id ? '#E7CE35' : '',
                    textDecoration:
                      activeSection === section.id ? 'underline' : 'none',
                  }}
                >
                  {section.label}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box
          m={{ base: '2.2rem 1rem 1.5rem 1rem', xl: '2rem 12rem 1.5rem 0' }}
          flex={{ xl: '2' }}
        >
          <Text
            id='overview'
            fontSize='2rem'
            fontWeight='600'
            mb='1rem'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.h1
                : theme.colors.light.h1
            }
          >
            Overview
          </Text>
          <Text
            mb='0.8rem'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          >
            For this project, I needed to create a{' '}
            <strong>
              browser-based game using HTML, CSS, JavaScript, DOM manipulation,
              and Object-Oriented Programming (OOP)
            </strong>
            . We could choose any game idea we wanted at the time, but it haded
            to meet the technical requirements.
          </Text>

          <TableContainer
            m={{ xl: '1.5rem 0 1rem 0' }}
            p={{ base: '0 0 1rem 0', md: '0' }}
            whiteSpace={{ base: 'nowrap', xl: 'normal' }}
            wordWrap='break-word'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          >
            <Table variant='simple' size='sm' mt='1rem'>
              <Tbody>
                <Tr>
                  <Td>Type of Work</Td>
                  <Td>Study Project</Td>
                </Tr>
                <Tr>
                  <Td>Year</Td>
                  <Td>2023</Td>
                </Tr>
                <Tr>
                  <Td>Languages</Td>
                  <Td>HTML, CSS, JavaScript</Td>
                </Tr>
                <Tr>
                  <Td>Tools</Td>
                  <Td>Figma, Visual Studio Code, Git</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Box display='flex' flexDirection='row' gap='1.5rem'>
            <Link to='https://volleybomb.netlify.app/' isExternal>
              <Button
                variant='outline'
                borderWidth='0.1rem'
                borderColor={
                  colorMode === 'dark'
                    ? theme.colors.dark.text
                    : theme.colors.light.text
                }
                bgColor={
                  colorMode === 'dark'
                    ? theme.colors.dark.bg
                    : theme.colors.light.bg
                }
                mt='2rem'
                p='2rem 2rem'
                cursor='pointer'
                mb='1rem'
                _hover={{
                  bgColor:
                    colorMode === 'dark'
                      ? theme.colors.dark.h1
                      : theme.colors.light.h1,
                  color:
                    colorMode === 'dark'
                      ? theme.colors.dark.bg
                      : theme.colors.light.bg,
                }}
              >
                Visit game
              </Button>
            </Link>

            <Link
              to='https://github.com/JuanRassa/Ironhack-Module-1-VolleyBomb-Game'
              isExternal
            >
              <Button
                variant='outline'
                borderWidth='0.1rem'
                borderColor={
                  colorMode === 'dark'
                    ? theme.colors.dark.text
                    : theme.colors.light.text
                }
                bgColor={
                  colorMode === 'dark'
                    ? theme.colors.dark.bg
                    : theme.colors.light.bg
                }
                mt='2rem'
                p='2rem 2rem'
                cursor='pointer'
                mb='1rem'
                _hover={{
                  bgColor:
                    colorMode === 'dark'
                      ? theme.colors.dark.h1
                      : theme.colors.light.h1,
                  color:
                    colorMode === 'dark'
                      ? theme.colors.dark.bg
                      : theme.colors.light.bg,
                }}
              >
                Visit repo
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text
          id='pitch'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          Pitch idea
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          We wanted something dynamic and competitive that combines
          characteristics from other games. So we created{' '}
          <strong>Volleybomb</strong>, witch is an exciting local-multiplayer
          game built with <strong>JavaScript, CSS and HTML</strong>, with a
          Retro Christmas style. <strong>Main idea:</strong> Players will be
          kicking a bomb to each other that will explode if touches the ground
          or if its timer is over. The first player to score 5 points wins. Our
          main inspiration for this game was the classic{' '}
          <strong>Slime-Volley</strong>, and we want it to mix it with something
          related to avoid the explosion of a bomb.
        </Text>
      </Box>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text
          id='challenge'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          Tech Challenge
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          The most important technical challenge we faced was to control the
          ball in therms of logic:
        </Text>
        <UnorderedList
          mb='1.2rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          <ListItem>The movement.</ListItem>
          <ListItem>Direction.</ListItem>
          <ListItem>Interaction between the ball and players.</ListItem>
        </UnorderedList>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          We overcame this looking into a lot of repos and videos that helped us
          to manage the control of the ball.
        </Text>
      </Box>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text
          id='mistakes'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          Mistakes
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          The biggest mistake we made was{' '}
          <strong>the way we approached to the logic of the ball</strong>, witch
          led us to more confusion and mistakes with the code. Also, another
          mistake that we made was to{' '}
          <strong>work on an unnecessary class</strong>, but soon as we realized
          we could manage and rearrange the code.
        </Text>
      </Box>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text
          id='learnings'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          Learnings
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          After some redundant code that we made, we understood the{' '}
          <strong>
            importance of discover what we want to achieve first, planning it
            and then start the code.
          </strong>
        </Text>
      </Box>

      <Box p={{ base: '1.5rem 1rem 2rem 1rem', xl: '2rem 10rem 3.5rem 8rem' }}>
        <Text
          id='results'
          fontSize='1.8rem'
          fontWeight='600'
          color={
            colorMode === 'dark' ? theme.colors.dark.h2 : theme.colors.light.h2
          }
          height='35px'
        >
          more projects
        </Text>
        <Text
          id='results'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          while you are here?
        </Text>
        <Flex flexDirection={{ base: 'column', md: 'row' }}>
          <Link to='/portfolio/webdevelopment/acervoproject'>
            <Box
              m={{ base: '1rem', xl: '2rem 0 1rem 6rem' }}
              maxWidth={{ base: '90%', xl: '80%' }}
            >
              <img src={Acervo} />
              <Text
                fontWeight='600'
                mt='0.8rem'
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
          <Link to='/portfolio/webdevelopment/agoraproject'>
            <Box
              m={{ base: '1rem', xl: '2rem 0 1rem 6rem' }}
              maxWidth={{ base: '90%', xl: '80%' }}
            >
              <img src={Agora} />
              <Text
                fontWeight='600'
                mt='0.8rem'
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
        </Flex>
      </Box>
    </div>
  );
}

export default VolleyBombProject;
