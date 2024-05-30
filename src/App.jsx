import Navbar from './scenes/Navbar';
import { useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import './App.css';

function App() {
  // where in navigation we are
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <div className='app bg-light-green'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
