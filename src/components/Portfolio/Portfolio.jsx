import React from 'react'
import commerce from '../../assets/commerce.jpg'
import meal from '../../assets/meal.jpg'
import furniture from '../../assets/furniture.jpg'
import tic from '../../assets/Tic Tac Toe.jpg'
import {AiOutlineEye} from 'react-icons/ai'
import {BiCodeBlock} from 'react-icons/bi'

import './styles.css'

const projects = [
  {
    id: 1,
    name: 'E_Commerce Shop',
    thumbnail: commerce,
    techs:'React.js, CSS, MaterialUI, JSX, RESTAPI ,Backend API',
    link:'https://github.com/Majd42/e-commerce',
    live:'https://storied-nougat-215d87.netlify.app/'
  },
  {
    id: 2,
    name: 'Meal Search API',
    thumbnail: meal,
    techs:'HTML, CSS, JavaScript, MealAPI',
    link:'https://github.com/Majd42/Meal-Search',
    live:'https://bucolic-douhua-579d59.netlify.app/'
  },
  {
    id: 3,
    name: 'Furniture Shop',
    thumbnail: furniture,
    techs:'React.js, CSS, JSX',
    link:'https://github.com/Majd42/Furniture-Shop',
    live:'https://monumental-cascaron-a2cc2b.netlify.app/'
  },
  {
    id: 4,
    name: 'Tic Tac Toe Game',
    thumbnail: tic,
    techs:'HTML, CSS, JavaScript',
    link:'https://github.com/Majd42/Tic-Tac-Toe',
    live:'https://tubular-salamander-d6fc19.netlify.app/'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio' className='container'>
        <div className="title">
          <h4 className='text-light'>My Recent Work</h4>
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio">
          {projects.map((project) => (
             <div className="project">
            
              <div className="img">
                <img src={project.thumbnail} alt="" />
                  <div className="project-btns">
                  <a href={project.link} className="project-btn"> < AiOutlineEye/></a>
                  <a href={project.live} className="project-btn primary"><BiCodeBlock /></a>
              </div>
              </div>
              <div className="info">
                <h2>{project.name} </h2>
                <p className='text-light'><strong>Technologies: </strong>{project.techs} </p>
              </div>
              
            </div> 
            
          
          ))}
        </div>
    </section>
  )
}

export default Portfolio


