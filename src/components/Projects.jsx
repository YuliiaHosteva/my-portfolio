import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Import project images
import projImg1 from '../assets/img/MoviesHunt.png';
import projImg2 from '../assets/img/Phonebook.png';
import projImg3 from '../assets/img/Energy-flow.png';
import projImg4 from '../assets/img/Vishivanka.png';
import projImg5 from '../assets/img/Task-pro.png';
import projImg6 from '../assets/img/Web Studio.png';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      category: 'Web Development',
      title: 'MoviesHunt',
      description: 'Individual project "MoviesHunt". A responsive movie search website using React, Redux, and TMDb API. The website allows users to search for movies by title and view movie details.',
      imgUrl: projImg1,
      url: 'https://goit-react-hw-05-amber.vercel.app',
    },
    {
      id: 2,
      category: 'Web Development',
      title: 'Phonebook',
      description: 'Individual project "Phonebook". An application designed to manage contacts efficiently. The application allows users to add, edit, delete, and search for contacts.',
      imgUrl: projImg2,
      url: 'https://goit-react-hw-08-one-livid.vercel.app',
    },
    {
      id: 3,
      category: 'Fitness',
      title: 'Energy.flow',
      description: 'This website is a fitness application that offers various features for workouts and healthy lifestyle support. It contains information about available workouts, programs, dietary advice, and useful resources for achieving fitness goals. ',
      imgUrl: projImg3,
      url: 'https://jackavryashnik.github.io/fitnes-app/',
    },
    {
      id: 4,
      category: 'Culture',
      title: 'Vishivanka',
      description: 'This website is a project dedicated to Ukrainian embroidered shirts (vyshyvanka) and culture. It contains information about traditional Ukrainian embroidered shirts, their history, significance, and styles.',
      imgUrl: projImg4,
      url: 'https://veronikavaraksina1.github.io/command-project-vyshyvanka-vibes/',
    },
    {
      id: 5,
      category: 'Productivity',
      title: 'Task-pro',
      description: 'Task Pro, inspired by Trello, allows users to register, authenticate with Google, create custom boards and tasks, and set task details. It also supports dark, light, and violet themes.',
      imgUrl: projImg5,
      url: 'https://task-pro-kohl.vercel.app/welcome',
    },
    {
      id: 6,
      category: 'Web Development',
      title: 'Web Studio',
      description: '"WebStudio" is a website for presenting digital solutions for businesses. The website features a responsive design and is built using HTML and CSS.',
      imgUrl: projImg6,
      url: 'https://yuliiahosteva.github.io/goit-markup-hw-06/',
    },
  ];

  const handleFilterChange = (category) => {
    setFilter(category);
    setActiveFilter(category);
  };

  const filteredProjects = projects.filter(project => filter === 'All' || project.category === filter);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <div className="filters">
              <button
                onClick={() => handleFilterChange('All')}
                className={activeFilter === 'All' ? 'active' : ''}
              >
                All projects
              </button>
              <button
                onClick={() => handleFilterChange('Web Development')}
                className={activeFilter === 'Web Development' ? 'active' : ''}
              >
                Web Development
              </button>
              <button
                onClick={() => handleFilterChange('Fitness')}
                className={activeFilter === 'Fitness' ? 'active' : ''}
              >
                Fitness
              </button>
              <button
                onClick={() => handleFilterChange('Culture')}
                className={activeFilter === 'Culture' ? 'active' : ''}
              >
                Culture
              </button>
              <button
                onClick={() => handleFilterChange('Productivity')}
                className={activeFilter === 'Productivity' ? 'active' : ''}
              >
                Productivity
              </button>
            </div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <Row className="projects-row">
                    {filteredProjects.map((project, id) => (
                      <Col key={id} md={4} className="mb-4">
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
