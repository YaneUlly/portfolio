import { useState } from 'react';
import ProfilePhoto from '../assets/profile_portfolio.jpeg';
import Acervo from '../assets/webdevprojects/Acervo.png';
import VolleyBomb from '../assets/webdevprojects/Volleybomb.png';
import Choclo from '../assets/uxuiprojects/ChocloWebsite.png';
import Millennium from '../assets/uxuiprojects/Millenium.png';
import Agora from '../assets/webdevprojects/Agora.png';
import Fabrica from '../assets/uxuiprojects/Fabrica.png';
import { Flex, Text, Box, Button, Image, Link } from '@chakra-ui/react';

function About() {
  const [selectedOption, setSelectedOption] = useState('All');

  const handleOptionClick = option => {
    setSelectedOption(option);
  };

  const renderProjects = () => {
    switch (selectedOption) {
      case 'Ux/Ui Design':
        return (
          <Box display='flex' flexDirection='row' gap='2rem' width='60rem'>
            <Link href='/portfolio/uxuidesign/chocloproject'>
              <Box>
                <Image src={Choclo} alt='Choclo Project' />
                <Text mt='1rem' fontWeight='600'>
                  Choclo Project
                </Text>
              </Box>
            </Link>

            <Link href='/portfolio/uxuidesign/millenniumproject'>
              <Box>
                <Image src={Millennium} alt='Millennium Project' />
                <Text mt='1rem' fontWeight='600'>
                  Millennium Project
                </Text>
              </Box>
            </Link>
          </Box>
        );
      case 'Web Development':
        return (
          <Box display='flex' flexDirection='row' gap='2rem' width='60rem'>
            <Link href='/portfolio/webdevelopment/acervoproject'>
              <Box>
                <Image src={Acervo} alt='Acervo Project' />
                <Text mt='1rem' fontWeight='600'>
                  Acervo Project
                </Text>
              </Box>
            </Link>

            <Link href='/portfolio/webdevelopment/volleybombproject'>
              <Box>
                <Image src={VolleyBomb} alt='Volleybomb Project' />
                <Text mt='1rem' fontWeight='600'>
                  Volleybomb Project
                </Text>
              </Box>
            </Link>
          </Box>
        );
      default:
        return (
          <Box display='flex' flexDirection='row' gap='2rem' width='60rem'>
            <Link href='/portfolio/webdevelopment/agoraproject'>
              <Box>
                <Image src={Agora} alt='Agora Project' />
                <Text mt='1rem' fontWeight='600'>
                  Agora Project
                </Text>
              </Box>
            </Link>

            <Link href='/portfolio/uxuidesing/fabricaproject'>
              <Box>
                <Image src={Fabrica} alt='Fabrica Project' />
                <Text mt='1rem' fontWeight='600'>
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
      <Flex flexDirection='row' justifyContent='space-around'>
        <Box margin='5rem 8rem 5rem 5rem'>
          <Text fontSize={{ base: '4.8rem', lg: '5rem' }} color='#cccccc'>
            Hey there,
          </Text>
          <Text fontSize={{ base: '3rem', md: '3.8rem' }} fontWeight='600'>
            I'm Yane.
          </Text>

          <Box mt='2rem'>
            <Text paddingRight='2rem'>
              A <strong>UI Developer</strong> chilling in Lisbon, where the sun
              is warm and the pastéis de nata are unbeatable. With a quirky
              blend of <strong>development</strong> and{' '}
              <strong>product design</strong> tucked under my belt, I bring a
              fresh perspective to the table.
            </Text>

            <Text mt='1rem' paddingRight='2rem'>
              Ever since I can remember, Ive been fueled by{' '}
              <strong>curiosity</strong>. It's what drove me from test tubes to
              lines of code, always seeking to{' '}
              <strong>understand and improve</strong>.
            </Text>

            <Text mt='1rem' paddingRight='2rem'>
              I've got a knack for turning ideas into reality, whether I'm
              tweaking code or crafting pixel-perfect designs. It's like being a
              mad scientist in a digital lab,{' '}
              <strong>mixing creativity with logic</strong> to cook up something
              truly magical.
            </Text>

            <Text mt='1rem' paddingRight='2rem'>
              When I'm not lost in the digital wilderness, youll find me chasing
              sunsets with my camera, plotting world domination over a board
              game, or sipping espresso at the latest hipster café.
            </Text>

            <Text mt='1rem' paddingRight='2rem'>
              I'm here to make a difference, to shake things up, and to{' '}
              <strong>create experiences that leave a lasting impact</strong>.
            </Text>

            <Text mt='1rem' paddingRight='2rem'>
              {' '}
              Lets make some magic happen!
            </Text>

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
              Download resume
            </Button>
          </Box>
        </Box>
        <Box marginTop='6rem' maxWidth='90%' marginRight='3rem'>
          <Image src={ProfilePhoto}></Image>
        </Box>
      </Flex>

      <Text fontSize={{ base: '4.8rem', lg: '3rem' }} mt='2rem' ml='5rem'>
        i can help you with..
      </Text>

      <Flex flexDirection='row' gap='12' margin='2rem 5rem'>
        <Box border='1px' borderColor='black' borderRadius='5px'>
          <Box margin='4rem 2rem 2rem 2rem'>
            <box-icon name='pen'></box-icon>
            <Text fontWeight='600' fontSize='1.2rem' margin='0.5rem 0'>
              Ux/Ui Desing
            </Text>
            <Text>
              I make designs that balance the funtionallity and aesthetic to
              build iintuitive interfaces for our users.
            </Text>
          </Box>
        </Box>

        <Box border='1px' borderColor='black' borderRadius='5px'>
          <Box margin='4rem 2rem 2rem 2rem'>
            <box-icon name='code-alt'></box-icon>
            <Text fontWeight='600' fontSize='1.2rem' margin='0.5rem 0'>
              Web Development
            </Text>
            <Text>
              I can bring your visuals to life through developing highlt
              functional web solutions for an amazing web experience
            </Text>
          </Box>
        </Box>

        <Box border='1px' borderColor='black' borderRadius='5px'>
          <Box margin='4rem 2rem 2rem 2rem'>
            <box-icon type='solid' name='devices'></box-icon>
            <Text fontWeight='600' fontSize='1.2rem' margin='0.5rem 0'>
              The Full Package
            </Text>
            <Text>
              Get the best of both worlds for your product, capture your best
              ideas and get fully functional features.
            </Text>
          </Box>
        </Box>
      </Flex>

      <Text
        fontSize={{ base: '4.8rem', lg: '3rem' }}
        mt='8rem'
        ml='5rem'
        color='#cccccc'
      >
        come take a look at
      </Text>
      <Text fontSize={{ base: '4.8rem', lg: '3rem' }} ml='5rem'>
        my work here...
      </Text>

      <section>
        <Flex justifyContent='center' gap='8' m='3rem 0'>
          {['All', 'Ux/Ui Design', 'Web Development'].map(option => (
            <Text
              key={option}
              fontSize='1.2rem'
              color={selectedOption === option ? '#000000' : '#cccccc'}
              borderBottom={
                selectedOption === option ? '2px solid black' : 'none'
              }
              cursor='pointer'
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </Text>
          ))}
        </Flex>
        <Flex justifyContent='center' gap='8' m='3rem 0 8rem 0'>
          {renderProjects()}
        </Flex>
      </section>
    </div>
  );
}

export default About;
