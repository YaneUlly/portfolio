import { Flex, Box } from '@chakra-ui/react';

function SocialIcons() {
  return (
    <Flex flexDirection='row' justifyContent='flex-start' paddingLeft='1rem'>
      <Box as='span' mr='1rem'>
        <box-icon name='linkedin' type='logo' size='md'></box-icon>
      </Box>
      <Box as='span' mr='1rem'>
        <box-icon name='github' type='logo' size='md'></box-icon>
      </Box>
      <Box as='span'>
        <box-icon name='envelope' size='md'></box-icon>
      </Box>
    </Flex>
  );
}

export default SocialIcons;
