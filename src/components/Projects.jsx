import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Імпортуємо зображення проектів
import projImg1 from '../assets/img/MoviesHunt.png';
import projImg2 from '../assets/img/Phonebook.png';
import projImg3 from '../assets/img/Energy-flow.png';
import projImg4 from '../assets/img/Vishivanka.png';
import projImg5 from '../assets/img/Task-pro.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MoviesHunt',
      description: '',
      imgUrl: projImg1,
      url: '#',
    },
    {
      id: 2,
      title: 'Phonebook',
      description: '',
      imgUrl: projImg2,
      url: '#',
    },
    {
      id: 3,
      title: 'Energy.flow',
      description: '',
      imgUrl: projImg3,
      url: '#',
    },
    {
      id: 4,
      title: 'Vishivanka',
      description: '',
      imgUrl: projImg4,
      url: '#',
    },
    {
      id: 5,
      title: 'Task-pro',
      description: '',
      imgUrl: projImg5,
      url: '#',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p className="project-text">
                    In this section, you can familiarize yourself with my projects.
                  </p>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel"
                  >
                    {projects.map((project, id) => {
                            return <ProjectCard key={id} {...project} />;
                          })}
                  </Carousel>
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
