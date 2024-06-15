import React from 'react';
import HeroImg from '../components/Images/HeroImg';
import Work from '../components/Projects/Work';
import AboutContent from '../components/About/AboutContent';
import TechStackContent from '../components/TechStack/TechStack';

const Home = () => {
    return (
        <div>
            <HeroImg />
            <AboutContent />
            <TechStackContent />
            <Work />
        </div>
    );
};

export default Home;
