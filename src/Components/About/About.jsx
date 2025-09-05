import React from 'react'
import './About.css'
import * as motion from "motion/react-client"
import { LuDownload } from "react-icons/lu";
import resume from '../../../public/VIGNESHWARAN T - Resume.pdf';


const About = () => {
  return (
    <div className='about'>
        <div className="about-header">
            <h1>ABOUT ME</h1>
            <div className="underline"></div>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>
        <div className="about-container">
            <div className="about-container-left">
                <h2>Get to know me !</h2>
                <p>I am an Electrical and Electronics Engineering student with a strong passion for programming and
                software development. Currently, I am focusing on gaining practical knowledge in software engineering.</p>
                <br />
                <p>I am well enough good at problem-solving in programming and I regularly practicing to master it
                through the platforms like <a className='Link' target='_blank' href='https://www.skillrack.com/faces/resume.xhtml?id=403746&key=e6b5671f2a2cd81bc1066a39dbf83cdc5fdbcc4c'>Skillrack</a> , <a className='Link' href='https://www.geeksforgeeks.org/user/vigneshkavgd9/' target='_blank'>Geeks for Geeks</a> and <a className='Link' href='https://leetcode.com/u/vigneshwaran0905/' target='_blank'>Leetcode</a>.I am actively learning Data Structures and Algorithm</p>
                <br />
                <p>Actively building web applications using MERN stack to build a comprehensive foundation in web-development. I am very enthusiastic towards working in real time web development projects.</p>
                <br />
                <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                <br />
                <button className='cursor'>
                    <motion.div whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}>
                        <a href={resume} download="VIGNESHWARAN T - Resume.pdf">RESUME <LuDownload /></a>
                    </motion.div>
                </button>
            </div>
            <div className="about-container-right">
                <h2>My Skills</h2>
                <div className="skills-container">
                    <div className="skill">MERN</div>
                    <div className="skill">Responsive Design</div>
                    <div className="skill">Python</div>
                    <div className="skill">C</div>
                    <div className="skill">Git</div>
                    <div className="skill">Github</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About