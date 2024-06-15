import './NavbarStyles.css';
import profilepic from '../../assets/profile-pic.png';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <div className='header-title-container'>
                <img className='profile-pic' src={profilepic} alt=''></img>
                <Link to='/'>
                    <h1 className='header-title'>Lior Shahar - Portfolio</h1>
                </Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/' onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/project' onClick={handleClick}>
                        Projects
                    </Link>
                </li>
                {/* <li>
          <Link to="/about">About</Link>
        </li> */}
                {/* <li>
                    <Link to='/resume' onClick={handleClick}>
                        Resume
                    </Link>
                </li> */}
                <li>
                    <Link to='/contact' onClick={handleClick}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: '#fff' }} />
                ) : (
                    <FaBars size={20} style={{ color: '#fff' }} />
                )}
            </div>
        </div>
    );
};

export default Navbar;
