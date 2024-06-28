import { Flex, Link, Box, useColorMode, useTheme } from '@chakra-ui/react';
import { useState } from 'react';

function SocialIcons() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const [hovered, setHovered] = useState(null);

  const hoverColor =
    colorMode === 'dark' ? theme.colors.dark.h1 : theme.colors.light.h1;
  const initialColor =
    colorMode === 'dark' ? theme.colors.dark.h2 : theme.colors.light.h2;

  return (
    <Flex flexDirection='row' justifyContent='flex-start' paddingLeft='1rem'>
      <Link
        href='https://www.linkedin.com/in/yane-ully-martins/'
        isExternal
        onMouseEnter={() => setHovered('linkedin')}
        onMouseLeave={() => setHovered(null)}
      >
        <Box as='span' mr='1rem'>
          <box-icon
            name='linkedin'
            type='logo'
            size='md'
            color={hovered === 'linkedin' ? hoverColor : initialColor}
          ></box-icon>
        </Box>
      </Link>

      <Link
        href='https://github.com/YaneUlly'
        isExternal
        onMouseEnter={() => setHovered('github')}
        onMouseLeave={() => setHovered(null)}
      >
        <Box as='span' mr='1rem'>
          <box-icon
            name='github'
            type='logo'
            size='md'
            color={hovered === 'github' ? hoverColor : initialColor}
          ></box-icon>
        </Box>
      </Link>

      <Link
        href='mailto:yaneully@gmail.com'
        isExternal
        onMouseEnter={() => setHovered('envelope')}
        onMouseLeave={() => setHovered(null)}
      >
        <Box as='span'>
          <box-icon
            name='envelope'
            size='md'
            color={hovered === 'envelope' ? hoverColor : initialColor}
          ></box-icon>
        </Box>
      </Link>
    </Flex>
  );
}

export default SocialIcons;
