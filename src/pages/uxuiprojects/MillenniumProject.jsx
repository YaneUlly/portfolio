import { useState, useEffect } from 'react';
import Millennium from '../../assets/uxuiprojects/Millenium.png';
import InvestorsOne from '../../assets/uxuiprojects/InvestorsOne.jpg';
import InvestorsTwo from '../../assets/uxuiprojects/InvestorsTwo.jpg';
import InvestorsThree from '../../assets/uxuiprojects/InvestorsThree.jpg';
import SWOTSantander from '../../assets/uxuiprojects/SWOTSantander.jpg';
import SWOTNovobanco from '../../assets/uxuiprojects/SWOTNovobanco.jpg';
import { Flex, Text, Box, Image, Button, Link, Thead } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { Table, Tbody, Tr, Td, Th, TableContainer } from '@chakra-ui/react';

function MillenniumProject() {
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
          <BreadcrumbLink href='/portfolio/uxuidesign/fabricaproject'>
            Millennium Project
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Text fontSize={{ base: '3rem', md: '3.8rem' }} m='3rem 0 0 2rem'>
        Investment Feature
      </Text>

      <Text m='0 0 4rem 2rem'>
        An investiment feature for education resources.
      </Text>

      <Image src={Millennium} alt='millennium-logo' width='80%' ml='8rem' />

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
          <Text mb='0.8rem'>
            Banco Comercial Português, S.A. (BCP), known as Millennium BCP from
            2004, <strong>is the second largest Portuguese private bank</strong>
            .
          </Text>

          <TableContainer m='1.5rem 0 1rem 0'>
            <Table variant='simple' size='sm'>
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
            href='https://www.figma.com/proto/A9ixyQT8eUtR65pHODXOJS/Millennium-LP?page-id=0%3A1&type=design&node-id=19-17&viewport=260%2C-585%2C0.09&t=AVRuyqfSTDwgy7iX-1&scaling=scale-down&starting-point-node-id=19%3A17&mode=design'
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
              Visit prototype
            </Button>
          </Link>
        </Box>
      </Flex>

      <Box p='2rem 10rem 1.5rem 8rem'>
        <Text id='problem' fontSize='2rem' fontWeight='600' mb='1rem'>
          Problem
        </Text>
        <Text mb='0.8rem'>
          Before diving into research, I wanted to ensure that{' '}
          <strong>my proposal addresses a genuine problem</strong> and{' '}
          <strong>
            is in line with my customers expectations and primary investment
            concerns
          </strong>
          . By validating my proposal upfront, I can ensure that I provide a
          solution that truly meets the needs of my target audience.
        </Text>
        <Text mb='0.8rem'>
          I came across an insightful article made by a student from Instituto
          Universitário de Lisboa, presenting a research study conducted in
          February until June of 2022.{' '}
          <strong>
            The study surveyed individuals who were more than 18 years old, held
            at least one active bank account, and resided in Portugal
          </strong>
          .
        </Text>
        <Text fontWeight='500' mb='0.5rem'>
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

      <Box p='2rem 10rem 1.5rem 8rem'>
        <Text id='objective' fontSize='2rem' fontWeight='600' mb='1rem'>
          Objective
        </Text>
        <Text fontWeight='500' mb='0.5rem' mt='1rem'>
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

      <Box p='2rem 10rem 1.5rem 8rem'>
        <Text id='research' fontSize='2rem' fontWeight='600' mb='1rem'>
          Research
        </Text>
        <Text fontSize='1.5rem' mb='0.8rem'>
          Provisional Personas
        </Text>
        <Text mb='0.8rem'>
          Creating provisional personas based on my assumptions.
        </Text>
        <Box
          maxWidth='50%'
          display='flex'
          flexDirection='row'
          gap='10px'
          alignItems='center'
          marginTop='1rem'
          marginBottom='2rem'
        >
          <img src={InvestorsOne} />
          <img src={InvestorsTwo} />
        </Box>

        <Text fontSize='1.5rem' mb='0.8rem'>
          User Interviews
        </Text>
        <Text mb='0.8rem'>
          After developing my provisional personas, and before proceeding to the
          next research steps, I crafted a script interview, with a screener to
          ensure that I only engaged with individuals meeting my research
          criteria and subsequently, I conducted{' '}
          <strong>street interviews</strong>.
        </Text>
        <Text mb='0.8rem'>
          <strong>Interview Insights:</strong>
        </Text>
        <UnorderedList mb='1.2rem'>
          <ListItem>
            <strong> My assumption was validated.</strong> Many of the people
            try to study by themselves and consume a lot of materials about
            investments.
          </ListItem>
          <ListItem>
            I also gained additional intelligence about{' '}
            <strong>people that already invest</strong> and continuous to look
            for materials about investments and news on the market.
          </ListItem>
          <ListItem>
            <strong>95% of my participants</strong> would appreciate to use a
            platform with all they need to know about investments.
          </ListItem>
          <ListItem>
            It also highlighted for me that{' '}
            <strong>people prioritize financial security above all else</strong>
            , and that this can have a{' '}
            <strong>significant impact on their mental well-being</strong>.
          </ListItem>
        </UnorderedList>

        <Text mb='0.8rem'>
          With that I saw the need of one more persona that corresponds with the
          additional intelligence that I gain during the interviews.
        </Text>

        <Box
          maxWidth='60%'
          display='flex'
          flexDirection='column'
          gap='10px'
          marginTop='2rem'
        >
          <img src={InvestorsThree} />
        </Box>

        <Text fontSize='1.5rem' mb='0.8rem' mt='2rem'>
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

        <Text fontSize='1.5rem' mb='0.8rem' mt='2rem'>
          Benchmarking Analysis Results
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

        <Text fontSize='1.5rem' mb='0.8rem' mt='2rem'>
          SWOT Analysis
        </Text>
        <Text mb='0.8rem'>
          I also conduct an SWOT analysis with my direct competitors{' '}
          <strong>
            to evaluate them, and understand their market position compared to
            my proposed value proposition.
          </strong>
        </Text>

        <Box display='flex' flexDirection='row' gap='5rem'>
          <Box>
            <Text mb='0.8rem' fontWeight='500'>
              Santander
            </Text>
            <Text mb='0.8rem'>
              Santander has the advantage of having high name recognition and
              its platform offers a plethora of investment-related materials.
              The platform is designed in a way that encourages users to become
              part of the investment community.
            </Text>
            <Box maxWidth='80%' marginTop='2rem'>
              <img src={SWOTSantander} />
            </Box>
          </Box>

          <Box>
            <Text mb='0.8rem' fontWeight='500'>
              Novobanco
            </Text>
            <Text mb='0.8rem'>
              Novo Banco provides a wealth of detailed information on
              investments, presented in a well-organized manner that covers a
              broad range of topics aimed at assisting a wide audience.
            </Text>
            <Box maxWidth='80%' marginTop='4rem'>
              <img src={SWOTNovobanco} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default MillenniumProject;
