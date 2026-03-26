import { useState } from 'react';
import ProfilePhoto from '../assets/profile_portfolio.jpeg';
import AvatarPhoto from '../assets/avatar-photo.jpeg';
import Acervo from '../assets/webdevprojects/Acervo.png';
import VolleyBomb from '../assets/webdevprojects/Volleybomb.png';
import Choclo from '../assets/uxuiprojects/ChocloWebsite.png';
import Millennium from '../assets/uxuiprojects/Millenium.png';
import Agora from '../assets/webdevprojects/Agora.png';
import Fabrica from '../assets/uxuiprojects/Fabrica.png';
import {
  Flex,
  Text,
  Box,
  Button,
  Image,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function About() {
  const [selectedOption, setSelectedOption] = useState('All');
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const handleOptionClick = option => {
    setSelectedOption(option);
  };

  const renderProjects = () => {
    switch (selectedOption) {
      case 'Ux/Ui Design':
        return (
          <Box
            display='flex'
            flexDirection={{ base: 'column', md: 'row' }}
            gap='2rem'
            width={{ lg: '60rem' }}
          >
            <Link to='/portfolio/uxuidesign/chocloproject'>
              <Box>
                <Image src={Choclo} alt='Choclo Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
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

            <Link to='/portfolio/uxuidesign/millenniumproject'>
              <Box>
                <Image src={Millennium} alt='Millennium Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
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
          </Box>
        );
      case 'Web Development':
        return (
          <Box
            display='flex'
            flexDirection={{ base: 'column', md: 'row' }}
            gap='2rem'
            width='60rem'
          >
            <Link to='/portfolio/webdevelopment/acervoproject'>
              <Box>
                <Image src={Acervo} alt='Acervo Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
                  color={
                    colorMode === 'dark'
                      ? theme.colors.dark.text
                      : theme.colors.light.text
                  }
                >
                  Acervo Project
                </Text>
              </Box>
            </Link>

            <Link to='/portfolio/webdevelopment/volleybombproject'>
              <Box>
                <Image src={VolleyBomb} alt='Volleybomb Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
                  color={
                    colorMode === 'dark'
                      ? theme.colors.dark.text
                      : theme.colors.light.text
                  }
                >
                  Volleybomb Project
                </Text>
              </Box>
            </Link>
          </Box>
        );
      default:
        return (
          <Box
            display='flex'
            flexDirection={{ base: 'column', md: 'row' }}
            gap='2rem'
            width='60rem'
          >
            <Link to='/portfolio/webdevelopment/agoraproject'>
              <Box>
                <Image src={Agora} alt='Agora Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
                  color={
                    colorMode === 'dark'
                      ? theme.colors.dark.text
                      : theme.colors.light.text
                  }
                >
                  Agora Project
                </Text>
              </Box>
            </Link>

            <Link to='/portfolio/uxuidesing/fabricaproject'>
              <Box>
                <Image src={Fabrica} alt='Fabrica Project' />
                <Text
                  mt='1rem'
                  fontWeight='600'
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
          </Box>
        );
    }
  };

  return (
    <div>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent='space-around'
      >
        <Box
          margin={{
            base: '3rem 1.5rem 3rem 1.5rem',
            lg: '5rem 8rem 5rem 5rem',
          }}
        >
          <Flex
            flexDirection={{ base: 'row', lg: 'column' }}
            alignItems={{ base: 'center', lg: 'flex-start' }}
            gap={{ base: '2rem', lg: '0' }}
          >
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Box display={{ base: 'flex', lg: 'none' }}>
                <Image
                  src={AvatarPhoto}
                  alt='yane-photo-profile'
                  borderRadius='full'
                  boxSize={{ base: '90px', md: '150px' }}
                />
              </Box>
            </motion.div>

            <Box>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Text
                  fontSize={{ base: '2.5rem', md: '3.5rem', lg: '5rem' }}
                  color={
                    colorMode === 'dark'
                      ? theme.colors.dark.h2
                      : theme.colors.light.h2
                  }
                  height={{ base: '50px', md: '92px' }}
                >
                  Hey there,
                </Text>
              </motion.div>

              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Text
                  fontSize={{ base: '2rem', md: '3rem', lg: '3.8rem' }}
                  fontWeight='600'
                  color={
                    colorMode === 'dark'
                      ? theme.colors.dark.h1
                      : theme.colors.light.h1
                  }
                >
                  I'm Yane.
                </Text>
              </motion.div>
            </Box>
          </Flex>

          <Box mt='2rem'>
            <Text
              paddingRight='2rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              A <strong>Product Owner</strong> based in Lisbon, where the sun is warm and the pastéis de nata are still unbeatable. With a unique blend of <strong>software engineering</strong>, <strong>UI development</strong>, and <strong>product design</strong>, I bridge the gap between technology and user experience, turning ideas into meaningful, scalable products.
            </Text>

            <Text
              mt='1rem'
              paddingRight='2rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
             <strong>Curiosity</strong> has always been my driving force. It took me from experimenting with test tubes to building digital solutions, <strong>constantly learning, iterating, and improving along the way.</strong>
            </Text>

            <Text
              mt='1rem'
              paddingRight='2rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              Today, I thrive at the intersection of product, design, and engineering, <strong>aligning teams, shaping product vision, and delivering experiences that truly make a difference</strong>. I love transforming complex problems into simple, intuitive solutions that people actually enjoy using.
            </Text>

            <Text
              mt='1rem'
              paddingRight='2rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
             When I step away from the screen, you’ll probably find me swimming to clear my mind, getting competitive over a board game, or visiting the best coffee spot in Lisbon: Coé Café.
            </Text>

            <Text
              mt='1rem'
              paddingRight='2rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              I’m here to build impactful products and create things <strong>that matter.</strong>
            </Text>

            <Text
              mt='1rem'
              paddingRight='2rem'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              {' '}
              Let’s build something meaningful together.
            </Text>

            <Link to='/contact'>
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
                Contact me
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          display={{ base: 'none', lg: 'flex' }}
          marginTop='6rem'
          maxWidth='90%'
          height='max-content'
          marginRight='3rem'
        >
          <Image src={ProfilePhoto}></Image>
        </Box>
      </Flex>

      <Text
        fontSize={{ base: '1.8rem', lg: '3rem' }}
        mt={{ base: '1rem', lg: '2rem' }}
        ml={{ base: '1rem', lg: '5rem' }}
        color={
          colorMode === 'dark' ? theme.colors.dark.h2 : theme.colors.light.h2
        }
      >
        i can help you with..
      </Text>

      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        gap={{ base: '5', lg: '12' }}
        margin={{ base: '2rem 1rem', lg: '2rem 5rem' }}
      >
        <Box
          border='1px'
          borderColor={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
          borderRadius='5px'
        >
          <Box margin='4rem 2rem 2rem 2rem'>
            <box-icon
              name='pen'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            ></box-icon>
            <Text
              fontWeight='600'
              fontSize='1.2rem'
              margin='0.5rem 0'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.h3
                  : theme.colors.light.h3
              }
            >
              Ux/Ui Desing
            </Text>
            <Text
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              I make designs that balance the funtionallity and aesthetic to
              build intuitive interfaces for our users.
            </Text>
          </Box>
        </Box>

        <Box
          border='1px'
          borderColor={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
          borderRadius='5px'
        >
          <Box margin='4rem 2rem 2rem 2rem'>
            <box-icon
              name='code-alt'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            ></box-icon>
            <Text
              fontWeight='600'
              fontSize='1.2rem'
              margin='0.5rem 0'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.h3
                  : theme.colors.light.h3
              }
            >
              Web Development
            </Text>
            <Text
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              I can bring your visuals to life by developing highly functional
              web solutions for an amazing web experience.
            </Text>
          </Box>
        </Box>

        <Box
          border='1px'
          borderColor={
            colorMode === 'dark'
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
          borderRadius='5px'
        >
          <Box margin='4rem 2rem 2rem 2rem'>
            <box-icon
              type='solid'
              name='brain'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            ></box-icon>
            <Text
              fontWeight='600'
              fontSize='1.2rem'
              margin='0.5rem 0'
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.h3
                  : theme.colors.light.h3
              }
            >
              Product Strategy
            </Text>
            <Text
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.text
                  : theme.colors.light.text
              }
            >
              I define product vision, prioritize what matters, and align teams to build impactful and user-centered solutions.
            </Text>
          </Box>
        </Box>
      </Flex>

      <Text
        fontSize={{ base: '1.8rem', lg: '3rem' }}
        mt={{ base: '4rem', lg: '8rem' }}
        ml={{ base: '1rem', lg: '5rem' }}
        color={
          colorMode === 'dark' ? theme.colors.dark.h3 : theme.colors.light.h3
        }
        height={{ base: '30px', xl: '50px' }}
      >
        come take a look at
      </Text>
      <Text
        fontSize={{ base: '2.8rem', lg: '3rem' }}
        ml={{ base: '1rem', lg: '5rem' }}
        color={
          colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1
        }
      >
        my work here...
      </Text>

      <section>
        <Flex justifyContent='center' gap={{ base: '4', lg: '8' }} m='3rem 0'>
          {['All', 'Ux/Ui Design', 'Web Development'].map(option => (
            <Text
              key={option}
              fontSize='1.2rem'
              color={
                selectedOption === option
                  ? colorMode === 'dark'
                    ? theme.colors.dark.h1
                    : theme.colors.light.h1
                  : colorMode === 'dark'
                  ? theme.colors.dark.h2
                  : theme.colors.light.h2
              }
              borderBottom={
                selectedOption === option
                  ? `2px solid ${
                      colorMode === 'dark'
                        ? theme.colors.dark.h1
                        : theme.colors.light.h1
                    }`
                  : 'none'
              }
              cursor='pointer'
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </Text>
          ))}
        </Flex>
        <Flex
          justifyContent='center'
          gap='8'
          m={{ base: '0 1rem 3rem 1rem', lg: '3rem 0 8rem 0' }}
        >
          {renderProjects()}
        </Flex>
      </section>
    </div>
  );
}

export default About;
