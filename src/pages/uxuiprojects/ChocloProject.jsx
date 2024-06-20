import ChocloWebsite from '../../assets/uxuiprojects/ChocloWebsite.png';
import PersonaChocloOne from '../../assets/uxuiprojects/PersonaChocloOne.jpg';
import PersonaChocloTwo from '../../assets/uxuiprojects/PersonaChocloTwo.jpg';
import PersonaChocloThree from '../../assets/uxuiprojects/PersonaChocloThree.jpg';
import UserJourneyChocloOne from '../../assets/uxuiprojects/UserJourneyChocloOne.jpg';
import UserJourneyChocloTwo from '../../assets/uxuiprojects/UserJourneyChocloTwo.jpg';
import UserJourneyChocloThree from '../../assets/uxuiprojects/UserJourneyChocloThree.jpg';
import { useState, useEffect } from 'react';
import { Flex, Text, Box, Image, Button, Link } from '@chakra-ui/react';
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
        color='#CCCCCC'
        m='2rem 0 0 2rem'
      >
        <BreadcrumbItem>
          <BreadcrumbLink href='/portfolio'>Portfolio</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/portfolio/uxuidesign'>
            UxUi Design Work
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='/portfolio/uxuidesign/chocloproject'>
            Choclo Project
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Text fontSize={{ base: '3rem', md: '3.8rem' }} m='3rem 0 0 2rem'>
        Choclo Website
      </Text>

      <Text m='0 0 4rem 2rem'>A new website for Choclo restaurant</Text>

      <Image src={ChocloWebsite} alt='choclo-logo' width='80%' ml='8rem' />

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
          <Text mb='0.8rem'>
            Choclo Ceviche is a <strong>Peruvian restaurant</strong> that opened
            in September 2022 in Lisbon. One of the founders came to me as{' '}
            <strong>Freelancer Product Designer</strong>, to help her improve
            their website company and also create an e-commerce platform.
          </Text>

          <TableContainer m='1.5rem 0 1rem 0'>
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
        </Box>
      </Flex>

      <Box p='2rem 10rem 1.5rem 8rem'>
        <Text id='problem' fontSize='2rem' fontWeight='600'>
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

      <Box p='2rem 10rem 1.5rem 8rem'>
        <Text id='objective' fontSize='2rem' fontWeight='600' mb='1rem'>
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

      <Box p='2rem 10rem 1.5rem 8rem'>
        <Text id='research' fontSize='2rem' fontWeight='600' mb='1rem'>
          Research
        </Text>
        <Text fontSize='1.5rem' mb='0.8rem'>
          Intro
        </Text>
        <Text mb='0.8rem'>
          I started the research by analyzing a variety of sources, including{' '}
          <strong>customer reviews</strong>, <strong>comments</strong>, and the{' '}
          <strong>submission forms available on their website</strong>,{' '}
          <strong>
            with the goal of identifying any potential Pain Points{' '}
          </strong>
          that we could address to enhance the website.
        </Text>
        <Text mb='0.8rem'>
          A closer examination of their service-related reviews and comments has
          revealed the following insights:
        </Text>
        <UnorderedList mb='1.2rem'>
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
        <Text mb='0.8rem'>
          After analyzing the comments, the next step was to analyze the Choclo
          current Landing Page, this enabled me to{' '}
          <strong>harmonize the company visual identity</strong> while also{' '}
          <strong>identifying any additional Pain Points</strong> that require
          attention and resolution.
        </Text>
        <Text mb='0.8rem'>In conclusion:</Text>
        <UnorderedList mb='1.2rem'>
          <ListItem mb='0.8rem'>
            The page lacks <strong>Consistency</strong> (buttons with different
            colors, backgrounds, text styles, etc.).
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

        <Text fontSize='1.5rem' mb='0.8rem'>
          Benchmarking
        </Text>
        <Text mb='0.8rem'>
          I conducted thorough research within the catering market of Lisbon,
          targeting restaurants that:
        </Text>
        <UnorderedList mb='1.2rem'>
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
        <Text mb='0.8rem'>
          I studied{' '}
          <strong>
            how they crafted their landing pages to achieve favorable outcomes
            and extract valuable insights
          </strong>{' '}
          to inform the development of Choclo own Landing Page.
        </Text>

        <Box overflowX='auto' mt='1.5rem'>
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

        <Text fontSize='1.5rem' mb='0.8rem' mt='2rem'>
          Customer Discovery
        </Text>
        <Text mb='0.8rem'>
          I have elected to conduct a pair of <strong>interviews</strong> to
          validate our problem statement, contribute to persona creation, and
          kickstart our ideation process.
        </Text>
        <Text mb='0.8rem'>
          The initial interview will involve <strong>Choclo staff</strong>,
          while the second will be directed towards our target audience:{' '}
          <strong>individuals who dine out.</strong>
        </Text>

        <Text mb='0.8rem' fontWeight='600'>
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

        <Box display='flex' flexDirection='row' gap='3rem' mt='2rem' mb='2rem'>
          <Box>
            <Text mb='0.8rem' fontWeight='600'>
              Staff Interview insights:
            </Text>
            <UnorderedList mb='1.2rem'>
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
            <Text mb='0.8rem' fontWeight='600'>
              Public answers analysis:
            </Text>
            <UnorderedList mb='1.2rem'>
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

        <Text mb='0.8rem'>
          This can serve as a useful guide for structuring the{' '}
          <strong>website information architecture</strong> and prioritizing the
          information that holds the most relevance for users when making
          decisions. Adding some reviews in Choclo Landing Page, will bring more
          reasons to the public rely on them. Using the website as a backup
          resource that provides greater credibility to users. This emphasizes
          the significance of an intuitive and comprehensive design to better
          cater to user needs.
        </Text>

        <Text fontSize='1.5rem' mb='0.8rem'>
          Personas
        </Text>
        <Box
          maxWidth='50%'
          display='flex'
          flexDirection='row'
          gap='10px'
          justifyContent='center'
          alignItems='center'
          marginLeft='5rem'
          marginTop='2rem'
        >
          <img src={PersonaChocloOne} />
          <img src={PersonaChocloTwo} />
          <img src={PersonaChocloThree} />
        </Box>

        <Text fontSize='1.5rem' mb='0.8rem' mt='2rem'>
          User Journey
        </Text>
        <Box
          maxWidth='100%'
          display='flex'
          flexDirection='column'
          gap='10px'
          justifyContent='center'
          alignItems='center'
          marginTop='2rem'
        >
          <img src={UserJourneyChocloOne} />
          <img src={UserJourneyChocloTwo} />
          <img src={UserJourneyChocloThree} />
        </Box>

        <Text fontSize='1.5rem' mb='0.8rem' mt='2rem'>
          Definition
        </Text>
        <Text mb='0.8rem'>
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
          <box-icon name='bulb' size='md'></box-icon>
          <Text color='black'>
            We aim to redo Choclo Landing Page in a manner that offers our
            customers comprehensive information to assist them in making the
            decision to visit Choclo. This redesign will also serve as a
            reliable resource to address any issues people may encounter while
            seeking the information they need.
          </Text>
        </Box>

        <Text fontSize='1.5rem' mb='0.8rem' mt='2rem'>
          Feature List
        </Text>
        <Text>
          Based on the discovery that I made, we compiled a{' '}
          <strong>feature list</strong> for Choclo Landing Page.
        </Text>

        <Box overflowX='auto' mt='1.5rem'>
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

        <Text fontSize='1.5rem' mb='1.5rem' mt='2rem'>
          Card Sorting
        </Text>
        <Text mb='0.8rem'>
          I have chosen to conduct a card sorting exercise, this will help us
          determine the optimal placement for each feature on our website,
          making it easier for users to navigate and aligning with their
          expected feature-finding patterns. Additionally, it will allow us to
          organize these features in a more logical manner.
        </Text>
      </Box>
    </div>
  );
}

export default ChocloProject;
