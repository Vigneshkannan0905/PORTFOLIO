import React from 'react'
import './Header.css'
import { assetes } from '../../assets/assets'
import * as motion from "motion/react-client"

const Header = () => {
  return (
    <div className='hero-section'>
        <div className="social-media-container">
            <a href="https://www.linkedin.com/in/vigneshwaran-t-b515a6257/" target="_blank"><img src={assetes.linkedin_dark_icon} alt="linkedin-icon" /></a>
            <a href="https://github.com/Vigneshkannan0905" target="_blank"><img src={assetes.github_dark_icon} alt="github-icon" /></a>
        </div>
        <div className="hero-section-content">
            <h1>HEY, I'M VIGNESHWARAN</h1>
            <p>A Final Year B.E. Electrical and Electronics Engineering student with a strong Interest in Web Development and a Knack for Problem Solving. I enjoy turning ideas into Responsive, User-Friendly Web experiences.</p>
              <motion.div whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}>
            <button className='cursor'>
                   <a href="#projects">PROJECTS</a> 
            </button>
              </motion.div>
        </div>
    </div>

  )
}

export default Header