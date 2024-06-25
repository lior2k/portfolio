import proj0 from '../../assets/TradeInHomepage.png';
import proj1 from '../../assets/WeatherAppHomepage.png';
import proj2 from '../../assets/BigDataAnalyticsProject.png';
import proj3 from '../../assets/PathfindingVisualizerHomepage.png';
import proj4 from '../../assets/Ride4u.jpg';
import proj5 from '../../assets/PythonCVIP-Toolbox.png';
import proj6 from '../../assets/ClientServerChatApp.png';
import proj7 from '../../assets/DirectedWeightedGraphs.png';

const ProjectCardData = [
    {
        imgsrc: proj0,
        title: 'Trade In Herzliya Car Dealership Website',
        text: 'Designed and developed a responsive full stack web application for Trade In Herzliya using React, Node, Express, MongoDB, AWS EC2, Nginx, Vite, Docker, Redis, and more. Including a custom CMS solution.',
        repo: 'https://www.tradeinherzliya.com/',
        view: '',
        hosted: true,
    },
    {
        imgsrc: proj1,
        title: 'Weather App',
        text: 'Built a responsive web application using React, TypeScript, and Redux Toolkit. Integrated the AccuWeather API for real-time weather data and utilized the localStorage Web API for persisting user preferences.',
        repo: 'https://lior2k.github.io/Lior-Shahar-11-04-2024/',
        view: '',
        hosted: true,
    },
    {
        imgsrc: proj2,
        title: 'Real Time Astronomy Events Dashboard',
        text: 'Developed a micro services based system using Node.js, Python, Flask, Elasticsearch, Azure Event Hub, Redis, Docker, and React. Features real-time updates with WebSockets and NASA API integration for astronomical data.',
        repo: 'https://github.com/lior2k/Big-Data-Microservices-Project',
        view: '',
        hosted: false,
    },
    {
        imgsrc: proj3,
        title: 'Pathfinding Visualizer',
        text: 'Developed an interactive web application using React.js, JavaScript, and CSS. featuring several graph algorithms and a recursive maze generator.',
        repo: 'https://lior2k.github.io/Pathfinding-Visualizer/',
        view: '',
        hosted: true,
    },
    {
        imgsrc: proj4,
        title: 'Hitch Hiking Full Stack Mobile App',
        text: 'Led a team of 4 in developing a mobile app using Javascript, Java, and Firebase. Integrated with Google Maps API and Firebases Lambda Functions.',
        repo: 'https://github.com/lior2k/Ride4U',
        view: '',
        hosted: false,
    },
    {
        imgsrc: proj5,
        title: 'Python Image Processing Toolbox',
        text: 'Created a Python toolbox for advanced image processing tasks using OpenCV and NumPy. Implemented blurring, edge detection, feature extraction, and Bilateral Filtering. Gained in computer vision techniques.',
        repo: 'https://github.com/lior2k/Ex2-Convolution-Edge-Detection',
        view: '',
        hosted: false,
    },
    {
        imgsrc: proj6,
        title: 'Client-Server Chat Application',
        text: 'Java-based client-server chat app with real-time messaging and file transfer. Supports multi-client chat rooms over TCP. Implemented Selective Repeat Protocol (SRP) for reliable UDP file transfer. Featuring public/private messaging, file downloads/uploads, and robust communication protocols.',
        repo: 'https://github.com/lior2k/Projects/tree/main/ClientServerChatApp',
        view: '',
        hosted: false,
    },
    {
        imgsrc: proj7,
        title: 'Directed Weighted Graphs',
        text: 'Java implementation of directed weighted graphs with HashMaps for efficient representation. Includes classes for vertices, edges, and algorithms. Developed a Swing-based GUI for graph visualization and manipulation, supporting node/edge operations, shortest path calculation, and file save/load (JSON format). Demonstrates algorithm efficiency across various graph sizes.',
        repo: 'https://github.com/lior2k/Projects/tree/main/DirectedWeightedGraphs',
        view: '',
        hosted: false,
    },
];

export default ProjectCardData;
