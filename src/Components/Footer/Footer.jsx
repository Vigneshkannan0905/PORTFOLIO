import React from 'react'
import './Footer.css'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-header">
            <div className="footer-header-left">
                <h2>VIGNESHWARAN</h2>
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
            </div>
            <div className="footer-header-right">
                <h2>SOCIAL</h2>
                <div className="footer-social-icons">
                    <a href="https://github.com/Vigneshkannan0905" target="_blank"><IoLogoGithub/></a>
                    <a href="https://www.linkedin.com/in/vigneshwaran-t-b515a6257/"target="_blank"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/vignesh__2809?igsh=M2tlMmw2Z2t0endq"target="_blank"><FaInstagram/></a>
                </div>
            </div>
        </div>
        <hr style={{width:"100%",backgroundColor:"white",marginTop:"10vh"}}/>
        <div className="footer-copyright">
            &copy; Copyrights 2025.Made by <span><a href="">Vigneshwaran</a></span>
        </div>
    </div>
  )
}

export default Footer