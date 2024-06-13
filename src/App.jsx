import { Routes, Route } from 'react-router-dom';
import HamburgerMenu from './components/HamburgerMenu';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <div>
      <HamburgerMenu />
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
