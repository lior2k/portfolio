import './WorkCardStyles.css';
import React from 'react';
// import { NavLink } from "react-router-dom";
import { BsGithub } from 'react-icons/bs';
import { MdPageview } from 'react-icons/md';

const WorkCard = (props) => {
    return (
        <div className='project-card fade-in'>
            <a href={props.source}>
                <img src={props.imgsrc} alt='' />
            </a>
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <p>{props.text}</p>
                <div className='pro-btns'>
                    {props?.view && (
                        <a href={props.view} className='btn'>
                            <MdPageview /> &nbsp; View
                        </a>
                    )}
                    {props.hosted ? (
                        <a
                            href={props.source}
                            target='_blank'
                            rel='noreferrer'
                            className='btn btn-hosted'
                        >
                            &#8598; &nbsp; Check it out!
                        </a>
                    ) : (
                        <a href={props.source} className='btn'>
                            <BsGithub /> &nbsp; Source
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
