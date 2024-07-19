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
import projImg6 from '../assets/img/Web Studio.png';



const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MoviesHunt',
      description: 'Individual project "MoviesHunt". A responsive movie search website using React, Redux, and TMDb API. The website allows users to search for movies by title and view movie details. The site features two pages: Home and Movies. The Home page presents trending movies, which can be viewed by following a link to the official site. The Movies page includes a search function, allowing users to find their favorite movies by keywords. Enjoy watching with the whole family!',
      imgUrl: projImg1,
      url: 'https://goit-react-hw-05-amber.vercel.app',
    },
    {
      id: 2,
      title: 'Phonebook',
      description: 'Individual project "Phonebook". An application designed to manage contacts efficiently. The application allows users to add, edit, delete, and search for contacts. The site features a registration and login form, a responsive design, an intuitive interface, and ease of use, ensuring your contacts are always at hand. In my work, I utilized the following technologies: React.js, Redux.js, JavaScript, Material UI, Animate.css. Welcome to my Phonebook!',
      imgUrl: projImg2,
      url: 'https://goit-react-hw-08-one-livid.vercel.app',
    },
    {
      id: 3,
      title: 'Energy.flow',
      description: 'This website is a fitness application that offers various features for workouts and healthy lifestyle support. It contains information about available workouts, programs, dietary advice, and useful resources for achieving fitness goals. The structured design allows for easy access to the necessary information and educational materials. Additionally, the website has an adaptive design, making it convenient to use on various devices, including computers, tablets, and smartphones.',
      imgUrl: projImg3,
      url: 'https://jackavryashnik.github.io/fitnes-app/',
    },
    {
      id: 4,
      title: 'Vishivanka',
      description: 'This website is a project dedicated to Ukrainian embroidered shirts (vyshyvanka) and culture. It contains information about traditional Ukrainian embroidered shirts, their history, significance, and styles. Additionally, the website showcases various models of embroidered shirts and accessories, as well as offers the opportunity to purchase them. The website&apos;s design reflects Ukrainian authenticity and aesthetics, creating an atmosphere of national pride and beauty.',
      imgUrl: projImg4,
      url: 'https://veronikavaraksina1.github.io/command-project-vyshyvanka-vibes/',
    },
    {
      id: 5,
      title: 'Task-pro',
      description: 'Task Pro, inspired by Trello, allows users to register, authenticate with Google, create custom boards and tasks, and set task details. It also supports dark, light, and violet themes. My responsibilities in this team project included the AddCardModal, EditCardModal, and NeedHelp components along with their logic, as well as the Calendar component. I also handled the uploading, compression, and optimization of images from JPEG to WebP.',
      imgUrl: projImg5,
      url: 'https://task-pro-kohl.vercel.app/welcome',
    },
    {
      id: 5,
      title: 'Web Studio',
      description: '"WebStudio" is a website for presenting digital solutions for businesses. Key elements include a logo, navigation menu, key message with a service order button, a section describing working principles, information about the team, and examples of completed projects. The website also features a feedback form for convenient communication with potential clients. The website features a responsive design and is built using HTML and CSS.',
      imgUrl: projImg6,
      url: 'https://yuliiahosteva.github.io/goit-markup-hw-06/',
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
              <h2>Projects</h2>
              <p className="project-text">
                In this section, you can familiarize yourself with my projects.
              </p>
                  <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
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
