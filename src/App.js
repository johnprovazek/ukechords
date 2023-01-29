import React from 'react';
// import { useEffect } from 'react';
import './App.css';
// import Navbar from './components/navbar';
import ResponsiveAppBar from './components/appBar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import { Navigate } from "react-router-dom";
import HomePage from './pages';
import ChordPage from './pages/chords';
import MemorizePage from './pages/memorize';
import PlayPage from './pages/play';

  
function App() {

    
    // useEffect(()=>{
    //     /* global google */
    //     google.accounts.id.initialize({
    //         client_id: '882648076498-mebve0aqktvvd180s5udffucile3g1g3.apps.googleusercontent.com',
    //         callback: handleCredentialResponse
    //     });
    //     google.accounts.id.prompt();
    //     console.log('i fire once');
    // },[]);

    // function handleCredentialResponse(){
    //     console.log("hello")
    // }


    return (
        <Router>
        <ResponsiveAppBar />
        <Routes>
            <Route path='/home' element={<Navigate to='/'/>}/>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/chords' element={<ChordPage/>} />
            <Route path='/memorize' element={<MemorizePage/>} />
            <Route path='/play' element={<PlayPage/>} />
        </Routes>
        </Router>
    );
}
  
export default App;