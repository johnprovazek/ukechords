import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
// import Navbar from './components/navbar';
import ResponsiveAppBar from './components/appBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navigate } from "react-router-dom";
import HomePage from './pages';
import ChordPage from './pages/chords';
import MemorizePage from './pages/memorize';
import PlayPage from './pages/play';
import ChordDataContext from "./components/chordDataContext";
import chordUserDataJSON from './data/json/chordsUserData.json';

function App() {

  // Try to move this all to chordDataContext.js
  const [chordData, setChordData] = useState(localStorage.getItem('chordData') ? JSON.parse(localStorage.getItem('chordData')) : chordUserDataJSON);
  const updateChordData = (chord, slider, value) => {
    setChordData({
      ...chordData,
      [chord]: {
        ...chordData[chord],
        [slider]: value
      }
    })
  };
  const value = { chordData, updateChordData };

  useEffect(() => {
    localStorage.setItem('chordData', JSON.stringify(chordData))
  },[chordData])


  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/home' element={
            <Navigate to='/'/>
        }/>
        <Route exact path='/' element={
          <ChordDataContext.Provider value={value}>
            <HomePage/>
          </ChordDataContext.Provider>
        }/>
        <Route path='/chords' element={
          <ChordDataContext.Provider value={value}>
            <ChordPage/>
          </ChordDataContext.Provider>
        }/>
        <Route path='/memorize' element={
          <ChordDataContext.Provider value={value}>
            <MemorizePage/>
          </ChordDataContext.Provider>
        }/>
        <Route path='/play' element={
          <ChordDataContext.Provider value={value}>
            <PlayPage/>
          </ChordDataContext.Provider>
        }/>
      </Routes>
    </Router>
  );
}

export default App;