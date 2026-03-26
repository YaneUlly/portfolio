import Choclo from '../../assets/uxuiprojects/ChocloWebsite.png';
import Fabrica from '../../assets/uxuiprojects/Fabrica.png';
import Remynd from '../../assets/uxuiprojects/remynd-hero.png';
import Defition from '../../assets/uxuiprojects/remynd-definition.png';
import Branding from '../../assets/uxuiprojects/remynd-branding.png';
import Wireframes from '../../assets/uxuiprojects/remynd-wireframes.png';
import Website from '../../assets/uxuiprojects/remynd-website.png';
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

function RemyndFoundations() {
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
    image: Branding, 
  },
  {
    title: '2. Website Structure',
    description: 'A website structure focused on clarity.',
    image: Wireframes, 
  },
   {
    title: '3. Website Implementation',
    description: 'A responsive implementation of the website using Framer.',
    image: Website, 
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
            <Link to='/portfolio/uxuidesign/remyndbranding'>Remynd</Link>
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
        Remynd
      </Text>

      <Text
        m={{ base: '0 4rem 2rem 1rem', xl: '0 46rem 4rem 1.2rem' }}
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      >
         Building the Foundations of an AI Product Experience: Structuring the brand and website of an early-stage healthcare AI product to improve clarity, communication, and user understanding.
      </Text>

  
     <Image
        src={Remynd}
        alt='remynd-website'
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
           Instead of focusing only on visual design, this project was about <strong>translating a complex AI-driven product</strong> into a <strong>clear and human-centered experience</strong>.
At an early stage, the main challenge was not only building a brand, but defining how the product should be <strong>perceived and understood</strong> by users.
          </Text>
          <Text
            mb='0.8rem'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          >
           Remynd is a startup focused on improving healthcare workflows using AI.
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
                  <Td>2024</Td>
                </Tr>
                <Tr>
                  <Td>Scope of Work</Td>
                  <Td>
                    Ux Research, Ui Design, Responsive Design, Framer,
                    Prototyping, Wireframe
                  </Td>
                </Tr>
                <Tr>
                  <Td>Tools</Td>
                  <Td>Figma & Framer</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Link to='https://remynd.me/' isExternal>
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
      Problem
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
        The main challenge was not just visual, it was{' '}
        <strong>communication and perception</strong>:
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
          How to explain a complex AI product in a simple way
        </ListItem>
        <ListItem mb='0.8rem'>
          How to make the product feel trustworthy in a healthcare context
        </ListItem>
        <ListItem mb='0.8rem'>
          How to position AI as a helpful assistant, not a cold system
        </ListItem>
        <ListItem mb='0.8rem'>
          How to create alignment between product, brand, and user expectations
        </ListItem>
      </UnorderedList>
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
          Translated business and product expectations into a clear user-facing
          experience
        </ListItem>
        <ListItem mb='0.8rem'>
          Structured how the product should be communicated visually and
          conceptually
        </ListItem>
        <ListItem mb='0.8rem'>
          Designed and implemented the initial brand and website
        </ListItem>
        <ListItem mb='0.8rem'>
          Worked closely with leadership to align product vision and
          communication
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
    Approach
  </Text>

  <Flex
    direction={{ base: 'column', xl: 'row' }} 
    align='flex-start'
    gap='1rem'
  >
    {/* TEXTO */}
    <Box flex='1'>
      <Text mb='0.8rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        Before moving into design, I focused on understanding:
      </Text>

      <UnorderedList mb='1.2rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        <ListItem mb='0.8rem'>What the product represents</ListItem>
        <ListItem mb='0.8rem'>Who the users are</ListItem>
        <ListItem mb='0.8rem'>How the product should be perceived</ListItem>
      </UnorderedList>

      <Text mb='0.8rem' color={colorMode === 'dark'
        ? theme.colors.dark.text
        : theme.colors.light.text}>
        This allowed me to move from visual execution to experience definition.
      </Text>
    </Box>

    {/* IMAGEM */}
    <Image
      src={Defition}
      alt='remynd-definition'
      w={{ base: '100%', xl: '40%' }}
    />
  </Flex>
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
    Key Decisions
  </Text>

  <SimpleGrid
    columns={{ base: 1, md: 2, xl: 3 }}
    spacing={{ base: '1.5rem', xl: '2rem' }}
    alignItems='start'
  >
    <Box>
      <Text
        fontSize='1.5rem'
        mb='0.8rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.h3
            : theme.colors.light.h3
        }
      >
        1. Humanizing AI
      </Text>

      <Text
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
        lineHeight='1.8'
      >
        Shifted the perception of AI from technical to supportive and intuitive.
      </Text>
    </Box>

    <Box>
      <Text
        fontSize='1.5rem'
        mb='0.8rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.h3
            : theme.colors.light.h3
        }
      >
        2. Simplifying Complexity
      </Text>

      <Text
        mb='0.8rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
        lineHeight='1.8'
      >
        Reduced cognitive load by:
      </Text>

      <UnorderedList
        spacing='0.7rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
        lineHeight='1.8'
        ml='1.2rem'
      >
        <ListItem>Using minimal structure</ListItem>
        <ListItem>Prioritizing key information</ListItem>
        <ListItem>Avoiding unnecessary visual noise</ListItem>
      </UnorderedList>
    </Box>

    <Box>
      <Text
        fontSize='1.5rem'
        mb='0.8rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.h3
            : theme.colors.light.h3
        }
      >
        3. Creating Emotional Trust
      </Text>

      <Text
        mb='0.8rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
        lineHeight='1.8'
      >
        Introduced:
      </Text>

      <UnorderedList
        spacing='0.7rem'
        color={
          colorMode === 'dark'
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
        lineHeight='1.8'
        ml='1.2rem'
      >
        <ListItem>Warm color palette</ListItem>
        <ListItem>Soft visual language</ListItem>
        <ListItem>Accessible communication</ListItem>
      </UnorderedList>
    </Box>
  </SimpleGrid>
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
    Execution
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
      To support this strategy, I developed:
    </Text>
  </Box>
</Box>
<Box w='100%' position='relative'>
 <Box w='100%' position='relative'>
  <Box
    overflow='hidden'
    w='100%'
    maxW='1100px'
    mx='auto'
    position='relative'
  >
    <Flex
      transform={`translateX(-${currentCard * (100 / executionCards.length)}%)`}
      transition='transform 0.45s ease'
      w={`${executionCards.length * 100}%`}
    >
      {executionCards.map((card, index) => (
        <Box
          key={index}
          w={`${100 / executionCards.length}%`}
          flexShrink={0}
          px={{ base: '0.25rem', md: '0.5rem' }}
        >
          <Box
            borderRadius='2rem'
            p={{ base: '1.25rem', md: '1.5rem', xl: '2rem' }}
            bg={
              colorMode === 'dark'
                ? theme.colors.dark.card || theme.colors.dark.bg
                : theme.colors.light.card || theme.colors.light.bg
            }
              border='1px solid'
  borderColor={
    colorMode === 'dark'
      ? 'whiteAlpha.200'
      : 'blackAlpha.200'
  }
          >
            <Text
              fontSize={{ base: '1.6rem', xl: '2.2rem' }}
              fontWeight='700'
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.h3
                  : theme.colors.light.h3
              }
            >
              {card.title}
            </Text>

            <Text
              fontSize={{ base: '1rem', xl: '1.1rem' }}
              lineHeight='1.8'
              mb='1.5rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              {card.description}
            </Text>

            <Box
              w='100%'
              h={{ base: '260px', md: '360px', xl: '420px' }}
              display='flex'
              alignItems='center'
              justifyContent='center'
              borderRadius='1.5rem'
              overflow='hidden'
            >
              <Image
                src={card.image}
                alt={card.title}
                w='100%'
                h='100%'
                objectFit='contain'
                objectPosition='left'
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Flex>
  </Box>

  <Flex justify='center' align='center' gap='1rem' mt='1.5rem'>
    <Button
      onClick={goToPrevious}
      variant='ghost'
      borderRadius='full'
      fontSize='1.5rem'
      aria-label='Previous card'
    >
      ←
    </Button>

    <Flex gap='0.6rem'>
      {executionCards.map((_, index) => (
        <Box
          key={index}
          w='10px'
          h='10px'
          borderRadius='full'
          cursor='pointer'
          bg={
            currentCard === index
              ? colorMode === 'dark'
                ? theme.colors.dark.h1
                : theme.colors.light.h1
              : colorMode === 'dark'
              ? 'whiteAlpha.400'
              : 'blackAlpha.300'
          }
          onClick={() => setCurrentCard(index)}
          transition='all 0.2s ease'
        />
      ))}
    </Flex>

    <Button
      onClick={goToNext}
      variant='ghost'
      borderRadius='full'
      fontSize='1.5rem'
      aria-label='Next card'
    >
      →
    </Button>
  </Flex>
  </Box>
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
        This project reinforced that:
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
          Product clarity is more important than visual complexity
        </ListItem>
        <ListItem mb='0.8rem'>
          Early-stage products need structure before scale
        </ListItem>
        <ListItem mb='0.8rem'>
          Aligning business vision and user perception is critical
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
      Key learning
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
          Established a clear communication layer for the product
        </ListItem>
        <ListItem mb='0.8rem'>
          Improved how the product is perceived and understood
        </ListItem>
        <ListItem mb='0.8rem'>
          Created a foundation for future product and design decisions
        </ListItem>
        <ListItem mb='0.8rem'>
          Delivered a complete solution in a short timeframe (1 month)
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

export default RemyndFoundations;
