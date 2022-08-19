import React from 'react'
import ME from '../../assets/portfolio4.png'
import './styles.css'
import CV from '../../assets/CV.pdf'
const Header = () => {
  return (
    <section id='home' className='container header'>
        <div className="intro">
          <h3 className='top-header'>Hello, I'm </h3>
          <h1>Majd Shaheen</h1>
          <h3 className='text-light'>Frontend Developer</h3>
          <div className="actions">
          <a href={CV} download className='btn-primary'>DOWNLOAD CV</a>
          <a href="#contact"  className='btn '>Let's Talk</a>
         </div>
        </div>
        
        <div className="me">
         <img src={ME} alt="" />
        </div>

        

        
    </section>
  )
}

export default Header