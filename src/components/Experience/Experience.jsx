import React from 'react'
import './styles.css'
import {FaReact} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {IoLogoCss3} from 'react-icons/io'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoSass} from 'react-icons/io'
import {SiMaterialui} from 'react-icons/si'
import {DiGit} from 'react-icons/di'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import { useState } from 'react'

const Experience = () => {
  const [isExper, setIsExper] = useState(false)
  
  const handleScroll = () => {
    if(Math.ceil(window.scrollY) > 700){
        console.log(isExper)
        setIsExper(true)
    }
  }


  window.addEventListener('scroll', handleScroll)
  return (
    <section id='experience' className={isExper ? 'container experience animate-exp' : 'container experience'}>
        <div className="title">
            <h4 className='text-light'>What Skills I Have</h4>
            <h2>Experience</h2>
        </div>
        
        <div className="skills">
            <div className="skill">
              <FaReact className='icon'/>
              <div className="skill-discription">
                <h2>React.js</h2>
                <p className='text-light'>Advanced</p>
              </div>
            </div>
            <div className="skill">
              <DiGit className='icon'/>
              <div className="skill-discription">
                <h2>Git</h2>
                <p className='text-light'>Intermediate</p>
              </div>
            </div>
            <div className="skill">
              <SiJavascript className='icon'/>
              <div className="skill-discription">
                <h2>JavaScript</h2>
                <p className='text-light'>Advanced</p>
              </div>
            </div>
            <div className="skill">
              <IoLogoCss3 className='icon'/>
              <div className="skill-discription">
                <h2>CSS</h2>
                <p className='text-light'>Advanced</p>
              </div>
            </div>
            <div className="skill">
              <AiFillHtml5 className='icon'/>
              <div className="skill-discription">
                <h2>HTML</h2>
                <p className='text-light'>Advanced</p>
              </div>
            </div>
            <div className="skill">
              <IoLogoSass className='icon'/>
              <div className="skill-discription">
                <h2>SASS</h2>
                <p className='text-light'>Advanced</p>
              </div>
            </div>
            <div className="skill">
              <SiMaterialui className='icon'/>
              <div className="skill-discription">
                <h2>MaterialUI</h2>
                <p className='text-light'>Intermediate</p>
              </div>
            </div>
            <div className="skill">
              <FaNodeJs className='icon'/>
              <div className="skill-discription">
                <h2>Node.js</h2>
                <p className='text-light'>Beginner</p>
              </div>
            </div>
            <div className="skill">
              <SiMongodb className='icon'/>
              <div className="skill-discription">
                <h2>Mongodb</h2>
                <p className='text-light'>Familiarity</p>
              </div>
            </div>
            <div className="skill">
              <SiExpress className='icon'/>
              <div className="skill-discription">
                <h2>Express.js</h2>
                <p className='text-light'>Beginner</p>
              </div>
            </div>
            
            
        </div>
    </section>
  )
}

export default Experience