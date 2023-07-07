import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Project from "./Project"
import Profile from "./Profile"
import {HashRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {ThemeProvider} from "styled-components";

function App() {
  return(
    <HashRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
        

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </HashRouter>
    
  )
};

export default App;
