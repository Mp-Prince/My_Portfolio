import './App.css';
import Home from './Components/Home';
import './Components/NavBar';
import NavBar from './Components/NavBar';
import { useState } from 'react';

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
      <Home Mode = {mode} text = {text} ></Home>
    </>
  );
}

export default App;
