import './WorkCardStyles.css';
import WorkCard from './WorkCard';
import WorkCradData from './WorkCardData';

import React from 'react';

const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>My Projects</h1>
            <div className='project-container'>
                {WorkCradData.map((val, ind) => {
                    return (
                        <WorkCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.repo}
                            hosted={val.hosted}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Work;
