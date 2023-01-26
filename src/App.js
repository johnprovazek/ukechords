import React from 'react';
import './App.css';
// import Navbar from './components/navbar';
import ResponsiveAppBar from './components/appbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import HomePage from './pages';
import ChordPage from './pages/chords';
import MemorizePage from './pages/memorize';
import PlayPage from './pages/play';
  
function App() {
return (
    <Router>
    <ResponsiveAppBar />
    <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/chords' element={<ChordPage/>} />
        <Route path='/memorize' element={<MemorizePage/>} />
        <Route path='/play' element={<PlayPage/>} />
    </Routes>
    </Router>
);
}
  
export default App;