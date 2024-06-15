import './FooterStyles.css';

import React from 'react';

import {
    FaHome,
    FaPhone,
    FaMailBulk,
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='info'>
                        <FaHome
                            size={20}
                            style={{ color: '#fff', marginRight: '2rem' }}
                        />
                        <div>
                            <p>Herzliya</p>
                            <p>Israel</p>
                        </div>
                    </div>
                    <div className='info'>
                        <FaPhone
                            size={20}
                            style={{ color: '#fff', marginRight: '2rem' }}
                        />
                        <p>0507400142</p>
                    </div>
                    <div className='info'>
                        <FaMailBulk
                            size={20}
                            style={{ color: '#fff', marginRight: '2rem' }}
                        />
                        <p>Lior2kx@gmail.com</p>
                    </div>
                </div>

                <div className='right'>
                    <h4>About me</h4>
                    <p>This is me - Lior Shahar.</p>
                    <p>Reach me out HERE:</p>
                    <div className='social'>
                        <a href='https://www.linkedin.com/in/lior-sh-966833225/'>
                            <FaLinkedin
                                size={30}
                                style={{ color: '#fff', marginRight: '1rem' }}
                            />
                        </a>
                        <a href='https://github.com/lior2k'>
                            <FaGithub
                                size={30}
                                style={{ color: '#fff', marginRight: '1rem' }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
