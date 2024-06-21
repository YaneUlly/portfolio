import { useState, useEffect } from 'react';
import Volleybomb from '../../assets/webdevprojects/Volleybomb.png';
import { Flex, Text, Box, Image, Button, Link, Thead } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { Table, Tbody, Tr, Td, Th, TableContainer } from '@chakra-ui/react';

function VolleyBombProject() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'pitch', label: 'Pitch' },
    { id: 'challenge', label: 'Tech Challenge' },
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
        color='#CCCCCC'
        m='2rem 0 0 2rem'
      >
        <BreadcrumbItem>
          <BreadcrumbLink href='/portfolio'>Portfolio</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/portfolio/webdevelopment'>
            Web Development Work
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='/portfolio/webdevelopment/volleybombproject'>
            VolleyBomb Project
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Text fontSize={{ base: '3rem', md: '3.8rem' }} m='3rem 0 0 2rem'>
        VolleyBomb Game
      </Text>

      <Text m='0 0 4rem 2rem'>A fun and dynamic game.</Text>

      <Image src={Volleybomb} alt='millennium-logo' width='80%' ml='8rem' />

      <Flex flexDirection='row'>
        <Box m='2rem 0 0 8rem' flex='1' maxWidth='300px'>
          <UnorderedList
            styleType='none'
            spacing='3'
            fontWeight='600'
            fontSize='1.2rem'
          >
            {sections.map(section => (
              <ListItem key={section.id}>
                <Link
                  href={`#${section.id}`}
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

        <Box m='2rem 12rem 1.5rem 0' flex='2'>
          <Text id='overview' fontSize='2rem' fontWeight='600' mb='1rem'>
            Overview
          </Text>
          <Text mb='0.8rem'>
            For this project, I needed to create a{' '}
            <strong>
              browser-based game using HTML, CSS, JavaScript, DOM manipulation,
              and Object-Oriented Programming (OOP)
            </strong>
            . We could choose any game idea we wanted at the time, but it haded
            to meet the technical requirements.
          </Text>

          <TableContainer m='1.5rem 0 1rem 0'>
            <Table variant='simple' size='sm'>
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
            <Link href='https://volleybomb.netlify.app/' isExternal>
              <Button
                variant='outline'
                borderWidth='0.1rem'
                borderColor='black'
                mt='2rem'
                p='2rem 2rem'
                cursor='pointer'
                mb='1rem'
                _hover={{
                  bgColor: '#101010',
                  color: '#FFFFFF',
                }}
              >
                Visit game
              </Button>
            </Link>

            <Link
              href='https://github.com/JuanRassa/Ironhack-Module-1-VolleyBomb-Game'
              isExternal
            >
              <Button
                variant='outline'
                borderWidth='0.1rem'
                borderColor='black'
                mt='2rem'
                p='2rem 2rem'
                cursor='pointer'
                mb='1rem'
                _hover={{
                  bgColor: '#101010',
                  color: '#FFFFFF',
                }}
              >
                Visit repo
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>

      <Box p='2rem 10rem 1.5rem 8rem'>
        <Text id='pitch' fontSize='2rem' fontWeight='600' mb='1rem'>
          Pitch idea
        </Text>
        <Text mb='0.8rem'>
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

      <Box p='1rem 10rem 1.5rem 8rem'>
        <Text id='challenge' fontSize='2rem' fontWeight='600' mb='1rem'>
          Tech Challenge
        </Text>
        <Text mb='0.8rem'>
          The most important technical challenge we faced was to control the
          ball in therms of logic:
        </Text>
        <UnorderedList mb='1.2rem'>
          <ListItem>The movement.</ListItem>
          <ListItem>Direction.</ListItem>
          <ListItem>Interaction between the ball and players.</ListItem>
        </UnorderedList>
        <Text mb='0.8rem'>
          We overcame this looking into a lot of repos and videos that helped us
          to manage the control of the ball.
        </Text>
      </Box>

      <Box p='1rem 10rem 1.5rem 8rem'>
        <Text id='mistakes' fontSize='2rem' fontWeight='600' mb='1rem'>
          Mistakes
        </Text>
        <Text mb='0.8rem'>
          The biggest mistake we made was{' '}
          <strong>the way we approached to the logic of the ball</strong>, witch
          led us to more confusion and mistakes with the code. Also, another
          mistake that we made was to{' '}
          <strong>work on an unnecessary class</strong>, but soon as we realized
          we could manage and rearrange the code.
        </Text>
      </Box>

      <Box p='1rem 10rem 1.5rem 8rem'>
        <Text id='learnings' fontSize='2rem' fontWeight='600' mb='1rem'>
          Learnings
        </Text>
        <Text mb='0.8rem'>
          After some redundant code that we made, we understood the{' '}
          <strong>
            importance of discover what we want to achieve first, planning it
            and then start the code.
          </strong>
        </Text>
      </Box>
    </div>
  );
}

export default VolleyBombProject;
