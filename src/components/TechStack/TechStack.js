import './TechStackStyles.css';
import React from 'react';
import TechCarousel from './TechCarousel';
import TechStackData from './techStackData';

const TechStackContent = () => {
    return (
        <div className='tech-stack'>
            <h1 className='tech-stack-title'>My Tech Stack</h1>
            {TechStackData.map((data, index) => (
                <TechCarousel key={index} data={data} ltr={index % 2 === 1} />
            ))}
        </div>
    );
};

export default TechStackContent;
