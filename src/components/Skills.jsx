import { Container, Row, Col } from 'react-bootstrap';
import meter1 from '../assets/img/meter1-min.png';
import meter2 from '../assets/img/meter2-min.png';
import meter3 from '../assets/img/meter3-min.png';
import meter4 from '../assets/img/meter4-min.png';

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p> I am proficient in CSS, HTML, and JavaScript, and have mastered React and Node.js. 
                Over the past 10 months of coding, I have successfully completed 3 team projects and 4 individual projects. 
                These experiences have honed my core technical skills and developed my abilities in organizational ethics and discipline.
              </p>
              <div className="item">
                <img className="item-img" src={meter1} alt="HTML" />
                <h5>HTML</h5>
              </div>
              <div className="item">
                <img className="item-img" src={meter2} alt="JavaScript" />
                <h5>Java Script</h5>
              </div>
              <div className="item">
                <img className="item-img" src={meter3} alt="Design" />
                <h5>Design</h5>
              </div>
              <div className="item">
                <img className="item-img" src={meter4} alt="React" />
                <h5>React</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

