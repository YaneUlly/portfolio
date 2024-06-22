import { Flex, Text, Box, Button, Input, InputGroup } from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

function Contact() {
  return (
    <div>
      <Flex
        flexDirection={{ base: 'column', xl: 'row' }}
        gap={{ base: '3rem', lg: '5rem' }}
        justifyContent='center'
        mt={{ base: '5rem', md: '10rem' }}
        ml={{ base: '1rem', xl: '0' }}
        mb={{ base: '12rem', md: '10rem' }}
      >
        <Box>
          <Text fontSize={{ base: '3.8rem', md: '5rem' }} color='#cccccc'>
            say hi :),
          </Text>
          <Text fontSize={{ base: '2rem', md: '3.8rem' }} fontWeight='600'>
            i'd love to hear from you.
          </Text>
        </Box>

        <Box width={{ base: '20rem', md: '25rem' }}>
          <FormControl isRequired>
            <FormLabel>Name:</FormLabel>
            <Input type='text' placeholder='Name' borderColor='#0B0B03'></Input>
            <FormErrorMessage>Name is required.</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt='0.8rem'>Email:</FormLabel>
            <Input
              type='email'
              placeholder='Email'
              borderColor='#0B0B03'
            ></Input>
            <FormErrorMessage>Email is required.</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt='0.8rem'>Message:</FormLabel>
            <Input
              type='message'
              placeholder='message'
              borderColor='#0B0B03'
            ></Input>
            <FormErrorMessage>Message is required.</FormErrorMessage>
          </FormControl>

          <Button
            variant='outline'
            borderWidth='0.1rem'
            borderColor='black'
            mt='2rem'
            p='2rem 4rem'
            cursor='pointer'
            mb='1rem'
            _hover={{
              bgColor: '#101010',
              color: '#FFFFFF',
            }}
          >
            Submit
          </Button>
        </Box>
      </Flex>
    </div>
  );
}

export default Contact;
