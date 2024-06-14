import { Box, Heading, Button, Flex, Text } from '@chakra-ui/react';
import SocialIcons from '../components/SocialIcons';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <Box
      minHeight='80vh'
      width='100%'
      marginBottom='3rem'
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='space-evenly'
    >
      <Flex flexDirection='column'>
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
          <Heading fontSize='6rem' fontWeight='600'>
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
          <Text as='h3' fontSize='3.5rem' pl='1rem' color='#cccccc' mb='1rem'>
            ui developer.
          </Text>
        </motion.div>
        <SocialIcons />
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
