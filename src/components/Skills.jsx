import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import meter1 from '../assets/img/meter1-min.png';
import meter2 from '../assets/img/meter2-min.png';
import meter3 from '../assets/img/meter3-min.png';
import meter4 from '../assets/img/meter4-min.png';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 767, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              I am proficient in CSS, HTML, and JavaScript, with advanced expertise in React and Node.js. 
              Over the past 10 months, I have successfully completed three team projects and four individual projects. 
              These experiences have sharpened my core technical skills and strengthened my organizational ethics and discipline.              
              </p>
              <TrackVisibility once>
                {({ isVisible }) => 
                  isVisible && (
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                      <div className="item">
                        <img className="item-img" src={meter1} alt="HTML" />
                        <h5>HTML</h5>
                      </div>
                      <div className="item">
                        <img className="item-img" src={meter2} alt="JavaScript" />
                        <h5>JavaScript</h5>
                      </div>
                      <div className="item">
                        <img className="item-img" src={meter3} alt="Design" />
                        <h5>Design</h5>
                      </div>
                      <div className="item">
                        <img className="item-img" src={meter4} alt="React" />
                        <h5>React</h5>
                      </div>
                    </Carousel>
                  )
                }
              </TrackVisibility>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
