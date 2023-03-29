import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    },1500);
  }

  const [mode,setmode]=useState('light');    //whether dark mode is enabled or not
  
  const toggleMode=(cls)=>{
    console.log(cls);
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#051a29';
      showAlert("Dark Mode has been Enabled","success");

    }else{
      setmode('light');
      document.body.style.backgroundColor='#e1bee7';
      showAlert("Light Mode has been Enabled","success");
    }
  }
  
  return (
    <>
      <Router>
        <Navbar title = "Text-Utils"  aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
          <Alert alert = {alert}/>  
          <div className="container my-3">
            <Routes>   
              <Route exact path="/about" element={<About mode={mode}/>} />
              <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert} mode = {mode}/>} />
            </Routes>
          </div>
      </Router>
    </>
  );
}
export default App;

/*
EXTRA COMPONENT:

*/
