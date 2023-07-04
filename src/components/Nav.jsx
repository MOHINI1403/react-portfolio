import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
const Nav=()=>{
    return(
        <nav className='header__nav'>
            <div className='menuIcon'>
                <ul className='navbar-list'>
                    <li>
                        <NavLink className="navbar-link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/project">Project</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/profile">Coding Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/contact">Contact</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
export default Nav;