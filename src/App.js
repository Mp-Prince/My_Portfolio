import './App.css';
import Education from './Components/Education';
import Home from './Components/Home';
import Footer from './Components/Footer';
// import './Components/NavBar';
import NavBar from './Components/NavBar';
import { useState } from 'react';
import { Routes , Route } from 'react-router';

function App() {

  const [mode , setMode] = useState('dark');
  const [text , setText] = useState('light');

  let toggel = (() => {
    if(mode === 'dark'){
      setMode('light');
      setText('dark');
    }
    else{
      setMode('dark');
      setText('light');
    }
    
  })

  return (
    <>
        <NavBar Mode = {mode} text = {text} toggel = {toggel} ></NavBar>
    <Routes>
      {/* <Route path='/' index element={<Home Mode = {mode} text = {text} ></Home>}> */}
      <Route index element={<Home Mode = {mode} text = {text} ></Home>}>
      </Route>
      <Route path='/Education' element={<Education Mode ={mode} text = {text}></Education>}>

      </Route>
      {/* <Home Mode = {mode} text = {text} ></Home> */}
    {/* <Education Mode ={mode} text = {text}></Education> */}
    </Routes>
    <Footer Mode={mode} text={text} />
    </>
  );
}

export default App;
