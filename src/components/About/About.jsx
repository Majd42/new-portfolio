import React from 'react'
import './styles.css'
import {AiOutlineStar} from 'react-icons/ai'
import {BiBookOpen} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
const About = () => {




  return (
    <section id='about' className=' about container'>
        <div className="title">
            <h4 className='text-light'>Get to Know</h4>
            <h2>About Me</h2>
        </div> 
        <div className="about-content">
             <div className="about-content--info">
                <div className="top-info">
                    <div className="top-info-card">
                        <AiOutlineStar />
                        <h3>Experience</h3>
                        <p className='text-light'>+1 Year of Experience</p>
                    </div>
                    <div className="top-info-card">
                        <BiBookOpen />
                        <h3>College Degree</h3>
                        <p className='text-light'>Informatices Engineering</p>
                    </div>
                    <div className="top-info-card">
                        <AiOutlineFundProjectionScreen />
                        <h3>Projects</h3>
                        <p className='text-light'>4 Completed Projects</p>
                    </div>
                    
                </div>
                <div className="bio">
                    <p className='text-light'>I am a <strong>Frontend developer</strong> and I am Extremely passionate about software architecture and design<p className='inner-p'>combined with sensitivity to serve the needs of the business with the delivery of high-quality solutions</p></p>
                    <a href="#contact" className='btn-primary'>Let's Talk</a>
                </div>
            </div>  
            
            <div className="animation">
                <div className="circle2"></div>
                <div className="circle1"></div>
                
            </div>

            
        </div> 
       
    </section>
  )
}

export default About