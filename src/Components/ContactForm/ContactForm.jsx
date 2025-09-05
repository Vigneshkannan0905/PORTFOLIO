import React, { useRef, useState } from 'react'
import './ContactForm.css'
import * as motion from "motion/react-client"
import emailjs from '@emailjs/browser';



const ContactForm = () => {
    const form = useRef()
    const [isLoading, setIsLoading] = useState(false)

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
        serviceID,
        templateID,
      form.current,
      publicKey
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset(); 
        setIsLoading(false);
      },
      (error) => {
        alert("Failed to send message.");
        console.log(error.text);
        setIsLoading(false);
      }
    );
  };

  return (
    <div className='contact-container' >
        <div className="contact-container-header">
            <h1>CONTACT</h1>
            <div className="underline"></div>
            <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>
        <div className="contact-form">
            <form action="" ref={form} onSubmit={(e)=>sendEmail(e)}>
                <div className="input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="sender_name" placeholder='Enter Your Name' required/>
                </div>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="sender_email" placeholder='Enter Your Email' required/>
                </div>
                <div className="input">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" placeholder='Enter Your Message' required></textarea>
                </div>
                <div className="submit-button">
                    <button className='cursor' disabled={isLoading}>
                        <motion.div whileHover={!isLoading ? { scale: 1.2 } : {}}
                            whileTap={!isLoading ? { scale: 0.8 } : {}}>
                            {isLoading ? (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{
                                        width: '16px',
                                        height: '16px',
                                        border: '2px solid #f3f3f3',
                                        borderTop: '2px solid #3498db',
                                        borderRadius: '50%',
                                        animation: 'spin 1s linear infinite'
                                    }}></div>
                                    Sending...
                                </div>
                            ) : (
                                'Submit'
                            )}
                        </motion.div>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm