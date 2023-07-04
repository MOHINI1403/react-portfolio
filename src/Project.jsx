import React, { useState } from 'react'
import './project.css'
import './app.css'
/*import List from './List'
import Items from './Items'*/
import {FaLink,FaLinkedin} from 'react-icons/fa';
import expenseImg from './assets/expenseLogo.png'
import weatherImg from './assets/weatherLogo.png'
import musicImg from './assets/musicLogo.png'
import shape2 from './assets/shape-2.png'
const projects=[
    {id:1,img:weatherImg,category:'Full Stack',title:'Weather App',link:'https://mohini1403.github.io/WeatherApp.github.io/'},
    {id:2,img:expenseImg,category:'Front-End',title:'Expense Tracker App',link:'https://mohini1403.github.io/ExpenseTracker.github.io/'},
    {id:3,img:musicImg,category:'Front-End',title:'Musicana',link:'https://mohini1403.github.io/Musicana.github.io/'}
]
const Project=()=>{
    const [projectItems,setMenuItems]=useState(projects);
    return(

        <section className='portfolio section'id='work'>
            <h2 className='section__title text-cs'>Projects</h2>
            <p className='section__subtitle'>
                My<span>Talent</span>
            </p>
            <br />
            

            <div className='portfolio__container container grid'>

                {projects.map(({img,category,title,link},index)=>{
                    return(
                        <div className='portfolio__items card card-two'>
                            
                            <div className='portfolio__img-wrapper'>
                                <img src={img}alt='project'className='portfolio__img' />
                            </div>
                            <br/>
                            <span className='portfolio__category text-cs'>{category}</span>
                            <h3 className='portfolio__title'>{title}</h3>
                            <div className='home__socials'>
                                <a href={link}className='home__social__link portfolio_link'><FaLink /></a>
                            </div>
                            
                    
                    
                    
                

                            
                        </div>
                    )
                })}
            </div>
            <div className='section__deco deco__left'>
                <img src={shape2} alt=''className='shape' />
            </div>
            


        </section>
        
    )
};
export default Project;