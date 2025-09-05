import React from 'react'
import './Projects.css'
import { assetes } from '../../assets/assets'
import * as motion from "motion/react-client"
import { useNavigate } from 'react-router-dom'

const Projects = () => {
    const navigate=useNavigate()
  return (
    <div className='projects'>
        <div className='projects-header'>
                <h1>PROJECTS</h1>
                <div className="underline"></div>
            <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
        </div>
        <div className="projects-container">
            <div className="project">
                <div className="project-image">
                    <img src={assetes.project_1} alt="" />
                </div>
                <div className='project-about'>
                    <h2>Full Stack Food Ordering Platform</h2>
                    <p>Developed and deployed a responsive full-stack food ordering platform with separate modules for Frontend, Admin Panel, and Backend. Built RESTful APIs using Node.js and Express to handle requests from both frontend and admin panel; integrated with MongoDB for centralized data Management.</p>
                    <button className="button cursor" onClick={()=>navigate(`project/${1}`)}>
                        <motion.div 
                        whileHover={{scale:1.2}} whileTap={{ scale: 0.8 }}>
                            CASE STUDY
                        </motion.div>
                    </button>
                </div>
            </div>
            <div className="project">
                <div className="project-image">
                    <img src={assetes.project_2} alt="" />
                </div>
                <div className='project-about'>
                    <h2>My Portfolio</h2>
                    <p>This is a React-based Responsive web application designed and styled entirely with pure CSS. It showcases my skills, projects, and background in a clean and user-friendly layout. This design is inspired from
                    <a href="https://www.rammaheshwari.com/" className='Link' target='_blank'> Mr.Ram Maheshwari's</a> portfolio.</p>
                    <button className="button cursor">
                        <motion.div 
                        whileHover={{scale:1.2}} whileTap={{ scale: 0.8 }} onClick={()=>navigate(`project/${2}`)}>
                            CASE STUDY
                        </motion.div>
                    </button>
                </div>
            </div>
            <div className="project">
                <div className="project-image">
                    <img src={assetes.project_3} alt="" />
                </div>
                <div className='project-about'>
                    <h2>College Symposium Web Portal</h2>
                    <p>Developed a fully responsive Symposium Website using HTML, CSS, and JavaScript featuring a modern hero section, interactive event timeline, student registration form, poster showcase slider, team and staff coordinator profiles, and structured footer, ensuring an engaging and user-friendly experience for participants.</p>
                    <button className="button cursor">
                        <motion.div 
                        whileHover={{scale:1.2}} whileTap={{ scale: 0.8 }} onClick={()=>navigate(`project/${3}`)}>
                            CASE STUDY
                        </motion.div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects