import React, { useEffect } from 'react'
import './ProjectCaseStudy.css'
import * as motion from "motion/react-client"
import { useNavigate, useParams } from 'react-router-dom'
import {assetes} from '../../assets/assets.js'


const ProjectCaseStudy = ({setActiveSection}) => {

    const {id} =useParams()
    const navigate=useNavigate()

    const projects_detail=[
        {
            project_name:"Tomato",
            project_link:"https://merntomatofrontend.vercel.app/",
            project_description:['Developed and deployed a responsive full-stack food ordering platform with separate modules for Frontend, Admin Panel, and Backend.','Frontend : Implemented user authentication (login/register), cart functionality, order tracking, and stripe-based online payment integration.','Admin Panel : Enabled food item management (add/remove) and real-time order status updates.','Backend :  Built RESTful APIs using Node.js and Express to handle requests from both frontend and admin panel; integrated with MongoDB for centralized data Management.'],
            tools_used:['MERN Stack','Stripe']
        },
        {
            project_name:"My Portfolio",
            project_link:"",
            project_description:["This portfolio is a responsive React-based web application designed and styled entirely with pure CSS.", "It showcases my skills, projects, and background in a clean and user-friendly layout."," Key features include a downloadable resume and a fully functional contact form that allows visitors to send messages directly to my email."],
            tools_used:['HTML','CSS','React']
        },
        {
            project_name:"Shopify",
            project_link:"https://react-ecommerce-one-wine.vercel.app/",
            project_description:["Developed a static e-commerce website using React and integrated DummyJSON API as a mock backend.","Implemented seamless API communication with Axios, leveraged React Hooks for state and lifecycle management, and incorporated efficient event handling to deliver a responsive and interactive user experience."],
            tools_used:['HTML','CSS','React']
        }
    ]

    const project_details = projects_detail[id-1]
    const img_src=[assetes.project_1,assetes.project_2,assetes.project_3]

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },[]);


  return (
    <div className='project-case-study'>
        <div className="project-preview">
            <img src={img_src[id-1]} alt="" />
            <div className="see-live">
                <button className='cursor'>
                    <motion.div whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                            <a href={project_details.project_link} target='_blank'>PROJECT LINK</a>
                    </motion.div>
                </button>
                <button className='cursor' onClick={()=>navigate('/#projects')}>
                    <motion.div whileHover={{ scale: 0.8 }}
                        whileTap={{ scale: 1.2 }}>
                        GO BACK
                    </motion.div>
                </button>
            </div>
        </div>
        <div className="project-overview">
            <div className="project-description">
                <h2>Project Overview</h2>
                    {project_details.project_description.map((point)=>{
                        return (<p>{point}</p>)
                    })} 
            </div>

            <div className="tools-used">
                <h2>Tools Used</h2>
                <div className="skills-container">
                    {
                        project_details.tools_used.map((tool)=>(
                            <div className="skill">{tool}</div>
                        ))
                    }
                    <div className="skill">Git</div>
                    <div className="skill">Github</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCaseStudy