import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import About from '../../Components/About/About'
import Projects from '../../Components/Projects/Projects'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Footer from '../../Components/Footer/Footer'
import {Route,Routes} from 'react-router-dom'
import ProjectCaseStudy from '../ProjectCaseStudy/ProjectCaseStudy'
import useSectionObserver from "../../Hooks/useSectionObserver"; 
import ScrollToHashElement from '../../Components/ScrollToHashElement'


function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  useEffect(()=>setActiveSection('home'),[])
  

  useSectionObserver(sectionRefs, setActiveSection);
  return (
    <div className="app">
        <ScrollToHashElement/>
        <div className="shape"></div>
        <Navbar activeSection={activeSection} />
        <Routes>        
          <Route path="/" element={
            <>
              <section id="home" ref={sectionRefs.home}><Header /></section>
              <section id="about" ref={sectionRefs.about}><About /></section>
              <section id="projects" ref={sectionRefs.projects}><Projects /></section>
              <section id="contact" ref={sectionRefs.contact}><ContactForm /></section>
            </>
          }/>
          <Route path='/project/:id' element={<ProjectCaseStudy/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
