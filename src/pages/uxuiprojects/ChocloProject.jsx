import ChocloWebsite from '../../assets/uxuiprojects/ChocloWebsite.png';
import PersonaChocloOne from '../../assets/uxuiprojects/PersonaChocloOne.jpg';
import PersonaChocloTwo from '../../assets/uxuiprojects/PersonaChocloTwo.jpg';
import PersonaChocloThree from '../../assets/uxuiprojects/PersonaChocloThree.jpg';
import UserJourneyChocloOne from '../../assets/uxuiprojects/UserJourneyChocloOne.jpg';
import UserJourneyChocloTwo from '../../assets/uxuiprojects/UserJourneyChocloTwo.jpg';
import UserJourneyChocloThree from '../../assets/uxuiprojects/UserJourneyChocloThree.jpg';
import CardSortingChoclo from '../../assets/uxuiprojects/CardSortingChoclo.jpg';
import UserFlowChoclo from '../../assets/uxuiprojects/UserFlowChoclo.jpg';
import ChocloSketchOne from '../../assets/uxuiprojects/ChocloSketchOne.jpg';
import ChocloSketchTwo from '../../assets/uxuiprojects/ChocloSketchTwo.jpg';
import StyleGuideChoclo from '../../assets/uxuiprojects/StyleGuideChoclo.png';
import BeforeAfterChocloOne from '../../assets/uxuiprojects/BeforeAfterChocloOne.png';
import BeforeAfterChocloTwo from '../../assets/uxuiprojects/BeforeAfterChocloTwo.png';
import BeforeAfterChocloThree from '../../assets/uxuiprojects/BeforeAfterChocloThree.png';
import Millennium from '../../assets/uxuiprojects/Millenium.png';
import Fabrica from '../../assets/uxuiprojects/Fabrica.png';
import { useState, useEffect } from 'react';
import {
  Flex,
  Text,
  Box,
  Image,
  Button,
  Link,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import {
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Thead,
  TableContainer,
} from '@chakra-ui/react';

function ChocloProject() {
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
        m='2rem 0 0 2rem'
      >
        <BreadcrumbItem>
          <BreadcrumbLink href='/portfolio'>Portfolio</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='/portfolio/uxuidesign/chocloproject'>
            Choclo Project
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
        Choclo Website
      </Text>

      <Text
        m={{ base: '0 1rem 2rem 1rem', xl: '0 0 4rem 2rem' }}
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
        A new website for Choclo restaurant
      </Text>

      <Image
        src={ChocloWebsite}
        alt='choclo-logo'
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
            <strong>
              The main purpose of this project was to enhance the quality of
              Choclo website
            </strong>
            . The central focus was on creating a platform that brings together
            all the essential content for the{' '}
            <strong>efficient promotion and marketing</strong> of the company
            services. The website was developed in a standard web format,
            ensuring a responsive and user-friendly experience for mobile
            devices as well.
          </Text>
          <Text
            mb='0.8rem'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          >
            Choclo Ceviche is a <strong>Peruvian restaurant</strong> that opened
            in September 2022 in Lisbon. One of the founders came to me as{' '}
            <strong>Freelancer Product Designer</strong>, to help her improve
            their website company and also create an e-commerce platform.
          </Text>

          <TableContainer
            m={{ xl: '1.5rem 0 1rem 0' }}
            whiteSpace={{ base: 'nowrap', xl: 'normal' }}
            wordWrap='break-word'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          >
            <Table variant='simple' size='sm'>
              <Tbody>
                <Tr>
                  <Td>Client</Td>
                  <Td>Choclo</Td>
                </Tr>
                <Tr>
                  <Td>Year</Td>
                  <Td>2024</Td>
                </Tr>
                <Tr>
                  <Td>Scope of Work</Td>
                  <Td>
                    Ux Research, Ui Design, Responsive Design, Wix Development,
                    Prototyping, Wireframe
                  </Td>
                </Tr>
                <Tr>
                  <Td>Tools</Td>
                  <Td>Figma, Miro, Notion, Wix Studio</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Link href='https://www.choclolisboa.com' isExternal>
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
        .
        <Box bg='rgba(220, 90, 53, 0.7)' w='100%' p={4}>
          <Text color='black'>
            <strong>
              Choclo website lacks precise information about their services,
              which is crucial for users. Additionally, the design of the page
              lacks intuitiveness and cleanliness, both of which are important
              for a user-friendly experience.
            </strong>
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
        <Box bg='rgba(145, 187, 148, 0.7)' w='100%' p={4}>
          <Text color='black'>
            <strong>
              Our objective is to enhance Choclo website, enabling users to
              effortlessly discover comprehensive solutions to their inquiries,
              which may not be readily available on other Choclo pages and also
              reduce the amount of work that both our clients and Choclo needs,
              to help them solve their queries.
            </strong>
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
          Intro
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: '1.5rem', md: '2rem' }}
        >
          <Box>
            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              I started the research by analyzing a variety of sources,
              including <strong>customer reviews</strong>,{' '}
              <strong>comments</strong>, and the{' '}
              <strong>submission forms available on their website</strong>,{' '}
              <strong>
                with the goal of identifying any potential Pain Points{' '}
              </strong>
              that we could address to enhance the website.
            </Text>
            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              A closer examination of their service-related reviews and comments
              has revealed the following insights:
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
                Their <strong>customer base is notably diverse</strong>,
                encompassing individuals who communicate primarily in Spanish,
                English, and Portuguese.
              </ListItem>
              <ListItem mb='0.8rem'>
                Some{' '}
                <strong>
                  customers encounter challenges when seeking specific details
                </strong>{' '}
                related to reservations, operating hours, delivery options, and
                voucher usage.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              After analyzing the comments, the next step was to analyze the
              Choclo current Landing Page, this enabled me to{' '}
              <strong>harmonize the company visual identity</strong> while also{' '}
              <strong>identifying any additional Pain Points</strong> that
              require attention and resolution.
            </Text>
            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              In conclusion:
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
                The page lacks <strong>Consistency</strong> (buttons with
                different colors, backgrounds, text styles, etc.).
              </ListItem>
              <ListItem mb='0.8rem'>
                Minimize <strong>user cognitive load</strong>: excessive use of
                visual elements, strong colors, bold text, etc.
              </ListItem>
              <ListItem mb='0.8rem'>
                This brings us to <strong>Visual Hierarchy</strong> and{' '}
                <strong>Information Architecture</strong>: the importance of
                contrast and arrangement of elements on the page.
              </ListItem>
              <ListItem mb='0.8rem'>Spelling errors.</ListItem>
            </UnorderedList>
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
          Benchmarking
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          I conducted thorough research within the catering market of Lisbon,
          targeting restaurants that:
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
            Operate within <strong>the same segment as Choclo </strong>
            (restaurants specializing in Peruvian cuisine)
          </ListItem>
          <ListItem mb='0.8rem'>
            <strong>Esteemed restaurants in Lisbon.</strong> While they might
            not operate within the same field or directly compete with Choclo,
            they can serve as valuable examples due to their high conversion
            rates and positive customer feedback.
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
          I studied{' '}
          <strong>
            how they crafted their landing pages to achieve favorable outcomes
            and extract valuable insights
          </strong>{' '}
          to inform the development of Choclo own Landing Page.
        </Text>

        <Box
          overflowX='auto'
          mt='1.5rem'
          mb='2rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          <TableContainer>
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
                    Explore
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
                    Avoid
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
                    Medals or other prizes highlights.
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
                    Use of Uppercase texts
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
                    Visible actions.
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
                    No CTA or CTA without contrast.
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
                    Homepage with only essentials options to choose from.
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
                    Not so much info about the company.
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
                    Contact and info are easily found.
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
                    Open new tab or browser when someone click on a content.
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
                    Breadcrumbs.
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
                    Ask unnecessary and complex questions in a form.
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
                    Scannable texts.
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
                    Repeated Information.
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
                    Use of real people images for more credibility.
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
                    Use of unrelated image and no real people images.
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
                    Consistent Navigation.
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
                    Dont use FAQ.
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
                    Transparent Pricing.
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
                    Not responsive website.
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
                    Provide value for users registering in a form.
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
                    Bugs and Errors.
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
                    Use of Icons.
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
                    Place all the content in just one page.
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
                    {''}
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
                    Use a lot whitespace.
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
          Customer Discovery
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          I have elected to conduct a pair of <strong>interviews</strong> to
          validate our problem statement, contribute to persona creation, and
          kickstart our ideation process.
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          The initial interview will involve <strong>Choclo staff</strong>,
          while the second will be directed towards our target audience:{' '}
          <strong>individuals who dine out.</strong>
        </Text>

        <Text
          mb='0.8rem'
          fontWeight='600'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          What it is our goal?
        </Text>
        <Box
          bg='rgba(145, 187, 148, 0.7)'
          w='100%'
          p={4}
          display='flex'
          flexDirection='row'
          gap='1rem'
        >
          <box-icon name='bulb' size='md'></box-icon>
          <Text color='black'>
            We aim to learn more about our customers and gain an understanding
            of the information that holds significance for them when deciding on
            a dining destination. Furthermore, we are interested in identifying
            any challenges they may have encountered while seeking
            restaurant-related information.
          </Text>
        </Box>

        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: '1.5rem', md: '3rem' }}
          mt='2rem'
          mb='2rem'
        >
          <Box>
            <Text
              mb='0.8rem'
              fontWeight='600'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              Staff Interview insights:
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
                Social media plays a significant role in raising awareness about
                Choclo, along with the influence of reviews, recommendations,
                and various online groups.
              </ListItem>
              <ListItem mb='0.8rem'>
                The majority of Choclo clientele consists of Latin customers,
                with a substantial community of English speakers and individuals
                from diverse nationalities following suit.
              </ListItem>
              <ListItem mb='0.8rem'>
                A significant portion of their customer base has specific
                requests regarding allergens and other food preferences.
              </ListItem>
              <ListItem mb='0.8rem'>
                Online photos and the content people post have a profound
                influence on their decision-making process.
              </ListItem>
              <ListItem mb='0.8rem'>
                There are no recurring complaints or concerns about the public,
                the only one that they have noticed its about the reservations.
              </ListItem>
              <ListItem>
                Also the feedback and suggestions are not relevant.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Text
              mb='0.8rem'
              fontWeight='600'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              Public answers analysis:
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
                The most utilized platform by our users to discover new places
                is Instagram, and they also make use of Google Reviews for the
                same purpose.
              </ListItem>
              <ListItem mb='0.8rem'>
                The most important information includes the menu, prices,
                reviews, dish photos, and location.
              </ListItem>
              <ListItem mb='0.8rem'>
                We can also see that conveying the restaurant history and its
                cuisine adds value to the location and also influences the user
                decision-making process.
              </ListItem>
              <ListItem mb='0.8rem'>
                Despite a large portion of the audience stating that they dont
                often leave reviews, virtually all of them also rely on reviews
                to make decisions.
              </ListItem>
              <ListItem mb='0.8rem'>
                We observed that many users turn to the website when they cant
                find the necessary information on Instagram or Google.
              </ListItem>
              <ListItem mb='0.8rem'>
                We observed that many users turn to the website when they cant
                find the necessary information on Instagram or Google.
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          This can serve as a useful guide for structuring the{' '}
          <strong>website information architecture</strong> and prioritizing the
          information that holds the most relevance for users when making
          decisions. Adding some reviews in Choclo Landing Page, will bring more
          reasons to the public rely on them. Using the website as a backup
          resource that provides greater credibility to users. This emphasizes
          the significance of an intuitive and comprehensive design to better
          cater to user needs.
        </Text>

        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Personas
        </Text>
        <Box
          maxWidth={{ base: '90%', md: '70%', xl: '90%' }}
          display='flex'
          flexDirection='row'
          gap='2rem'
          overflowX='auto'
          marginTop='1.5rem'
        >
          <Box flex='0 0 auto' width={{ base: '300px', md: '500px' }}>
            <img
              src={PersonaChocloOne}
              alt='persona-choclo'
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box flex='0 0 auto' width={{ base: '300px', md: '500px' }}>
            <img
              src={PersonaChocloTwo}
              alt='persona-choclo'
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box flex='0 0 auto' width={{ base: '300px', md: '500px' }}>
            <img
              src={PersonaChocloThree}
              alt='persona-choclo'
              style={{ width: '100%', height: 'auto' }}
            />
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
          User Journey
        </Text>
        <Box
          maxWidth={{ base: '90%', md: '70%', xl: '90%' }}
          display='flex'
          flexDirection='row'
          gap='2rem'
          overflowX='auto'
          marginTop='1.5rem'
        >
          <Box flex='0 0 auto' width={{ base: '600px', md: '800px' }}>
            <img
              alt='user-journey-choclo'
              src={UserJourneyChocloOne}
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box flex='0 0 auto' width={{ base: '600px', md: '800px' }}>
            <img
              alt='user-journey-choclo'
              src={UserJourneyChocloTwo}
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box flex='0 0 auto' width={{ base: '600px', md: '800px' }}>
            <img
              alt='user-journey-choclo'
              src={UserJourneyChocloThree}
              style={{ width: '100%', height: 'auto' }}
            />
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
          Definition
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          As we begin to outline our key features and architectural information,
          it is time to reframe our primary objective in a more robust manner,
          taking into account all the insights we have gathered through our
          discovery process.
        </Text>
        <Box
          bg='rgba(145, 187, 148, 0.7)'
          w='100%'
          p={4}
          display='flex'
          flexDirection='row'
          gap='1rem'
        >
          <Text color='black'>
            We aim to redo Choclo Landing Page in a manner that offers our
            customers comprehensive information to assist them in making the
            decision to visit Choclo. This redesign will also serve as a
            reliable resource to address any issues people may encounter while
            seeking the information they need.
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
          Feature List
        </Text>
        <Text
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Based on the discovery that I made, we compiled a{' '}
          <strong>feature list</strong> for Choclo Landing Page.
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
                    Menu
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
                    A detailed menu and their range of prices.
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
                    About
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
                    A good storytelling about the history of Choclo, with some
                    photos from the place, the owners, and staff.
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
                    Reservations
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
                    A specific page where the user could create their
                    reservations.
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
                    Shop
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
                    Choclo new e-commerce
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
                    FAQ
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
                    A FAQ with the most asked questions, and also option to get
                    in touch with Choclo.
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
                    Contact
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
                    Contact, Location, timetable.
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
                    7
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
                    Newsletter
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
                    A form to be part of Choclo newsletter.
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
                    8
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
                    Reviews
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
                    Some of the reviews from customers.
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          gap='2rem'
        >
          <Box display='flex' flexDirection='column'>
            <Text
              fontSize='1.5rem'
              mb='1.5rem'
              mt='2rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.h3
                  : theme.colors.light.h3
              }
            >
              Card Sorting
            </Text>
            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              I have chosen to conduct a card sorting exercise, this will{' '}
              <strong>
                help us determine the optimal placement for each feature on our
                website
              </strong>
              , making it easier for users to navigate and aligning with their
              expected feature-finding patterns. Additionally,{' '}
              <strong>
                it will allow us to organize these features in a more logical
                manner
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
              What we want to discover?
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
                Where should we display some features?
              </ListItem>
              <ListItem mb='0.8rem'>
                Should we create a new category just for location?
              </ListItem>
              <ListItem mb='0.8rem'>
                There is a need of a new category, besides the ones we offer?
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
              So our categories and features would be like this:
            </Text>
          </Box>

          <Box
            maxWidth={{ base: '100%', md: '40%' }}
            display='flex'
            flexDirection='column'
            gap='10px'
            marginTop={{ base: 'none', md: '5.5rem' }}
          >
            <img src={CardSortingChoclo} alt='card-sorting-choclo' />
          </Box>
        </Box>

        <Box
          bg='rgba(145, 187, 148, 0.7)'
          w='100%'
          p={4}
          display='flex'
          flexDirection='row'
          gap='1rem'
          mt='2rem'
        >
          <Text color='black'>
            When we compared the final result with our initial hypothesis, we
            observed that the newsletter form, press releases, and timetable
            could be more appropriately categorized elsewhere. On the other
            hand, our assumption about the vouchers feature was confirmed as
            accurate.
          </Text>
        </Box>

        <Text
          fontSize='1.5rem'
          mb='1.5rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          User Flow
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          This will serve as our user flow, guiding them seamlessly from their
          initial entry point through a series of well-defined steps, ultimately
          leading to a successful outcome and their final action.
        </Text>

        <Box maxWidth='100%' marginTop='2rem'>
          <img src={UserFlowChoclo} alt='user-flow-choclo' />
        </Box>
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
          Final UI
        </Text>
        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Sketches and Style Guide
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Since Choclo uses Wix Studio for their website, we adhered to their
          design options in building the site. With a predefined vision, we
          created initial sketches and proceeded to develop the final user
          interface accordingly.
        </Text>

        <Box
          maxWidth='100%'
          display='flex'
          flexDirection='row'
          gap='1rem'
          marginTop='1.5rem'
          overflowX='auto'
          padding='1rem'
        >
          <Box flex='0 0 auto' width={{ base: '300px', md: '500px' }}>
            <img
              src={ChocloSketchOne}
              style={{ width: '100%', height: 'auto' }}
              alt='choclo-ui-sketch'
            />
          </Box>
          <Box flex='0 0 auto' width={{ base: '300px', md: '500px' }}>
            <img
              src={ChocloSketchTwo}
              style={{ width: '100%', height: 'auto' }}
              alt='choclo-ui-sketch'
            />
          </Box>
          <Box flex='0 0 auto' width={{ base: '300px', md: '500px' }}>
            <img
              src={StyleGuideChoclo}
              style={{ width: '100%', height: 'auto' }}
              alt='choclo-ui-style-guide'
            />
          </Box>
        </Box>

        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt={{ base: '1rem', md: '2rem' }}
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          Final MVP
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Since I was tasked with creating the pages on the Wix platform
          independently, I opted for a mid-level prototype. This allowed me to
          present Choclo CEO with a preview of the styles and layouts planned
          for the pages.
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: 'none', md: '2rem' }}
          mb='2rem'
        >
          <Box display='flex' flexDirection='column'>
            <Text
              mt='1.5rem'
              fontWeight='600'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              1. Better call to action and more informations about Choclo
            </Text>
            <Box maxWidth='80%' gap='2rem' marginTop='0.8rem'>
              <img
                src={BeforeAfterChocloOne}
                alt='before-after-choclowebsite'
              />
            </Box>

            <Text
              mt='1.5rem'
              fontWeight='600'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              2. More consistent and cleaner interface
            </Text>
            <Box maxWidth='80%' gap='2rem' marginTop='0.8rem'>
              <img
                src={BeforeAfterChocloTwo}
                alt='before-after-choclowebsite'
              />
            </Box>
          </Box>

          <Box display='flex' flexDirection='column'>
            <Text
              mt='1.5rem'
              fontWeight='600'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              3. Texts easier to read and informations easy to find
            </Text>
            <Box maxWidth='80%' gap='2rem' marginTop='0.8rem'>
              <img
                src={BeforeAfterChocloThree}
                alt='before-after-choclowebsite'
              />
            </Box>
            <Text
              mb='0.8rem'
              mt={{ base: '1.5rem', md: '1rem' }}
              pr='5rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              Following the successful completion of our Minimum Viable Product
              (MVP), we embarked on refining the user interface (UI) within the
              platform utilized by our company, <strong>Wix Studio</strong>.
              This endeavor allowed us to enhance the overall design of the
              final UI, ensuring a seamless and visually compelling experience
              for our users.
            </Text>
            <Link
              href='https://www.figma.com/proto/f1kR3sihs8aU4eb6neKrYs/Choclo-Website?type=design&node-id=0-1&viewport=321%2C164%2C0.04&t=T0RCpkVVPIPs3wRx-0&scaling=scale-down&starting-point-node-id=54%3A200'
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
                mt='1rem'
                p='1.5rem 1.5rem'
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
          <Link href='/portfolio/uxuidesign/fabricaproject'>
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
                Fabrica Project
              </Text>
            </Box>
          </Link>
          <Link href='/portfolio/uxuidesign/millenniumproject'>
            <Box
              m={{ base: '1rem', xl: '2rem 0 1rem 6rem' }}
              maxWidth={{ base: '90%', xl: '80%' }}
            >
              <img src={Millennium} />
              <Text
                fontWeight='600'
                mt='0.8rem'
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
      </Box>
    </div>
  );
}

export default ChocloProject;
