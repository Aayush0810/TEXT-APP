import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

   const showAlert = (message,type)=> {
    setAlert ({
         msg: message,
         type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
   }
  const removebag = () => {
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")

  }
  const ToggleMode = (cls) => {
    removebag()
    console.log(cls)
    document.body.classList.add("bg-"+cls)
    if(mode === "light") { 
      setMode("dark")
      document.body.style.backgroundColor = "black"
      showAlert("Dark mode has been enabled", "success")
     } 
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"  
      showAlert("Light mode has been enabled", "success")
    }
    // let telle = document.getElementsByClassName("textTransform")
    // telle.value==='dark'?'light Mode':'dark mode'
  }
  return (
<>
<BrowserRouter>
   <Navbar title="Note app" aboutText="About" mode={mode} ToggleMode={ToggleMode}/>
   <Alert alert={alert}/>
   <div className="container">
   <Routes>
   <Route  path='/' element={<Textform/>} showAlert={showAlert} heading= "Enter the text you want to analyse" mode={mode} />
   <Route  path='/about' element={<About/>}/>
   </Routes>
   </div>
   </BrowserRouter>
</>
  );
}

export default App;
