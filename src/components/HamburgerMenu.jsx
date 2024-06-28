import { useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, useTheme, useColorMode } from '@chakra-ui/react';
import 'boxicons';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <motion.button
          initial={false}
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            position: 'relative',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}
          animate={isOpen ? 'open' : 'close'}
        >
          <motion.div
            style={{
              position: 'absolute',
              height: '4px',
              width: '40px',
              backgroundColor:
                colorMode === 'dark'
                  ? theme.colors.dark.h1
                  : theme.colors.light.h1,
              left: '50%',
              top: '35%',
              transform: 'translate(-50%, -50%)',
            }}
            variants={{
              open: {
                rotate: ['0deg', '0deg', '45deg'],
                top: ['35%', '50%', '50%'],
              },
              close: {
                rotate: ['45deg', '0deg', '0deg'],
                top: ['50%', '50%', '35%'],
              },
            }}
          />
          <motion.div
            style={{
              position: 'absolute',
              height: '4px',
              width: '40px',
              backgroundColor:
                colorMode === 'dark'
                  ? theme.colors.dark.h1
                  : theme.colors.light.h1,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            variants={{
              open: {
                rotate: ['0deg', '0deg', '-45deg'],
              },
              close: {
                rotate: ['-45deg', '0deg', '0deg'],
              },
            }}
          />
          <motion.div
            style={{
              position: 'absolute',
              height: '4px',
              width: '20px',
              backgroundColor:
                colorMode === 'dark'
                  ? theme.colors.dark.h1
                  : theme.colors.light.h1,
              left: '75%',
              bottom: '30%',
              transform: 'translate(-50%, 50%)',
            }}
            variants={{
              open: {
                rotate: ['0deg', '0deg', '45deg'],
                left: '60%',
                bottom: ['30%', '48%', '48%'],
              },
              close: {
                rotate: ['45deg', '0deg', '0deg'],
                left: '75%',
                bottom: ['48%', '48%', '30%'],
              },
            }}
          />
        </motion.button>
      </MotionConfig>

      <AnimatePresence>
        {isOpen && (
          <Flex
            as={motion.div}
            key='menu'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            position='fixed'
            top='0'
            left='0'
            width='100%'
            height='100%'
            backgroundColor={
              colorMode === 'dark'
                ? theme.colors.dark.bg
                : theme.colors.light.bg
            }
            justifyContent='flex-start'
            zIndex='50'
          >
            <Flex
              width='100%'
              height='100%'
              backgroundColor={
                colorMode === 'dark'
                  ? theme.colors.dark.bg
                  : theme.colors.light.bg
              }
              color={
                colorMode === 'dark'
                  ? theme.colors.dark.h1
                  : theme.colors.light.h1
              }
              paddingLeft='2rem'
              direction='column'
              alignItems='flex-start'
              justifyContent='center'
            >
              <Box
                as='ul'
                padding='1rem'
                textAlign='left'
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
              >
                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to='/' onClick={() => handleMenuClick('/')}>
                    <Text
                      fontSize='5rem'
                      padding='0.1rem'
                      color={
                        colorMode === 'dark'
                          ? theme.colors.dark.text
                          : theme.colors.light.text
                      }
                      _hover={{
                        color:
                          colorMode === 'dark'
                            ? theme.colors.dark.h1
                            : theme.colors.light.h1,
                      }}
                    >
                      Home
                    </Text>
                  </Link>
                </motion.div>
                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Link to='/about' onClick={() => handleMenuClick('/about')}>
                    <Box
                      as='li'
                      fontSize='5rem'
                      padding='0.1rem'
                      color={
                        colorMode === 'dark'
                          ? theme.colors.dark.text
                          : theme.colors.light.text
                      }
                      _hover={{
                        color:
                          colorMode === 'dark'
                            ? theme.colors.dark.h1
                            : theme.colors.light.h1,
                      }}
                    >
                      About
                    </Box>
                  </Link>
                </motion.div>
                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Link
                    to='/portfolio'
                    onClick={() => handleMenuClick('/portfolio')}
                  >
                    <Box
                      as='li'
                      fontSize='5rem'
                      padding='0.1rem'
                      color={
                        colorMode === 'dark'
                          ? theme.colors.dark.text
                          : theme.colors.light.text
                      }
                      _hover={{
                        color:
                          colorMode === 'dark'
                            ? theme.colors.dark.h1
                            : theme.colors.light.h1,
                      }}
                    >
                      Portfolio
                    </Box>
                  </Link>
                </motion.div>
                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Link
                    to='/contact'
                    onClick={() => handleMenuClick('/contact')}
                  >
                    <Box
                      as='li'
                      fontSize='5rem'
                      padding='0.1rem'
                      color={
                        colorMode === 'dark'
                          ? theme.colors.dark.text
                          : theme.colors.light.text
                      }
                      _hover={{
                        color:
                          colorMode === 'dark'
                            ? theme.colors.dark.h1
                            : theme.colors.light.h1,
                      }}
                    >
                      Contact
                    </Box>
                  </Link>
                </motion.div>
              </Box>
            </Flex>
          </Flex>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default HamburgerMenu;
