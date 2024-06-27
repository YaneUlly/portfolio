import { useState, useEffect } from 'react';
import Agora from '../../assets/webdevprojects/Agora.png';
import Acervo from '../../assets/webdevprojects/Acervo.png';
import Volleybomb from '../../assets/webdevprojects/Volleybomb.png';
import { Flex, Text, Box, Image, Button, Link } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';

function AgoraProject() {
  const [activeSection, setActiveSection] = useState('');

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
        color='#CCCCCC'
        m='2rem 0 0 2rem'
      >
        <BreadcrumbItem>
          <BreadcrumbLink href='/portfolio'>Portfolio</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='/portfolio/webdevelopment/volleybombproject'>
            Agora Project
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Text
        fontSize={{ base: '2.8rem', md: '3.8rem' }}
        m={{ base: '2rem 0 0 1rem', xl: '3rem 0 0 2rem' }}
      >
        Ágora Application
      </Text>

      <Text m={{ base: '0 1rem 2rem 1rem', xl: '0 0 4rem 2rem' }}>
        A platform for those who loves and enjoy concerts around the world.
      </Text>

      <Image
        src={Agora}
        alt='agora-logo'
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

        <Box
          m={{ base: '2.2rem 1rem 1.5rem 1rem', xl: '2rem 12rem 1.5rem 0' }}
          flex={{ xl: '2' }}
        >
          <Text id='overview' fontSize='2rem' fontWeight='600' mb='1rem'>
            Overview
          </Text>
          <Text mb='0.8rem'>
            For this study case we needed to create a{' '}
            <strong>Single Page Application (SPA)</strong>, using{' '}
            <strong>React</strong>, consisting of multiple views. The React
            application should be{' '}
            <strong>
              integrated with a mock backend(created by ourselves) and an
              external API
            </strong>
            . It also{' '}
            <strong>
              should perform all CRUD (Create, Read, Update, Delete) operations
              on that API
            </strong>
            .
          </Text>

          <TableContainer
            m={{ xl: '1.5rem 0 1rem 0' }}
            p={{ base: '0 0 1rem 0', md: '0' }}
            whiteSpace={{ base: 'nowrap', xl: 'normal' }}
            wordWrap='break-word'
          >
            <Table variant='simple' size='sm'>
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
                  <Td>HTML, CSS, JavaScript, React</Td>
                </Tr>
                <Tr>
                  <Td>Tools</Td>
                  <Td>Figma, Visual Studio Code, Git</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Box display='flex' flexDirection='row' gap='1.5rem'>
            <Link href='https://agoragigs.netlify.app/' isExternal>
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
                Visit website
              </Button>
            </Link>

            <Link href='https://github.com/JuanRassa/Gig-Hub-Groove' isExternal>
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

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text id='pitch' fontSize='2rem' fontWeight='600' mb='1rem'>
          Pitch idea
        </Text>
        <Text mb='0.8rem'>
          For our application, we aimed to establish{' '}
          <strong>
            a central hub for users to effortlessly discover concerts and
            events, both locally and globally
          </strong>
          . We also envisioned a{' '}
          <strong>
            dedicated space for emerging artists to showcase and promote their
            concerts or new festivals
          </strong>
          . To achieve this, we utilized an external database for renowned
          artists and festivals worldwide and developed a mock database
          specifically for independent artists, enabling CRUD operations.
        </Text>
        <Text mb='0.8rem'>
          This led to the creation of the <strong>Trendy space</strong>, where
          users can easily search for events around them and apply filters such
          as location, artist, date, event type, and musical genre.
          Additionally, we introduced the <strong>Independent space</strong>,
          empowering users and new artists to create, edit, and delete their
          events, providing a dynamic platform for emerging talent.
        </Text>
      </Box>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text id='challenge' fontSize='2rem' fontWeight='600' mb='1rem'>
          Tech Challenge
        </Text>
        <Text mb='0.8rem'>
          Our primary technical challenge revolved around effectively{' '}
          <strong>managing numerous states</strong> within our code,
          particularly the dynamic states within forms. To address these
          challenges, we made the decision to utilize <strong>Context</strong>,
          even though it wasnt covered in our coursework at the moment.
        </Text>
      </Box>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text id='mistakes' fontSize='2rem' fontWeight='600' mb='1rem'>
          Mistakes
        </Text>
        <Text mb='0.8rem'>
          In this project, we encountered a couple of challenges. Initially, we
          unintentionally created <strong>redundant components</strong> when
          establishing the context for event creation and editing. Despite both
          functionalities sharing the same underlying code with minor
          variations, we opted to separate them into distinct components. In
          hindsight, consolidating them into a single component would have been
          more efficient.
        </Text>
        <Text mb='0.8rem'>
          Another lesson learned was our initial use of{' '}
          <strong>Material UI</strong>. We began with this framework but later
          decided to defer styling until a later stage. We found that the
          learning curve for Material UI was relatively long given our tight
          project timeline, prompting us to seek a more straightforward styling
          solution.
        </Text>
      </Box>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text id='learnings' fontSize='2rem' fontWeight='600' mb='1rem'>
          Learnings
        </Text>
        <Text mb='0.8rem'>
          To address a technical challenge, we proactively learned how to work
          with <strong>Context</strong>, significantly improving code
          organization and streamlining the passage of values across components
          and pages.
        </Text>
        <Text mb='0.8rem'>
          In managing user login status without a backend implementation, we
          utilized <strong>window session storage</strong>. This decision
          ensured essential user information was readily available for
          operations within our application.
        </Text>
        <Text mb='0.8rem'>
          Additionally, we adopted the <strong>Chakra library</strong> to
          expedite styling. Given the project relatively short timeframe,
          leveraging Chakra proved invaluable in achieving aesthetically
          pleasing and efficient design.
        </Text>
      </Box>

      <Box p={{ base: '1.5rem 1rem 2rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}>
        <Text
          id='results'
          fontSize='1.8rem'
          fontWeight='600'
          mb='1rem'
          color='#cccccc'
        >
          more projects
        </Text>
        <Text id='results' fontSize='2rem' fontWeight='600' mb='1rem'>
          while you are here?
        </Text>
        <Flex flexDirection={{ base: 'column', md: 'row' }}>
          <Link href='/portfolio/webdevelopment/acervoproject'>
            <Box
              m={{ base: '1rem', xl: '2rem 0 1rem 6rem' }}
              maxWidth={{ base: '90%', xl: '80%' }}
            >
              <img src={Acervo} />
              <Text fontWeight='600' mt='0.8rem'>
                Acervo Project
              </Text>
            </Box>
          </Link>
          <Link href='/portfolio/webdevelopment/volleybombproject'>
            <Box
              m={{ base: '1rem', xl: '2rem 0 1rem 6rem' }}
              maxWidth={{ base: '90%', xl: '80%' }}
            >
              <img src={Volleybomb} />
              <Text fontWeight='600' mt='0.8rem'>
                Volleybomb Project
              </Text>
            </Box>
          </Link>
        </Flex>
      </Box>
    </div>
  );
}

export default AgoraProject;
