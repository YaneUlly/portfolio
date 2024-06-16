import { Flex, Link, Box } from '@chakra-ui/react';

function SocialIcons() {
  const handleMouseEnter = event => {
    event.currentTarget.firstElementChild.setAttribute('color', '#101010');
  };

  const handleMouseLeave = event => {
    event.currentTarget.firstElementChild.setAttribute('color', '#CCCCCC');
  };
  return (
    <Flex flexDirection='row' justifyContent='flex-start' paddingLeft='1rem'>
      <Link href='https://www.linkedin.com/in/yane-ully-martins/' isExternal>
        <Box
          as='span'
          mr='1rem'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <box-icon
            name='linkedin'
            type='logo'
            size='md'
            color='#CCCCCC'
          ></box-icon>
        </Box>
      </Link>

      <Link href='https://github.com/YaneUlly' isExternal>
        <Box
          as='span'
          mr='1rem'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <box-icon
            name='github'
            type='logo'
            size='md'
            color='#CCCCCC'
          ></box-icon>
        </Box>
      </Link>

      <Link href='mailto:blrv.rjadm@gmail.com' isExternal>
        <Box
          as='span'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <box-icon name='envelope' size='md' color='#CCCCCC'></box-icon>
        </Box>
      </Link>
    </Flex>
  );
}

export default SocialIcons;
