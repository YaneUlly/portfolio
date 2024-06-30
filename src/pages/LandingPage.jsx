import {
  Box,
  Heading,
  Button,
  Flex,
  Text,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import SocialIcons from '../components/SocialIcons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function LandingPage() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box
      minHeight={{ md: '50vh', lg: '80vh' }}
      width='100%'
      mt={{ md: '5rem', lg: '0' }}
      marginBottom={{ base: '3rem', md: '10rem', lg: '1rem' }}
      display='flex'
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems='center'
      justifyContent={'space-evenly'}
    >
      <Flex
        flexDirection='column'
        marginTop={{ base: '6rem', md: '0' }}
        mb={{ base: '1rem', md: '0' }}
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
          <Heading
            fontSize={{ base: '4.8rem', lg: '6rem' }}
            fontWeight='600'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.h1
                : theme.colors.light.h1
            }
          >
            Yane Ully,
          </Heading>
        </motion.div>
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
            as='h3'
            fontSize={{ base: '3rem', md: '3.5rem' }}
            pl='1rem'
            color={
              colorMode === 'dark'
                ? theme.colors.dark.h2
                : theme.colors.light.h2
            }
            mb='1rem'
          >
            ui developer.
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
          <SocialIcons />
        </motion.div>
      </Flex>
      <Flex flexDirection='column' className='home-buttons'>
        <Link to='/portfolio'>
          <Button
            variant='outline'
            borderWidth='0.1rem'
            borderColor={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
            p='2rem 7rem'
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
            View work
          </Button>
        </Link>
        <Link to='/contact'>
          <Button
            borderWidth='0.1rem'
            borderColor={
              colorMode === 'dark'
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
            p='2rem 7.4rem'
            cursor='pointer'
            bgColor={
              colorMode === 'dark'
                ? theme.colors.dark.bg
                : theme.colors.light.bg
            }
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
            Contact
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default LandingPage;
