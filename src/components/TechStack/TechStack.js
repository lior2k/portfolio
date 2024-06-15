import './TechStackStyles.css';
import React from 'react';
import TechCarousel from './TechCarousel';
import TechStackData from './techStackData';

const TechStackContent = () => {
    return (
        // <div className='tech-stack fade-in'>
        <div className='tech-stack'>
            <h1 className='tech-stack-title'>My Tech Stack</h1>
            <TechCarousel data={TechStackData[0]}></TechCarousel>
            <TechCarousel data={TechStackData[1]} ltr={true}></TechCarousel>
            <TechCarousel data={TechStackData[2]}></TechCarousel>
        </div>
    );
};

export default TechStackContent;
