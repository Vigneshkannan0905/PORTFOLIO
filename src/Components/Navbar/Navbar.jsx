import React, { useState } from 'react'
import './Navbar.css'
import { assetes } from '../../assets/assets.js'
"use client"
import * as motion from "motion/react-client"
import {Link} from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Navbar = ({activeSection}) => {    
  const [isOn, setIsOn] = useState(false)
  const toggleSwitch = () => setIsOn(!isOn)

  const container = {
    width: 50,
    height: 25,
    backgroundColor: "var(--hue-3-transparent)",
    borderRadius: 50,
    cursor: "pointer",
    alignItems:"center",
    padding:3
}

const handle = {
    width: 19,
    height: 19,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
}

 const [dispMenu,setDispMenu]=useState(false)

  return (
    <>
    <div className='navbar'>
        <Link to='/'>
            <div className="navbar-left cursor" onClick={()=>window.location.reload()}>
                <img src={assetes.profile_image} alt="profile image"/>
                <span><b>VIGNESHWARAN</b></span>
            </div>
        </Link>
        <div className="navbar-menu">
            <a href="#home">
                <b>HOME</b>
                <div className={activeSection==='home' ? 'navbar-underline' : ''}></div>
            </a>
            <a href="#about">
                <b>ABOUT</b>
            <div className={activeSection==='about' ? 'navbar-underline' : ''}></div>
            </a>
            <a href="#projects"><b>PROJECTS</b>
            <div className={activeSection==='projects' ? 'navbar-underline' : ''}></div>
            </a>
            <a href="#contact"><b>CONTACT</b>
            <div className={activeSection==='contact' ? 'navbar-underline' : ''}></div>
            </a>
            <button
                style={{
                    ...container,
                    justifyContent: "flex-" + (isOn ? "start" : "end"),
                }}
                className='toggle-container'
            >
                <motion.div
                    className="toggle-handle"
                    style={handle}
                    layout
                    transition={{
                        type: "spring",
                        visualDuration: 0.2,
                        bounce: 0.4
                    }}
                onPointerEnter={toggleSwitch}
                />
            </button>
        </div>

        <div className="menu-icon" onClick={()=>{
            setDispMenu(!dispMenu)
        }}>
            <MdClose style={{display:(dispMenu ? 'block' : 'none')}}/>
            <IoMenu style={{display:(!dispMenu ? 'block' : 'none')}}/>
        </div>
           
    </div>
    <div style={{display:dispMenu ? 'flex':'none' }}
    className={`menu-bar-dropdown`} onClick={()=>setDispMenu(false)}
    >
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
    </div>
    </>
  )
}

export default Navbar