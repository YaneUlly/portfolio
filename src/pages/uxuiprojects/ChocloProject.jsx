import ChocloWebsite from '../../assets/uxuiprojects/ChocloWebsite.png';
import Personas from '../../assets/uxuiprojects/personas-choclo.png';
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
import mockup from '../../assets/uxuiprojects/mockup-choclo.png';
import Millennium from '../../assets/uxuiprojects/Millenium.png';
import Fabrica from '../../assets/uxuiprojects/Fabrica.png';
import { useState, useEffect } from 'react';
import {
  Flex,
  Text,
  Box,
  Image,
  Button,
  useColorMode,
  useTheme,
  Center,
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
import { Link } from 'react-router-dom';

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
        m='2rem 0 0 1.2rem'
      >
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to='/portfolio'>Portfolio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <Link to='/portfolio/uxuidesign/chocloproject'>Choclo Project</Link>
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
        Choclo Website
      </Text>

      <Text
        m={{ base: '0 1rem 2rem 1rem', xl: '0 0 4rem 1.2rem' }}
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
          Choclo is a Peruvian restaurant in Lisbon that needed a <strong>website redesign</strong> to better support both <strong>customer decision-making</strong> and <strong>business goals</strong>.
          </Text>
          <Text
            mb='0.8rem'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          >
            As a <strong>freelance Product Designer</strong>, I was brought in to <strong>improve the website experience</strong> and <strong>define the foundation for a future e-commerce platform</strong>. The project focused on making key information easier to access, reducing user friction, and creating a more consistent and responsive experience across devices.
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
                  <Td>Choclo</Td>
                </Tr>
                <Tr>
                  <Td>Year</Td>
                  <Td>2023 - 2024</Td>
                </Tr>
                <Tr>
                  <Td>Role</Td>
                  <Td>Freelance Product Designer</Td>
                </Tr>
                <Tr>
                  <Td>Scope of Work</Td>
                  <Td>
                    UX Research, Information Architecture, UI Design, Responsive Design, Prototyping, Wix Development
                  </Td>
                </Tr>
                <Tr>
                  <Td>Tools</Td>
                  <Td>Figma, Miro, Notion, Wix Studio</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Link to='https://www.choclolisboa.com' isExternal>
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

        <Box w='100%' >
          <Text color='black'>
            The existing website was not <strong>effectively supporting users in their decision-making journey</strong>. Important service information, such as menu details, booking guidance, opening hours, delivery options, and voucher usage, was either unclear or difficult to find. This created friction for users and <strong>increased the volume of repeated questions handled by the team</strong>. On top of that, the interface lacked consistency, readability, and visual hierarchy, which reduced clarity and trust.
          </Text>
        </Box>
      </Box>

     <Flex
  direction={{ base: 'column', md: 'row' }}
  gap={6}
>
  <Box
    flex="1"
    p={{ base: '1.5rem 1rem', xl: '2rem 2rem 1.5rem 8rem' }}
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
      Goal
    </Text>

    <Box w='100%'>
      <Text color='black'>
        Design a <strong>clearer</strong> and <strong>more effective website experience</strong> that improves access to <strong>key service information</strong>, <strong>supports customer intent</strong>, and <strong>reduces friction</strong> for both users and the business.
      </Text>
    </Box>
  </Box>

  <Box
    flex="1"
    p={{ base: '1.5rem 1rem', xl: '2rem 10rem 1.5rem 2rem' }}
  >
    <Text
      id='role'
      fontSize='2rem'
      fontWeight='600'
      mb='1rem'
      color={
        colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
      }
    >
      My role
    </Text>

    <Box w='100%'>
      <Text color='black'>
        As a Freelance Product Designer, <strong>I led the redesign of Choclo’s website from discovery to implementation</strong>. I conducted research, defined the information architecture, prioritized key features, designed the responsive user interface, and built the final experience in Wix Studio.
      </Text>
    </Box>
   
  </Box>
</Flex>

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
          Discovery
        </Text>
          <Box>
            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
             To better understand the problem, I <strong>analyzed both business and user perspectives</strong>. I reviewed customer reviews, website submission forms, and the existing landing page, then complemented this with <strong>benchmarking</strong> and <strong>two rounds of discovery interviews</strong>: one with Choclo staff and another with people who frequently dine out.
            </Text>
          </Box>


       <Flex
  direction={{ base: 'column', md: 'row' }}
  gap={10}
  align="flex-start"
>
  {/* BLOCO 1 */}
  <Box flex="1">
    <Text
      fontSize='1.5rem'
      mb='0.8rem'
      mt='2rem'
      color={
        colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
      }
    >
      Research methods
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
        Review analysis (customer reviews, comments, and website forms)
      </ListItem>
      <ListItem mb='0.8rem'>Existing website audit</ListItem>
      <ListItem mb='0.8rem'>Competitive benchmark</ListItem>
      <ListItem mb='0.8rem'>Staff interview</ListItem>
      <ListItem mb='0.8rem'>
        Public interview with target users
      </ListItem>
    </UnorderedList>
  </Box>

  {/* BLOCO 2 */}
  <Box flex="1">
    <Text
      fontSize='1.5rem'
      mb='0.8rem'
      mt='2rem'
      color={
        colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
      }
    >
      What I wanted to understand
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
        What information users look for when deciding where to eat
      </ListItem>
      <ListItem mb='0.8rem'>
        What questions or frustrations they had when trying to find restaurant-related information
      </ListItem>
      <ListItem mb='0.8rem'>
        Which channels they used before visiting the website
      </ListItem>
      <ListItem mb='0.8rem'>
        What the business team perceived as recurring customer pain points
      </ListItem>
    </UnorderedList>
  </Box>
</Flex>

<Box>
        <Text
          id='research'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          paddingTop='1.5rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          Key insights
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
        Users often turned to the website only after failing to find the information they needed on Instagram or Google, which meant <strong>the website had to act as a reliable source of clarity rather than just a brand presence</strong>.
      </ListItem>
      <ListItem mb='0.8rem'>
        Menu, prices, reviews, food photos, and location were some of <strong>the most important factors influencing users’ decision-making</strong> when choosing a restaurant.
      </ListItem>
      <ListItem mb='0.8rem'>
        Reservation-related information was one of <strong>the main recurring friction points</strong>, both for users trying to find answers and for the team handling repeated questions.
      </ListItem>
      <ListItem mb='0.8rem'>
        Choclo’s audience was diverse, with Spanish, English, and Portuguese speakers, which reinforced the need for clear, scannable communication and intuitive information architecture.
      </ListItem>
      <ListItem mb='0.8rem'>
        The existing website lacked visual consistency, readability, and clear hierarchy, making it harder for users to quickly <strong>understand the content</strong> and <strong>find essential information</strong>.
      </ListItem>
      <ListItem mb='0.8rem'>
        Benchmarking showed that high-performing restaurant websites made core actions highly visible, used concise and scannable content, and built trust through real photography, reviews, and clear service information.
      </ListItem>
    </UnorderedList>
          </Box>
          </Box>

 <Flex
  direction={{ base: 'column', md: 'row' }}
  gap={10}
  align="flex-start"
>
  {/* BLOCO 2 */}
  <Box flex="1">
    <Text
      fontSize='1.5rem'
      mb='0.8rem'
      mt='2rem'
      color={
        colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
      }
    >
      User archetypes
    </Text>
    <Text
  mb='0.8rem'
  color={
    colorMode === 'dark'
      ? theme.colors.dark.text
      : theme.colors.light.text
  }
>
  From the research, three recurring user patterns emerged:
</Text>

    <Box
      mt='1.5rem'
      w="100%" 
    >
      <img
        src={Personas}
        alt='persona-choclo'
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  </Box>

  {/* BLOCO 1 */}
  <Box flex="1">
    <Text
      fontSize='1.5rem'
      mb='0.8rem'
      mt='2rem'
      color={
        colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
      }
    >
      Benchmark takeaways
    </Text>

    <Text
      mb='0.8rem'
      color={
        colorMode === 'dark'
          ? theme.colors.dark.text
          : theme.colors.light.text
      }
    >
      To complement these findings, I also reviewed restaurant websites in Lisbon, including both direct competitors and well-established local brands. A few recurring patterns stood out:
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
        High-performing websites made core actions such as menu, reservations, and contact information visible early in the experience.
      </ListItem>
      <ListItem mb='0.8rem'>
        Concise, scannable content improved clarity and reduced friction.
      </ListItem>
      <ListItem mb='0.8rem'>
        Real photography, reviews, and storytelling helped build credibility.
      </ListItem>
      <ListItem mb='0.8rem'>
        Clear navigation and responsive layouts made practical information easier to access.
      </ListItem>
    </UnorderedList>
  </Box>
</Flex>


        <Text
  fontSize='1.5rem'
  mb='0.8rem'
  mt='2rem'
  color={
    colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
  }
>
  Primary journey
</Text>

<Text
  mb='0.8rem'
  color={
    colorMode === 'dark'
      ? theme.colors.dark.text
      : theme.colors.light.text
  }
>
  One of the clearest patterns came from high-intent users. In Ricardo’s journey, interest was built through food discovery platforms, social media, and visual content, but friction appeared when he tried to confirm whether it was possible to make a reservation. Since that information was not easy to find, he had to rely on other channels to continue his search.
</Text>

<Text
  mb='0.8rem'
  color={
    colorMode === 'dark'
      ? theme.colors.dark.text
      : theme.colors.light.text
  }
>
  This revealed an important gap: <strong>the website was not effectively supporting users at a high-intent moment, when clarity, trust, and actionability mattered most</strong>.
</Text>

<Box
  maxW={{ base: '600px', md: '800px' }}
  mx="auto"
  my="2.5rem"
>
  <img
    alt='user-journey-choclo'
    src={UserJourneyChocloThree}
    style={{ width: '100%', height: 'auto' }}
  />
</Box>

<Text
  mb='0.8rem'
  color={
    colorMode === 'dark'
      ? theme.colors.dark.text
      : theme.colors.light.text
  }
>
  This journey helped define three design priorities:
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
    Make key actions, such as reservations, easier to find.
  </ListItem>
  <ListItem mb='0.8rem'>
    Surface practical service information earlier in the experience.
  </ListItem>
  <ListItem mb='0.8rem'>
    Reduce reliance on external channels for decision-making
  </ListItem>
</UnorderedList>

        <Text
          id='research'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          paddingTop='1.5rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          Design strategy
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Based on the research, the redesign needed to do more than improve the visual interface — it had to support decision-making, reduce uncertainty, and make Choclo’s services easier to understand.
        </Text>

          <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
       To achieve this, I focused on three priorities:
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
    Making essential information easier to find;
  </ListItem>
  <ListItem mb='0.8rem'>
    Supporting high-intent actions such as reservations;
  </ListItem>
  <ListItem mb='0.8rem'>
    Strengthening trust through clearer communication, storytelling, and social proof.
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
          Prioritized features
        </Text>
        <Text
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          From the discovery phase, I identified the features that would have the greatest impact on both user clarity and business needs:
        </Text>
<UnorderedList
  mb='1.2rem'
  mt='1.2rem'
  color={
    colorMode === 'dark'
      ? theme.colors.dark.text
      : theme.colors.light.text
  }
>
  <ListItem mb='0.8rem'>
    <strong>Menu and pricing:</strong> to support decision-making with practical and highly requested information
  </ListItem>
  <ListItem mb='0.8rem'>
    <strong>Reservations:</strong> to reduce friction for high-intent users looking to take action
  </ListItem>
  <ListItem mb='0.8rem'>
    <strong>About / brand story:</strong> to communicate Choclo’s identity and increase emotional connection
  </ListItem>
   <ListItem mb='0.8rem'>
    <strong>FAQ:</strong> to address recurring questions and reduce repetitive support effort
  </ListItem>
  <ListItem mb='0.8rem'>
    <strong>Contact, location, and opening hours:</strong> to make key operational information easy to access
  </ListItem>
  <ListItem mb='0.8rem'>
    <strong>Reviews</strong>: to reinforce trust and credibility through social proof
  </ListItem>
  <ListItem mb='0.8rem'>
    <strong>Shop</strong>: to support the business goal of introducing a future e-commerce experience
  </ListItem>
</UnorderedList>
     <Text
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Secondary features such as newsletter sign-up were considered, but the main focus remained on improving clarity, trust, and access to essential service information.
        </Text>

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
              Information architecture
            </Text>
            <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
             To validate how content should be grouped and surfaced, I used a <strong>card sorting exercise</strong> to understand where users expected to find key information.
            </Text>
             <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
This helped confirm that practical information such as contact details, opening hours, and reservations needed clearer visibility, while features like vouchers and additional content could be positioned more intentionally within the navigation structure.
            </Text>
 <Text
              mb='0.8rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
The exercise also reinforced the importance of <strong>keeping the architecture simple</strong>, making it easier for users to scan the website and find what they needed without relying on external channels.
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


 <Text
          id='design'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          mt='1.5rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          User flow & Wireframes
        </Text>
        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='2rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          User flow
        </Text>
      
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          With the priorities defined, I mapped the user flow to ensure the website would guide visitors from discovery to action with as little friction as possible.
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          The flow focused on helping users quickly access the information that mattered most, such as menu, reservations, contact details, and service-related questiions, while also reinforcing trust through reviews, storytelling, and visual content.
        </Text>

        <Box maxWidth='100%' marginTop='2rem'>
          <img src={UserFlowChoclo} alt='user-flow-choclo' />
        </Box>
      </Box>

      <Box
        p={{ base: '1.5rem 1rem 1.5rem 1rem', xl: '2rem 10rem 1.5rem 8rem' }}
      >
        <Text
          fontSize='1.5rem'
          mb='0.8rem'
          mt='1.5rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
          }
        >
          Wireframes
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          Before moving into the final interface, I explored the page structure through sketches and mid-fidelity wireframes. This helped define content hierarchy, validate the placement of high-priority sections, and ensure the experience remained clear and scannable across devices.
        </Text>
         <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
          The goal at this stage was not only to improve aesthetics, but to organize information in a way that supported user intent and reduced uncertainty.
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
          id='design'
          fontSize='2rem'
          fontWeight='600'
          mb='1rem'
          mt='1.5rem'
          color={
            colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
          }
        >
          From structure to interface
        </Text>
        <Text
          mb='0.8rem'
          color={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        >
         With the information architecture and priorities defined, I translated the experience into a responsive interface in Wix Studio. The final UI focused on improving clarity, visual consistency, and content hierarchy, while making key actions such as reservations, contact, and menu exploration easier to access.
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: 'none', md: '2rem' }}
          mb='2rem'
        >
        
            <Link
              to='https://www.figma.com/proto/f1kR3sihs8aU4eb6neKrYs/Choclo-Website?type=design&node-id=0-1&viewport=321%2C164%2C0.04&t=T0RCpkVVPIPs3wRx-0&scaling=scale-down&starting-point-node-id=54%3A200'
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
                Visit live website
              </Button>
            </Link>
        </Box>

        <img
              src={mockup}
              style={{ width: '100%', height: 'auto' }}
              alt='choclo-ui-screen'
            />
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
          <Link to='/portfolio/uxuidesign/millenniumproject'>
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
