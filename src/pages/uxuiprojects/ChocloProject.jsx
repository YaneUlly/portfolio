import ChocloWebsite from '../../assets/uxuiprojects/ChocloWebsite.png';
import { useState, useEffect } from 'react';
import { Flex, Text, Box, Image, Button, Link } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';

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
      </Box>
    </div>
  );
}

export default ChocloProject;
