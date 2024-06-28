import { useState } from 'react';
import { Flex, Text, Box, Button, Input } from '@chakra-ui/react';
import { FormLabel } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

function Contact() {
  // const [isSubmitted, setIsSubmitted] = useState(second);
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async e => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <Flex
        flexDirection={{ base: 'column', xl: 'row' }}
        gap={{ base: '3rem', lg: '5rem' }}
        justifyContent='center'
        alignItems={{ md: 'center', xl: 'none' }}
        mt={{ base: '5rem', md: '8rem' }}
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

        <Box width={{ base: '20rem', md: '43rem', xl: '25rem' }}>
          <form
            target='_blank'
            action='https://formsubmit.co/yaneully@gmail.com'
            method='POST'
            onSubmit={onSubmit}
          >
            <FormLabel>Name:</FormLabel>
            <Input
              type='text'
              placeholder='Name'
              borderColor='#0B0B03'
              {...register('name', { required: true, maxLength: 100 })}
            ></Input>
            {errors.name && (
              <p>
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' &&
                  'Max Length is 100 characters'}
              </p>
            )}

            <FormLabel mt='0.8rem'>Email:</FormLabel>
            <Input
              type='email'
              placeholder='Email'
              borderColor='#0B0B03'
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            ></Input>
            {errors.email && (
              <p>
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address'}
              </p>
            )}

            <FormLabel mt='0.8rem'>Message:</FormLabel>
            <Input
              type='text'
              placeholder='Message'
              borderColor='#0B0B03'
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            ></Input>
            {errors.message && (
              <p>
                {errors.message.type === 'required' &&
                  'This field is required.'}
                {errors.message.type === 'maxLength' &&
                  'Max Length is 2000 characters'}
              </p>
            )}
            <Button
              variant='outline'
              borderWidth='0.1rem'
              borderColor='black'
              type='submit'
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
          </form>
        </Box>
      </Flex>
    </div>
  );
}

export default Contact;
