import { Box, Heading, Button, Flex, Text } from '@chakra-ui/react';
import SocialIcons from '../components/SocialIcons';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <Box
      minHeight={{ md: '50vh', lg: '80vh' }}
      width='100%'
      mt={{ md: '8rem', lg: '0' }}
      marginBottom={{ base: '8rem', md: '16rem', lg: '4rem' }}
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
          <Heading fontSize={{ base: '4.8rem', lg: '6rem' }} fontWeight='600'>
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
            color='#cccccc'
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
        <Button
          variant='outline'
          borderWidth='0.1rem'
          borderColor='black'
          p='2rem 4.5rem'
          cursor='pointer'
          mb='1rem'
        >
          Ux/Ui Design Work
        </Button>
        <Button
          borderWidth='0.1rem'
          borderColor='black'
          p='2rem 4.5rem'
          cursor='pointer'
        >
          Web Development Work
        </Button>
      </Flex>
    </Box>
  );
}

export default LandingPage;
