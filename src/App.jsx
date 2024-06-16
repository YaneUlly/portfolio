import { Flex, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import FabricaProject from './pages/uxuiprojects/FábricaProject';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Flex direction='column' maxHeight='100vh' width='100%'>
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
