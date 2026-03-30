import Choclo from '../../assets/uxuiprojects/ChocloWebsite.png';
import Fabrica from '../../assets/uxuiprojects/Fabrica.png';
import Hero from '../../assets/productowner/hero-photos.png';
import Capabilities from '../../assets/productowner/product-capabilities.png';
import Users from '../../assets/productowner/product-users.png';
import Flow from '../../assets/productowner/remynd-flow.png';
import Storytelling from '../../assets/productowner/storytelling.png';
import Design1 from '../../assets/productowner/Design1.png';
import Design2 from '../../assets/productowner/Design2.png';
import Design3 from '../../assets/productowner/Design3.png';
import Roadmap from '../../assets/productowner/roadmap.png';
import { useState, useEffect } from 'react';
import {
  Flex,
  Text,
  Box,
  Image,
  Button,
  useColorMode,
  useTheme,
   SimpleGrid,
} from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function RemyndProduct() {
  const [activeSection, setActiveSection] = useState('');

  const { colorMode } = useColorMode();
  const [currentCard, setCurrentCard] = useState(0);
  const theme = useTheme();

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'myrole', label: 'My Role' },
    { id: 'approach', label: 'Approach' },
    { id: 'keydecisions', label: 'Key Decisions' },
    { id: 'execution', label: 'Execution' },
    { id: 'outcome', label: 'Outcome' },
    { id: 'keylearning', label: 'Key Learning' },
  ];

const executionCards = [
  {
    title: '1. Visual Identity',
    description: 'A visual identity aligned with product positioning.',
    image: Design1, 
  },
];

const goToPrevious = () => {
  setCurrentCard(prev =>
    prev === 0 ? executionCards.length - 1 : prev - 1
  );
};

const goToNext = () => {
  setCurrentCard(prev =>
    prev === executionCards.length - 1 ? 0 : prev + 1
  );
};

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
            <Link to='/portfolio/productowner/remyndproduct'>Remynd</Link>
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
        Remynd — Structuring a Healthcare AI Product
      </Text>

      <Text
        m={{ base: '0 4rem 2rem 1rem', xl: '0 52rem 4rem 1.2rem' }}
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
         Helping shape product vision, capabilities, workflows, and delivery direction for a modular healthcare AI platform.
      </Text>

  
     <Image
        src={Hero}
        alt='remynd-product'
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
           At Remynd, I contributed to the <strong>conception and structuring</strong> of a modular healthcare AI product, helping define how the platform should be <strong>understood, organized, and evolved</strong> across different workflows and user needs.
          </Text>
          <Text
            mb='0.8rem'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          >
           My role was centered on product strategy: understanding the audience, shaping capabilities, organizing feature logic, supporting delivery planning, and guiding design direction to ensure coherence between vision and execution. 
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
            <Table variant='simple' size='sm' mt='1rem'>
              <Tbody>
                <Tr>
                  <Td>Client</Td>
                  <Td>Remynd</Td>
                </Tr>
                <Tr>
                  <Td>Year</Td>
                  <Td>2024 - Current</Td>
                </Tr>
                <Tr>
                  <Td>Scope of Work</Td>
                  <Td>
                    Product Strategy, UX Research, Feature Structuring, UI Direction, Wireframing, Prototyping
                  </Td>
                </Tr>
                <Tr>
                  <Td>Tools</Td>
                  <Td>Figma, ClickUp, Replit, Teams</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Box
  display='flex'
  alignItems='flex-start'
  gap='0.8rem'
  p='1rem 1.2rem'
  borderRadius='0.8rem'
  bg={
    colorMode === 'dark'
      ? 'rgba(255,255,255,0.05)'
      : 'rgba(0,0,0,0.05)'
  }
  border='1px solid'
  borderColor={
    colorMode === 'dark'
      ? 'rgba(255,255,255,0.1)'
      : 'rgba(0,0,0,0.08)'
  }
  mb='1.5rem'
