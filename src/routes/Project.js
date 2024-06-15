import React from 'react';
import HeroImg2 from '../components/Images/HeroImg2';
import Work from '../components/Projects/Work';
import TechStackContent from '../components/TechStack/TechStack';

const Project = () => {
    return (
        <div>
            <HeroImg2 heading='PROJECTS' text='A glance into my creations' />
            <TechStackContent />
            <Work />
        </div>
    );
};

export default Project;
