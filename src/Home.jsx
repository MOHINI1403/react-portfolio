import React from 'react'
import profileImg from './assets/ProfilePage.png';
import shape1 from './assets/shape-1.png';
import shape2 from './assets/shape-2.png';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import './Home.css';
import CV from './assets/Copy of Mohini Chauhan.pdf'
const Home=()=>{
    return(
       <section className='home'id='home'>
            <div className='home__container container'>
                <p className='home__subtitle text-cs'>
                    Hello,<span>My Name Is</span>
                </p>
                <h1 className='home__title text-cs'>
                    <span>MOHINI </span> 
                    <br />
                    CHAUHAN
                </h1>
                <p className='home__job'>
                    <span className='text-cs'>I Am</span><b>Web Developer</b>

                </p>
                <div className='home__img__wrapper'>
                    <div className='home__banner'>
                        <img src={profileImg}alt=''className='home__profile'/>
                    </div>
                    <p className='home__data home__data-one'>
                        <span className='text-lg'>300<b>+</b></span>
                        <span className='text-sm text-cs'><span>Problems</span></span>
                    </p>
                    <p className='home__data home__data-two'>
                        <span className='text-lg'>3<b>+</b></span>
                        <span className='text-sm text-cs'><span>Projects</span></span>
                    </p>
                    <img src={shape1}alt=''className='shape shape__1' />
                    <img src={shape2}alt=''className='shape shape__2' />
                    <img src={shape2}alt=''className='shape shape__3' />
                </div>
                <p className='home__text'>
                Hardworking and a passionate Student Seeking For an Opportunity to bring forth a motivated attitude and a variety of powerful Skills.
                    Currently I am an undergraduate student pursuing my Bachelor's in Information Technology 
                    and meanwhile exploring various Computer Skills and keen to gain perfection in every technical skill-set I acquire.

                </p>
                <div className='home__socials'>
                    <a href="https://github.com/MOHINI1403"className='home__social__link'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/mohini-chauhan-b7803122b"className='home__social__link'><FaLinkedin /></a>
                    
                    
                </div>
                <div className='home__btns'>
                    <a href={CV}className='btn text-cs'>Download CV</a>
                    
                    <a href='./about'className='hero__link text-cs'>My Skills</a>
                </div>
                
            </div>
            <div className='section__deco deco__left'>
                <img src={shape2} alt=''className='shape' />
            </div>
            
            
       </section>
    )
};
export default Home;