>
  {/* Ícone */}
  <Box fontSize='1.2rem'>⚠️</Box>

  {/* Texto */}
  <Text
    fontSize='0.95rem'
    lineHeight='1.6'
    color={
      colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text
    }
  >
    Due to confidentiality, visuals have been simplified and selected parts of the process are shown.
  </Text>
</Box>
        </Box>
      </Flex>

      <Flex
  direction={{ base: 'column', xl: 'row' }}
  gap={{ base: '2rem', xl: '3rem' }}
  p={{ base: '1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
>
  <Box flex='1'>
    <Text
      id='problem'
      fontSize='2rem'
      fontWeight='600'
      mb='1rem'
      color={
        colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
      }
    >
      Context
    </Text>

    <Box w='100%'>
      <Text
        mb='0.8rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
        Remynd’s product was being shaped as a <strong>modular healthcare AI platform</strong> designed to support clinical and operational workflows across different stages of care.
      </Text>

       <Text
        mb='0.8rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
    As the product evolved, one of the main challenges was to <strong>transform a complex set of opportunities, ideas, and workflows into a clearer product structure,</strong> one that could support user needs, business direction, and execution by the team.
      </Text>
    </Box>
  </Box>

  <Box flex='1'>
    <Text
      id='myrole'
      fontSize='2rem'
      fontWeight='600'
      mb='1rem'
      color={
        colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
      }
    >
      My role
    </Text>
    <Text
        mb='0.8rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
    My contribution focused on product conception and structuring, including:
      </Text>

    <Box>
      <UnorderedList
        mb='1.2rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
        <ListItem mb='0.8rem'>
          Understanding user contexts and operational realities
        </ListItem>
        <ListItem mb='0.8rem'>
          Helping define product capabilities and workflow logic
        </ListItem>
        <ListItem mb='0.8rem'>
          Organizing ideas into clearer product directions
        </ListItem>
        <ListItem mb='0.8rem'>
          Contributing to personas, story mapping, and feature framing
        </ListItem>
        <ListItem mb='0.8rem'>
          Supporting roadmap thinking and prioritization
        </ListItem>
        <ListItem mb='0.8rem'>
          Guiding the design team in translating product logic into interfaces and flows
        </ListItem>
         <ListItem mb='0.8rem'>
          Helping connect strategic vision with execution across teams
        </ListItem>
      </UnorderedList>
    </Box>
  </Box>
</Flex>


      <Box
  p={{ base: '1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
>
  <Text
    id='approach'
    fontSize='2rem'
    fontWeight='600'
    mb='1rem'
    color={
      colorMode === 'dark'
        ? theme.colors.dark.h1
        : theme.colors.light.h1
    }
  >
    Product Framing
  </Text>

  <Flex
    direction={{ base: 'column', xl: 'row' }} 
    align='flex-start'
    gap='2rem'
  >
    {/* TEXTO */}
    <Box flex='1'>
      <Text mb='0.8rem' mr='2rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        A core part of my role was helping frame the product at a higher level: not as isolated screens or features, but as a connected system of capabilities, workflows, and support mechanisms.
      </Text>

         <Text mb='0.8rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        This required defining:
      </Text>

      <UnorderedList mb='1.2rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        <ListItem mb='0.8rem'>What the product should help users accomplish</ListItem>
        <ListItem mb='0.8rem'>How different parts of the platform connect</ListItem>
        <ListItem mb='0.8rem'>Where each capability adds value</ListItem>
           <ListItem mb='0.8rem'>How the product should be communicated internally and externally</ListItem>
      </UnorderedList>
    </Box>

    {/* IMAGEM */}
    <Image
      src={Capabilities}
      alt='remynd-capabilities'
      w={{ base: '100%', xl: '40%' }}
    />
  </Flex>
</Box>

 <Box
  p={{ base: '1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
>
  <Text
    id='approach'
    fontSize='2rem'
    fontWeight='600'
    mb='1rem'
    color={
      colorMode === 'dark'
        ? theme.colors.dark.h1
        : theme.colors.light.h1
    }
  >
    Understanding Users and Problems
  </Text>

  <Flex
    direction={{ base: 'column', xl: 'row' }} 
    align='flex-start'
    gap='2rem'
  >

    {/* TEXTO */}
    <Box flex='1'>
      <Text mb='0.8rem' mr='2rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
       To support product decisions, I worked from a user and workflow-centered perspective. Research artifacts such as personas, role-based analysis, operational workflows, and friction mapping helped ground the product in real contexts rather than assumptions.
      </Text>

         <Text mb='0.8rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        This phase was important to clarify:
      </Text>

      <UnorderedList mb='1.2rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        <ListItem mb='0.8rem'>Who the users are</ListItem>
        <ListItem mb='0.8rem'>What they need from the platform</ListItem>
        <ListItem mb='0.8rem'>Where friction exists in their routines</ListItem>
           <ListItem mb='0.8rem'>Which problems were worth prioritizing</ListItem>
      </UnorderedList>
    </Box>

     {/* IMAGEM */}
    <Image
      src={Users}
      alt='remynd-users'
      w={{ base: '100%', xl: '40%' }}
    />
  </Flex>
</Box>

<Box
  p={{ base: '1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
>
  <Text
    id='approach'
    fontSize='2rem'
    fontWeight='600'
    mb='1rem'
    color={
      colorMode === 'dark'
        ? theme.colors.dark.h1
        : theme.colors.light.h1
    }
  >
    Structuring the Product
  </Text>

  <Flex
    direction={{ base: 'column', xl: 'row' }} 
    align='flex-start'
    gap='2rem'
  >

    {/* TEXTO */}
    <Box flex='1'>
      <Text mb='0.8rem' mr='2rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
       Once the problem space was clearer, I helped organize the product into more structured capability areas and journey-based groupings.
      </Text>

         <Text mb='0.8rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        This made it easier to:
      </Text>

      <UnorderedList mb='1.2rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        <ListItem mb='0.8rem'>Reduce fragmentation</ListItem>
        <ListItem mb='0.8rem'>Understand relationships between features</ListItem>
        <ListItem mb='0.8rem'>Organize the platform around user value</ListItem>
           <ListItem mb='0.8rem'>Create a stronger basis for prioritization and delivery planning</ListItem>
      </UnorderedList>

      <Text mb='0.8rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        This work was especially relevant in turning broad ideas into something that teams could actually build and evolve.
      </Text>
    </Box>
  </Flex>
</Box>

<Box p={{ base: '1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}>
    {/* IMAGEM */}
    <Image
      src={Flow}
      alt='remynd-flow'
      w={{ base: '100%', xl: '100%' }}
    /> 
    </Box>

<Box
  p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
>
  <Text
    id='keydecisions'
    fontSize='2rem'
    fontWeight='600'
    mb='2rem'
    color={
      colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
    }
  >
    Solution Storytelling
  </Text>
<Text mb='0.8rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        Another important part of my role was helping shape how the product should be communicated, both as an internal product concept and as an external narrative.
      </Text>
      <Text mb='0.8rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        Rather than describing isolated functionalities, the goal was to communicate the product as a coherent support system: modular, workflow-oriented, and designed to reduce complexity in healthcare environments.
      </Text>
  <Text mb='0.8rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        This storytelling work helped align product thinking, design direction, and strategic communication.
      </Text>
</Box>
      
      <Box p={{ base: '1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}>
    {/* IMAGEM */}
    <Image
      src={Storytelling}
      alt='remynd-storytelling'
      w={{ base: '100%', xl: '100%' }}
    /> 
    </Box>

<Box
  p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
>
  <Text
    id='execution'
    fontSize='2rem'
    fontWeight='600'
    mb='1rem'
    color={
      colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
    }
  >
   Design Direction and Cross-Team Alignment
  </Text>

  <Box mb='2rem'>
    <Text
      mb='0.8rem'
      color={
        colorMode === 'dark'
          ? theme.colors.dark.text
          : theme.colors.light.text
      }
    >
      Although this case is primarily about product, design was also an important part of my contribution.
    </Text>
    <Text
      mb='0.8rem'
      color={
        colorMode === 'dark'
          ? theme.colors.dark.text
          : theme.colors.light.text
      }
    >
      I helped guide the design team by providing product direction around:
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
          What each part of the experience needed to communicate
        </ListItem>
        <ListItem mb='0.8rem'>
          How workflows should be reflected in the interface
        </ListItem>
        <ListItem mb='0.8rem'>
          How to keep screens aligned with product logic and user context
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
      This helped ensure that design decisions supported the broader product structure, rather than becoming disconnected visual outputs.
    </Text>
  </Box>
</Box>

<Box p={{ base: '1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}>
    {/* IMAGEM */}
    <Image
      src={Design1}
      alt='remynd-design'
      w={{ base: '100%', xl: '100%' }}
    /> 
    </Box>

<Box
  p={{ base: '1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
>
  <Text
    id='approach'
    fontSize='2rem'
    fontWeight='600'
    mb='1rem'
    color={
      colorMode === 'dark'
        ? theme.colors.dark.h1
        : theme.colors.light.h1
    }
  >
    Roadmap and Execution
  </Text>

  <Flex
    direction={{ base: 'column', xl: 'row' }} 
    align='flex-start'
    gap='2rem'
  >
    {/* TEXTO */}
    <Box flex='1'>
      <Text mb='0.8rem' mr='2rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        As the product matured, product structuring also fed into delivery planning. Roadmap thinking helped connect capabilities, priorities, and team execution over time.
      </Text>

         <Text mb='0.8rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        This made it easier to:
      </Text>

      <UnorderedList mb='1.2rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        <ListItem mb='0.8rem'>Align work across initiatives</ListItem>
        <ListItem mb='0.8rem'>Clarify dependencies and sequence</ListItem>
        <ListItem mb='0.8rem'>Organize what should be delivered first</ListItem>
           <ListItem mb='0.8rem'>Support more intentional decision-making with the team</ListItem>
      </UnorderedList>
    </Box>

    {/* IMAGEM */}
    <Image
      src={Roadmap}
      alt='remynd-roadmap'
      w={{ base: '100%', xl: '40%' }}
    />
  </Flex>
</Box>

<Flex
  direction={{ base: 'column', xl: 'row' }}
  gap={{ base: '2rem', xl: '3rem' }}
  p={{ base: '1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
>
  <Box flex='1'>
    <Text
      id='outcome'
      fontSize='2rem'
      fontWeight='600'
      mb='1rem'
      color={
        colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
      }
    >
     Outcome
    </Text>

    <Box w='100%'>
      <Text
        mb='0.8rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
        This work contributed to a clearer product foundation for Remynd, helping organize the platform around capabilities, workflows, and more intentional delivery decisions.
      </Text>
      <Text
        mb='0.8rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
        More importantly, it strengthened the connection between:
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
          User understanding
        </ListItem>
        <ListItem mb='0.8rem'>
          Product structure
        </ListItem>
        <ListItem mb='0.8rem'>
          Design direction
        </ListItem>
         <ListItem mb='0.8rem'>
          and execution planning
        </ListItem>
      </UnorderedList>
    </Box>
  </Box>

  <Box flex='1'>
    <Text
      id='keylearning'
      fontSize='2rem'
      fontWeight='600'
      mb='1rem'
      color={
        colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
      }
    >
      Key Learnings
    </Text>

    <Box>
      <UnorderedList
        mb='1.2rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
        <ListItem mb='0.8rem'>
          Product clarity comes from structuring systems, not just features
        </ListItem>
        <ListItem mb='0.8rem'>
          User understanding is essential for meaningful prioritization
        </ListItem>
        <ListItem mb='0.8rem'>
          Story mapping and capability framing are powerful tools for organizing complexity
        </ListItem>
        <ListItem mb='0.8rem'>
         Good product work requires alignment between business, design, and development
        </ListItem>
         <ListItem mb='0.8rem'>
         Guiding execution is not only about planning delivery, but about giving teams a clear product direction
        </ListItem>
      </UnorderedList>
    </Box>
  </Box>
</Flex>

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
                Fabrica Project
              </Text>
            </Box>
          </Link>
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
        </Flex>
      </Box>
    </div>
  );
}

export default RemyndProduct;
