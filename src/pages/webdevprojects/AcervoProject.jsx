import { useState, useEffect } from 'react';
import Acervo from '../../assets/webdevprojects/Acervo.png';
import Agora from '../../assets/webdevprojects/Agora.png';
import Volleybomb from '../../assets/webdevprojects/Volleybomb.png';
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

function AcervoProject() {
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
        m='2rem 0 0 1rem'
      >
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to='/portfolio'>Portfolio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <Link to='/portfolio/webdevelopment/acervoproject'>
              Acervo Project
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Text
        fontSize={{ base: '2.8rem', md: '3.8rem' }}
        m={{ base: '2rem 0 0 1rem', xl: '3rem 0 0 2rem' }}
        color={
          colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
        }
      >
        Acervo Application
      </Text>

      <Text
        m={{ base: '0 1rem 2rem 1rem', xl: '0 0 4rem 2rem' }}
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
        An educational coffee community.
      </Text>

      <Image
        src={Acervo}
        alt='acervo-logo'
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
            For this study case the project needed to have{' '}
            <strong>
              a SPA frontend, built with React, consisting of multiple views and
              implementing all CRUD actions
            </strong>
            . Have a{' '}
            <strong>
              REST API backend built with ExpressJS, MongoDB, and, Mongoose,
            </strong>{' '}
            that our React app will communicate with. Have a REST API backend{' '}
            <strong>
              with routes that perform all CRUD actions for at least one model
            </strong>
            (excluding the user model). Have <strong>3 database models</strong>{' '}
            or more. Having one model for users is the first step. The other two
            (or more) models should represent the main functionality of the app.
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
                  <Td>2024</Td>
                </Tr>
                <Tr>
                  <Td>Languages</Td>
                  <Td>HTML, CSS, JavaScript, React, ExpressJs, MongoDB</Td>
                </Tr>
                <Tr>
                  <Td>Tools</Td>
                  <Td>Figma, Visual Studio Code, Git, Notion</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Box display='flex' flexDirection='row' gap='1.5rem'>
            <Link to='https://acervohub.netlify.app/' isExternal>
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
                Visit website
              </Button>
            </Link>

            <Link to='https://github.com/YaneUlly/acervo-front' isExternal>
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
          It is an <strong>educational place</strong> designed for coffee
          enthusiasts eager to learn more about the world of coffee. It serves
          as a <strong>collaborative platform</strong> where individuals can
          share their favorite recipes, coffee discoveries, and innovative
          ideas. Moreover, users have the capability to track their learning
          progress, save cherished recipes, and curate a personalized coffee
          wishlist.
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
          My technical challenges were:
        </Text>
        <UnorderedList
          mb='1.2rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          <ListItem>Find a Coffee API.</ListItem>
          <ListItem>Visualize the schemas and relations.</ListItem>
          <ListItem>Coffee Recommendation for the Quiz.</ListItem>
          <ListItem>Creating the Wishlist.</ListItem>
        </UnorderedList>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Initially, I struggled to find an{' '}
          <strong>
            API related to coffee that would truly provide meaningful content
          </strong>{' '}
          for my application. However, with <strong>persistence</strong>, I
          eventually discovered a high-quality API that met my needs.
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          When creating the Quiz feature, I encountered an obstacle. I wanted to
          recommend coffee blends created by my community, but these were stored
          in a private database while the Quiz was accessible to the public. To
          solve this,{' '}
          <strong>I had to think creatively and devise a solution</strong>.
          Ultimately, I decided to create a mechanism in my backend where every
          time a community coffee blend was added, a copy would be generated in
          a public database, ensuring accessibility for the Quiz.
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
          In the beginning, I found it confusing to determine the{' '}
          <strong>structure of my data</strong>. I spent a significant amount of
          time grappling with this issue before realizing that I needed to move
          forward with building a basic structure. I understood that{' '}
          <strong>I could always refine and improve</strong> it as my project
          progressed and my requirements evolved.
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Implementing the Wishlist feature presented its own set of challenges.
          Initially, <strong>I approached it with the wrong mindset</strong>.
          However, after researching <strong>examples online</strong> and
          gaining a better understanding of the logic behind wishlists, I
          realized that I had been <strong>overcomplicating</strong> the
          process. With this insight, I was able to overcome the challenge and
          successfully implement the feature.
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
          I gained several insights and lessons while working on my project. One
          significant realization was that I was investing too much time in
          developing the backend. To address this, I adopted a different
          approach by{' '}
          <strong>working iteratively between the backend and frontend</strong>.
          Whenever I needed to implement a new feature in the frontend, I would
          switch to the backend, develop and test it, and then return to the
          frontend to integrate it.{' '}
          <strong>
            This approach helped streamline the development process and ensure
            better coordination between the frontend and backend components.
          </strong>
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Before embarking on the project, my teacher advised us to{' '}
          <strong>utilize more branches</strong> than we were accustomed to in
          previous projects. Following this advice, I ended up working with{' '}
          <strong>18 branches</strong>, which proved to be beneficial.{' '}
          <strong>
            It allowed me to better organize my project and also provided
            valuable practice in working with a more structured branching
            strategy
          </strong>
          .
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Towards the end of the project, I found myself with some extra time on
          hand. I decided to utilize this opportunity to explore and learn
          something new. I delved into <strong>Framer Motion</strong> and
          experimented with <strong>adding animations to my application</strong>
          . This experience not only enhanced the visual appeal of my project
          but also expanded my skill set by familiarizing myself with a new
          technology.
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
          <Link to='/portfolio/webdevelopment/volleybombproject'>
            <Box
              m={{ base: '1rem', xl: '2rem 0 1rem 6rem' }}
              maxWidth={{ base: '90%', xl: '80%' }}
            >
              <img src={Volleybomb} />
              <Text
                fontWeight='600'
                mt='0.8rem'
                color={
                  colorMode === 'dark'
                    ? theme.colors.dark.text
                    : theme.colors.light.text
                }
              >
                VolleyBomb Project
              </Text>
            </Box>
          </Link>
        </Flex>
      </Box>
    </div>
  );
}

export default AcervoProject;
