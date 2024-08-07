import './AboutContentStyles.css';

import React from 'react';
import { Link } from 'react-router-dom';
import React1 from '../../assets/react1.jpg';
import React2 from '../../assets/react2.webp';

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <div className='fade-in'>
                    <h1>About me</h1>
                    <p>
                        Hello! I'm Lior Shahar, a passionate and dedicated Full
                        Stack Software Engineer with a strong foundation in
                        computer science and a love for crafting elegant and
                        efficient code. I thrive on turning complex problems
                        into simple, beautiful, and intuitive solutions.
                    </p>
                </div>
                <div className='fade-in'>
                    <h2>My Journey</h2>
                    <p>
                        I graduated with a degree in Computer Science from Ariel
                        University, where I honed my skills in software
                        development and explored various aspects of technology.
                        Since then, I have been on an exciting journey in the
                        tech industry, working on diverse projects that range
                        from front-end design to back-end development.
                    </p>
                </div>

                <div className='fade-in'>
                    <h2>What I Do</h2>
                    <ul
                        style={{
                            listStyleType: 'disc',
                            textAlign: 'left',
                            color: '#fff',
                        }}
                    >
                        <li>
                            <p style={{ marginBlock: '0.5rem' }}>
                                <strong>Full Stack Development: </strong>I
                                specialize in both front-end and back-end
                                development, creating scalable, maintainable,
                                extensible, and fault-tolerant web applications.
                            </p>
                        </li>
                        <li>
                            <p style={{ marginBlock: '0.5rem' }}>
                                <strong>Cloud Development: </strong>Proficient
                                in designing, deploying, and managing
                                applications on cloud platforms, particularly
                                Amazon Web Services (AWS). Experienced in
                                leveraging AWS services like EC2, S3, Lambda,
                                and RDS to build scalable and resilient cloud
                                solutions.
                            </p>
                        </li>
                        <li>
                            <p style={{ marginBlock: '0.5rem' }}>
                                <strong>Frontend Technologies: </strong>
                                Expertise in HTML, CSS, TypeScript, and React to
                                build responsive and interactive user
                                interfaces.
                            </p>
                        </li>
                        <li>
                            <p style={{ marginBlock: '0.5rem' }}>
                                <strong>Backend Technologies: </strong>
                                Proficient in Node.js, Express, and Python
                                developing robust server-side applications.
                            </p>
                        </li>
                        <li>
                            <p style={{ marginBlock: '0.5rem' }}>
                                <strong>Database Management: </strong>Skilled in
                                SQL and NoSQL databases, ensuring data integrity
                                and optimized performance.
                            </p>
                        </li>
                        <li>
                            <p style={{ marginBlock: '0.5rem' }}>
                                <strong>API Integration: </strong>Experience in
                                building and consuming RESTful APIs, connecting
                                applications and ensuring smooth data flow.
                            </p>
                        </li>
                        <li>
                            <p style={{ marginBlock: '0.5rem' }}>
                                <strong>Version Control: </strong>Adept at using
                                Git and GitHub for version control and
                                collaboration.
                            </p>
                        </li>
                        <li>
                            <p style={{ marginBlock: '0.5rem' }}>
                                <strong>Containerization: </strong>Skilled in
                                using Docker to create, deploy, and manage
                                containerized applications, ensuring consistency
                                across multiple environments.
                            </p>
                        </li>
                        <li>
                            <p style={{ marginBlock: '0.5rem' }}>
                                <strong>Caching Solutions: </strong>Experienced
                                with Redis for in-memory data storage and
                                caching, enhancing application performance and
                                scalability.
                            </p>
                        </li>
                        <li>
                            <p style={{ marginBlock: '0.5rem' }}>
                                <strong>Microservices Architecture: </strong>
                                Experienced in designing and implementing
                                microservices architectures, enabling scalable
                                and maintainable applications by breaking down
                                monolithic systems into manageable, independent
                                services.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='fade-in'>
                    <h2>My Philosophy</h2>
                    <p>
                        I believe in continuous learning and staying updated
                        with the latest trends in technology. My approach is to
                        combine creativity with logic to produce high-quality
                        work. I am a strong advocate of clean, maintainable code
                        and best practices in software development.
                    </p>
                </div>
                <div className='fade-in'>
                    <h2>Beyond Coding</h2>
                    <p>
                        When I'm not coding, you can find me playing guitar,
                        working out, exploring new technologies, contributing to
                        open source projects, or attending tech meetups and
                        conferences. I also enjoy just chilling with my dog,
                        which helps me stay balanced and inspired.
                    </p>
                </div>
                <Link to='/contact'>
                    <button className='btn'>Contact</button>
                </Link>
            </div>

            <div className='right fade-in'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={React1} className='img' alt='true' />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={React2} className='img' alt='true' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
