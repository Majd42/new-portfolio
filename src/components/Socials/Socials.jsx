import React from 'react'
import './styles.css'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'


const Socials = () => {
  return (
    <section className='container socials'>
        
        <div className="social-links">
            <a href="https://www.facebook.com/majd.shaheen.1234/"><FiFacebook /></a>
            <a href="mailto:majd4.sh@gmail.com"><AiOutlineMail /></a>
            <a href="https://github.com/Majd42"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/majd-shaheen/"><FiLinkedin  /></a>
            <a href="#contact" className='scroller'></a>
        </div>
    </section>
  )
}

export default Socials