import { Flex, Box, useColorMode, useTheme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import FabricaProject from './pages/uxuiprojects/FábricaProject';
import MillenniumProject from './pages/uxuiprojects/MillenniumProject';
import ChocloProject from './pages/uxuiprojects/ChocloProject';
import VolleyBombProject from './pages/webdevprojects/VolleyBombProject';
import AgoraProject from './pages/webdevprojects/AgoraProject';
import AcervoProject from './pages/webdevprojects/AcervoProject';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const backgroundColor =
    colorMode === 'dark' ? theme.colors.dark.bg : theme.colors.light.bg;

  return (
    <Flex
      direction='column'
      minHeight='100vh'
      width='100%'
      bg={backgroundColor}
    >
      <Box as='header' width='100%'>
        <Navbar />
      </Box>
      <Flex as='main' flex='1' direction='column' width='100%'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route
            path='/portfolio/uxuidesign/fabricaproject'
            element={<FabricaProject />}
          />
          <Route
            path='/portfolio/uxuidesign/millenniumproject'
            element={<MillenniumProject />}
          />
          <Route
            path='/portfolio/uxuidesign/chocloproject'
            element={<ChocloProject />}
          />
          <Route
            path='/portfolio/webdevelopment/volleybombproject'
            element={<VolleyBombProject />}
          />
          <Route
            path='/portfolio/webdevelopment/agoraproject'
            element={<AgoraProject />}
          />
          <Route
            path='/portfolio/webdevelopment/acervoproject'
            element={<AcervoProject />}
          />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Flex>
      <Box as='footer' width='100%'>
        <Footer />
      </Box>
    </Flex>
  );
}

export default App;
