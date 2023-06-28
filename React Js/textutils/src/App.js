// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "grey"
      setAlert({
        msg: "dark mode enabled",
        type: "sucess"
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      setAlert({
        msg: "light mode enabled",
        type: "success"
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About Us" mode={mode} changeMode={changeMode} />
        {/* title and about is the props in navbar */}

        <Alert alert={alert} />

        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm mode={mode} />} />

        </Routes>


      </Router>
    </>
  );
}

export default App;
