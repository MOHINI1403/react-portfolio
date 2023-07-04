import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import Nav from './Nav';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {BsSun,BsMoon} from 'react-icons/bs';
import '../App.css';
import './header.css'
import {Link} from 'react-scroll'
import shape2 from '../assets/shape-2.png'
const getStorageTheme=()=>{
    let theme='light-theme';
    if(localStorage.getItem('theme')){
        theme=localStorage.getItem('theme');
    }
}
const Header=()=>{
    const [showMenu,setShowMenu]=useState(false);
    const [theme,setTheme]=useState(getStorageTheme());
    const toggleTheme=()=>{
        if(theme==='light-theme'){
            setTheme('dark-theme');
        }
        else{
            setTheme('light-theme');
        }
    }
   useEffect(()=>{
    document.body.classList.toggle('no-scroll',showMenu);

   },[showMenu]);
   useEffect(()=>{
    document.documentElement.className=theme;
    localStorage.setItem('theme',theme);

   },[theme])
    return(
        <header className='header'>
            <nav className='nav'>
                <a href='./'className='nav__logo text-cs'>Mohini</a>
                
                <div className={`${showMenu ? 'nav__menu show-menu' :'nav__menu'}`}>
                    

                    <div className='nav__data'>
                        <NavLink to="/">
                            <img src="src\assets\Logo.PNG"alt='logo'className='nav__profile__logo'/>
                        </NavLink>
                        <ul className='nav__list'>

                            <li>
                                <NavLink className="nav__link" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav__link" to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav__link" to="/project">Project</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav__link" to="/profile">Coding Profile</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav__link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <div className='header__socials'>
                            <a href="https://github.com/MOHINI1403"className='header__social__link'><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/mohini-chauhan-b7803122b"className='header__social__link'><FaLinkedin /></a>
                    
                    
                        </div>

                    </div>
                    <div className='section__deco deco__left header__deco'>
                        {/*<img src={shape2} alt=''className='shape' />*/}
                    </div>
                </div>
                <div className='nav__btns'>
                    <div className='theme__toggler' onClick={toggleTheme}>
                        {theme==='light-theme' ? <BsMoon /> : <BsSun />}
                    </div>
                    <div className={`${showMenu ? 'nav__toggle animate-toggler show-menu' :'nav__toggle'}`}onClick={()=>setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
           
        </header>
    )
};
export default Header;