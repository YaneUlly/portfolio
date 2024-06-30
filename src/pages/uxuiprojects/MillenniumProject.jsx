import { useState, useEffect } from 'react';
import Millennium from '../../assets/uxuiprojects/Millenium.png';
import InvestorsOne from '../../assets/uxuiprojects/InvestorsOne.jpg';
import InvestorsTwo from '../../assets/uxuiprojects/InvestorsTwo.jpg';
import InvestorsThree from '../../assets/uxuiprojects/InvestorsThree.jpg';
import SWOTSantander from '../../assets/uxuiprojects/SWOTSantander.jpg';
import SWOTNovobanco from '../../assets/uxuiprojects/SWOTNovobanco.jpg';
import StoryboardMillennium from '../../assets/uxuiprojects/StoryboardMillennium.png';
import WireframeMillennium from '../../assets/uxuiprojects/WireframeMillennium.jpg';
import StyleGuideMillennium from '../../assets/uxuiprojects/StyleGuideMillennium.png';
import MillenniumFinalUI from '../../assets/uxuiprojects/MillenniumFinalUI.png';
import Choclo from '../../assets/uxuiprojects/ChocloWebsite.png';
import Fabrica from '../../assets/uxuiprojects/Fabrica.png';
import {
  Flex,
  Text,
  Box,
  Image,
  Button,
  Thead,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { Table, Tbody, Tr, Td, Th, TableContainer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function MillenniumProject() {
  const [activeSection, setActiveSection] = useState('');

  const { colorMode } = useColorMode();
  const theme = useTheme();

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'objective', label: 'Objective' },
    { id: 'research', label: 'Research' },
    { id: 'design', label: 'Design' },
    { id: 'results', label: 'Results' },
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
        m='2rem 0 0 1.2rem'
      >
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to='/portfolio'>Portfolio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <Link to='/portfolio/uxuidesign/fabricaproject'>
              Millennium Project
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Text
        fontSize={{ base: '2.8rem', md: '3.8rem' }}
        m={{ base: '2rem 0 0 1rem', xl: '3rem 0 0 1.2rem' }}
        color={
          colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
        }
      >
        Investment Feature
      </Text>

      <Text
        m={{ base: '0 1rem 2rem 1rem', xl: '0 0 4rem 1.2rem' }}
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
        An investiment feature for education resources.
      </Text>

      <Image
        src={Millennium}
        alt='millennium-logo'
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
                <a
                  href={`#${section.id}`}
                  style={{
                    color: activeSection === section.id ? '#E7CE35' : '',
                    textDecoration:
                      activeSection === section.id ? 'underline' : 'none',
                  }}
                >
                  {section.label}
                </a>
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
            This is a case study, which the <strong>objective</strong> was to
            suggest a design modification or a new feature for an existing
            product or website. The <strong>challenge</strong> at hand was to
            create a platform that is both user-friendly and visually appealing
            for individuals who are interested in starting to invest their
            money. The <strong>primary focus</strong> was on making the process
            of investing easy and secure for the user, where they have access an
            education resources, such as articles, webinars, and tutorials, to
            help them improve their investment knowledge and skills.
          </Text>
          <Text
            mb='0.8rem'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          >
            Banco Comercial Português, S.A. (BCP), known as Millennium BCP from
            2004, <strong>is the second largest Portuguese private bank</strong>
            .
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
                  <Td>Client</Td>
                  <Td>Millennium BCP</Td>
                </Tr>
                <Tr>
                  <Td>Year</Td>
                  <Td>2023</Td>
                </Tr>
                <Tr>
                  <Td>Scope of Work</Td>
                  <Td>
                    Ux Research, Ui Design, Prototyping, Information
                    Architecture
                  </Td>
                </Tr>
                <Tr>
                  <Td>Tools</Td>
                  <Td>Figma, Miro, Notion</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Link
            to='https://www.figma.com/proto/A9ixyQT8eUtR65pHODXOJS/Millennium-LP?page-id=0%3A1&type=design&node-id=19-17&viewport=260%2C-585%2C0.09&t=AVRuyqfSTDwgy7iX-1&scaling=scale-down&starting-point-node-id=19%3A17&mode=design'
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
              Visit prototype
            </Button>
          </Link>
        </Box>
      </Flex>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text
          id='problem'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          Problem
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Before diving into research, I wanted to ensure that{' '}
          <strong>my proposal addresses a genuine problem</strong> and{' '}
          <strong>
            is in line with my customers expectations and primary investment
            concerns
          </strong>
          . By validating my proposal upfront, I can ensure that I provide a
          solution that truly meets the needs of my target audience.
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          I came across an insightful article made by a student from Instituto
          Universitário de Lisboa, presenting a research study conducted in
          February until June of 2022.{' '}
          <strong>
            The study surveyed individuals who were more than 18 years old, held
            at least one active bank account, and resided in Portugal
          </strong>
          .
        </Text>
        <Text
          fontWeight='500'
          mb='0.5rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Problem Statement:
        </Text>
        <Box bg='rgba(220, 90, 53, 0.7)' w='100%' p={4}>
          <Text color='black'>
            <strong>
              {' '}
              Novice investors often struggle to find accessible sources of
              information beyond technical literature and professional financial
              analysts, which can be both time-consuming and costly.
            </strong>{' '}
            This makes it challenging for new investors to acquire the necessary
            knowledge and skills to achieve their investment goals.
          </Text>
        </Box>
      </Box>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text
          id='objective'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          Objective
        </Text>
        <Text
          fontWeight='500'
          mb='0.5rem'
          mt='1rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Value Proposition:
        </Text>
        <Box bg='rgba(145, 187, 148, 0.7)' w='100%' p={4}>
          <Text color='black'>
            Millennium has an <strong>online platform</strong> which costumers
            have access an education resources, such as articles, webinars, and
            tutorials,{' '}
            <strong>
              to help them improve their investment knowledge and skills
            </strong>
            .
          </Text>
        </Box>
      </Box>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text
          id='research'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          Research
        </Text>
        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Provisional Personas
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Creating provisional personas based on my assumptions.
        </Text>
        <Box
          maxWidth={{ base: '100%', md: '50%' }}
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          gap='10px'
          alignItems='center'
          marginTop='1rem'
          marginBottom='2rem'
        >
          <img src={InvestorsOne} alt='investor-persona-millennium' />
          <img src={InvestorsTwo} alt='investor-persona-millennium' />
        </Box>

        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          gap='2rem'
        >
          <Box display='flex' flexDirection='column'>
            <Text
              fontSize='1.5rem'
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.h3
                  : theme.colors.light.h3
              }
            >
              User Interviews
            </Text>
            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              After developing my provisional personas, and before proceeding to
              the next research steps, I crafted a script interview, with a
              screener to ensure that I only engaged with individuals meeting my
              research criteria and subsequently, I conducted{' '}
              <strong>street interviews</strong>.
            </Text>
            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              <strong>Interview Insights:</strong>
            </Text>
            <UnorderedList
              mb='1.2rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              <ListItem>
                <strong> My assumption was validated.</strong> Many of the
                people try to study by themselves and consume a lot of materials
                about investments.
              </ListItem>
              <ListItem>
                I also gained additional intelligence about{' '}
                <strong>people that already invest</strong> and continuous to
                look for materials about investments and news on the market.
              </ListItem>
              <ListItem>
                <strong>95% of my participants</strong> would appreciate to use
                a platform with all they need to know about investments.
              </ListItem>
              <ListItem>
                It also highlighted for me that{' '}
                <strong>
                  people prioritize financial security above all else
                </strong>
                , and that this can have a{' '}
                <strong>significant impact on their mental well-being</strong>.
              </ListItem>
            </UnorderedList>

            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              With that I saw the need of one more persona that corresponds with
              the additional intelligence that I gain during the interviews.
            </Text>
          </Box>

          <Box
            maxWidth={{ base: '90%', md: '60%' }}
            display='flex'
            flexDirection='column'
            gap={{ base: 'none', md: '10px' }}
            marginTop={{ md: '2rem' }}
          >
            <img src={InvestorsThree} />
          </Box>
        </Box>

        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Competitive Research
        </Text>
        <Box bg='rgba(145, 187, 148, 0.7)' w='100%' p={4}>
          <Text mb='0.8rem'>
            I have reviewed some important details about my{' '}
            <strong>potential competitors, both direct and indirect,</strong> to
            identify the factors that give their products a competitive
            advantage. Through this process, I was able to distinguish between
            my direct and indirect competitors and conduct a thorough
            benchmarking analysis. As a result, I have categorized{' '}
            <strong>Novo Banco and Santander</strong> as my direct competitors
            since they have already created products in the same area that I am
            interested in developing.
          </Text>
        </Box>

        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Benchmarking Analysis Results
        </Text>

        <Box overflowX='auto' mt='1.5rem'>
          <TableContainer
            color={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          >
            <Table variant='simple' size='sm'>
              <Thead>
                <Tr>
                  <Th
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    PROS
                  </Th>
                  <Th
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    CONS
                  </Th>
                  <Th
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    EXPLORE
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Novobanco offers an option for{' '}
                    <strong>people who are starting</strong>
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Both banks provide a{' '}
                    <strong>
                      wide range of options for the user at the very first stage
                      of the journey
                    </strong>
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    To make a more{' '}
                    <strong>
                      user-friendly approach for users who are starting out
                    </strong>
                    , it would be good to put an option aimed at this audience;
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Santander created a{' '}
                    <strong>
                      page exclusively aimed at people who are just starting out
                    </strong>
                    , a community with many articles related to the topic;
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    <strong>
                      The beginner page at Novobanco is an extensive page
                    </strong>
                    , with a lot of text and not very intuitive;
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    For those who are starting to learn about a specific topic,
                    it is always good to{' '}
                    <strong>create a direction for these people</strong>, and we
                    can accomplish this with the{' '}
                    <strong>information architecture of the page</strong>
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    The step by step on the Novobanco page is a good option to{' '}
                    <strong> guide new people</strong>, also the option to
                    consultancy and the quiz
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    The Santander page{' '}
                    <strong>does not have a good hierarchy</strong> and no
                    option to filter the items offered
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    There are several ways in which we can{' '}
                    <strong>divide content based on people interests</strong>,
                    such as the amount of time they want to invest, the reason,
                    etc
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          SWOT Analysis
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          I also conduct an SWOT analysis with my direct competitors{' '}
          <strong>
            to evaluate them, and understand their market position compared to
            my proposed value proposition.
          </strong>
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: '1rem', md: '5rem' }}
        >
          <Box>
            <Text
              mb='0.8rem'
              fontWeight='700'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              Santander
            </Text>
            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              Santander has the advantage of having high name recognition and
              its platform offers a plethora of investment-related materials.
              The platform is designed in a way that encourages users to become
              part of the investment community.
            </Text>
            <Box maxWidth='80%' marginTop={{ base: '1rem', md: '2rem' }}>
              <img src={SWOTSantander} alt='swotanalysis-santander' />
            </Box>
          </Box>

          <Box>
            <Text
              mb='0.8rem'
              fontWeight='700'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              Novobanco
            </Text>
            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              Novo Banco provides a wealth of detailed information on
              investments, presented in a well-organized manner that covers a
              broad range of topics aimed at assisting a wide audience.
            </Text>
            <Box maxWidth='80%' marginTop={{ base: '1rem', md: '4rem' }}>
              <img src={SWOTNovobanco} alt='swotanalysis-novobanco' />
            </Box>
          </Box>
        </Box>

        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Identify Key Features
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          I have chosen to utilize the insightful questions posed in{' '}
          <strong>UX Strategy by Jaime Levy</strong> to guide my exploration and
          uncover the essential features necessary for my project. By leveraging
          the{' '}
          <strong>
            knowledge gained from customer interviews and conducting a thorough
            competitive analysis of potential competitors
          </strong>
          , I am applying a well-informed approach to inform my decision-making
          process.
        </Text>

        <Box overflowX='auto' mt='1.5rem'>
          <TableContainer
            color={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          >
            <Table variant='simple' size='sm'>
              <Thead>
                <Tr>
                  <Th
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    #
                  </Th>
                  <Th
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Feature Name
                  </Th>
                  <Th
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Functionality Details
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    1
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Gallery Articles
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Materials ranging from beginner-level to advanced.
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    2
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Search and Filter tool
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    An easy way so you can search and filter all the materials
                    that you want.
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    3
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    FAQ & Ask Center
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Area for the users to read frequently asked questions and
                    post a question if they can not find the answer.
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    4
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Registration/ Create Account
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Ability for those users that want to create an account with
                    just an email address (to be verified) and password.
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    5
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Real-time Alerts
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Alerts about their investments, or news materials that were
                    posted.
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    6
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Community
                  </Td>
                  <Td
                    sx={{
                      p: 3,
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      borderColor: 'gray.300',
                    }}
                  >
                    Once that you register you also have a part at the community
                    to exchange knowledge.
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Text
          fontSize='1.5rem'
          mb='1.5rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Millennium for Investors - Key Features
        </Text>

        <Box maxWidth='800px'>
          <UnorderedList
            mb='1.2rem'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          >
            <ListItem mb='0.8rem'>
              A <strong>Quiz</strong> as a first step so you can know what type
              investor you are, learn more about your taste for investing and
              what type investment suits you.
            </ListItem>
            <ListItem mb='0.8rem'>
              A <strong>Gallery Articles</strong> a range of certified materials
              that you can use for your learning and have greater credibility in
              your study.
            </ListItem>
            <ListItem mb='0.8rem'>
              <strong>Community</strong> here you have the opportunity to not
              only share your valuable knowledge but also stay consistently
              updated with the latest market news and much more.
            </ListItem>
          </UnorderedList>
        </Box>

        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Storyboard
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          At that phase, I utilized the{' '}
          <strong>key features to construct a narrative</strong>
          from the user point of view in my storyboard. This effectively
          illustrated the benefits customers could derive from my solution.
          Then,{' '}
          <strong>
            I leveraged this storyboard as a foundation to develop a prototype
          </strong>
          , which was utilized for conducting experiments.
        </Text>

        <Box maxWidth='110%' marginTop='1rem' marginBottom='2rem'>
          <img src={StoryboardMillennium} alt='storyboard' />
        </Box>

        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          User Journey
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Describing the User Journey through the website, with that in mind, I
          had a clear understanding that I could focous on the landing page
          screen to create and prototype, so I started my wireframe process.
        </Text>

        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: '0', xl: '2rem' }}
          margin={{ base: '1rem 0', md: '0', xl: '2rem 5rem' }}
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          {[
            {
              number: '1.Home',
              description:
                'User opens the Millennium webpage, looks for the investments options and find the CTA for beginners.',
            },
            {
              number: '2.Landing Page Overview',
              description:
                ' User opens the landing page for Millennium investment community, he finds the types of investments on the menu, the quiz option, the materials, search tool, registration option, FAQ and Prompt Assistance.',
            },
            {
              number: '3.Subscription',
              description:
                'He decides to subscribe and be part of the community, he puts his database and have new investor area. Now he have access to more materials, he can consolidate all his investments in one place, now the status of his investment, real time alerts, community forum and study list.',
            },
          ].map((item, index) => (
            <Box
              key={index}
              margin={{
                base: '1rem',
                md: index !== 0 ? '1rem 0 0 0' : '1rem',
                xl: '4rem 1rem 2rem 2rem',
              }}
              borderBottom={{ base: '1px', md: 'none' }}
              borderLeft={{ md: index !== 0 ? '1px' : 'none' }}
              borderColor={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
              borderRadius={{ md: '5px' }}
              p={{ base: '0 0 1rem 0', md: '1rem' }}
              flex='1'
              textAlign='left'
            >
              <Text fontSize='1.5rem' fontWeight='500'>
                {item.number}
              </Text>
              <Text>{item.description}</Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text
          id='design'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          Design
        </Text>
        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Wireframe
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Before beginning the wireframe creation process, I made the decision
          to sketch out the layout. This approach allowed me to visualize how we
          can effectively separate and organize the different subjects, placing
          each of them in their appropriate positions.
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          This is the <strong>first three blocks</strong> for our landing page,
          I decided to organize the content in this way:
        </Text>
        <UnorderedList
          mb='1.2rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          <ListItem mb='0.8rem'>
            <strong>Quiz:</strong> when the user arrive in our page and also
            still dont know how to start, he can take the quiz and have a little
            guidance to where he can start from.
          </ListItem>
          <ListItem mb='0.8rem'>
            <strong>Investment by your goals:</strong> if the user doesnt want
            to take the quiz, he can choose to start by his goals of investment.
          </ListItem>
          <ListItem mb='0.8rem'>
            <strong>Level of knowledge:</strong> if he doesnt want to take the
            quiz and dont have any specific goal for investment, he can choose
            his level of knowledge.{' '}
          </ListItem>
        </UnorderedList>

        <Box
          marginBottom='2rem'
          marginTop='2rem'
          marginLeft={{ base: '1rem', md: '15rem' }}
          display='flex'
          justifyContent='center'
          maxWidth={{ base: '80%', md: '50%' }}
        >
          <img src={WireframeMillennium} alt='wireframe-millennium' />
        </Box>

        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          For the rest of the Lading Page we have:
        </Text>
        <UnorderedList
          mb='1.2rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          <ListItem>The newest content.</ListItem>
          <ListItem>
            The CTA for signing to our community and have more advantages of our
            service.
          </ListItem>
          <ListItem>
            The Footer with info to contact our support and also other infos
            like social media pages.
          </ListItem>
        </UnorderedList>

        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Style Guide
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          In this project, I strategically employed the visual components listed
          below. I employed the brand designated colors while striving for a
          faithful representation of its visual design.
        </Text>

        <Box
          marginBottom='2rem'
          marginTop='2rem'
          marginLeft={{ base: '1rem', md: '15rem' }}
          display='flex'
          justifyContent='center'
          maxWidth={{ base: '80%', md: '50%' }}
        >
          <img src={StyleGuideMillennium} alt='styleguide' />
        </Box>

        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Final UI
        </Text>

        <Box
          marginBottom='2rem'
          marginTop='2rem'
          marginLeft={{ base: '1rem', md: '15rem' }}
          display='flex'
          justifyContent='center'
          maxWidth={{ base: '80%', md: '50%' }}
        >
          <img src={MillenniumFinalUI} alt='finalui' />
        </Box>
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
          <Link to='/portfolio/uxuidesign/chocloproject'>
            <Box
              m={{ base: '1rem', xl: '2rem 0 1rem 6rem' }}
              maxWidth={{ base: '90%', xl: '80%' }}
            >
              <img src={Choclo} />
              <Text
                fontWeight='600'
                mt='0.8rem'
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
          <Link to='/portfolio/uxuidesign/fabricaproject'>
            <Box
              m={{ base: '1rem', xl: '2rem 0 1rem 6rem' }}
              maxWidth={{ base: '90%', xl: '80%' }}
            >
              <img src={Fabrica} />
              <Text
                fontWeight='600'
                mt='0.8rem'
                color={
                  colorMode === 'dark'
                    ? theme.colors.dark.text
                    : theme.colors.light.text
                }
              >
                Fábrica Project
              </Text>
            </Box>
          </Link>
        </Flex>
      </Box>
    </div>
  );
}

export default MillenniumProject;
