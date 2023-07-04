import React from 'react'
import './footer.css'

import {FaGithub,FaLinkedin} from 'react-icons/fa';
const Footer=()=>{
    return(
        
        <footer className='footer'>

            <div className='footer__container container grid'>
                <div className='footer__socials'>
                    <a href="https://github.com/MOHINI1403"className='footer__social__link'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/mohini-chauhan-b7803122b"className='footer__social__link'><FaLinkedin /></a>
                    
                    
                </div>
                <p className='footer__copyright text-cs'>&copy;2023<span>Mohini</span>.All Rights Reserved</p>
                <p className='footer__copyright text-cs'>Developed By <span>Mohini Chauhan</span></p>


            </div>

        </footer>
    )
};
export default Footer;