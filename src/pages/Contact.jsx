import { Flex, Text, Box, Button, Input, InputGroup } from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

function Contact() {
  return (
    <div>
      <Flex gap='5rem' justifyContent='center' mt='10rem' mb='10rem'>
        <Box>
          <Text fontSize={{ base: '4.8rem', lg: '5rem' }} color='#cccccc'>
            say hi :),
          </Text>
          <Text fontSize={{ base: '3rem', md: '3.8rem' }} fontWeight='600'>
            i'd love to hear from you.
          </Text>
        </Box>

        <Box width='25rem'>
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
            p='2rem 2rem'
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
