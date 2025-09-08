import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Іконки
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiFigma } from "react-icons/si";

const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 7 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
    tablet: { breakpoint: { max: 767, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
I enjoy creating modern, responsive web applications and turning ideas into interactive experiences.
My strengths are clean code, problem-solving, and effective teamwork.
I’m always curious to learn new tools and improve both technically and creatively.              </p>
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                      <div className="item text-center">
                        <FaHtml5 size={60} color="#E34F26" style={{ marginBottom: "10px" }}/>
                        <h5>HTML</h5>
                      </div>
                      <div className="item text-center">
                        <FaCss3Alt size={60} color="#1572B6" style={{ marginBottom: "10px" }}/>
                        <h5>CSS</h5>
                      </div>
                      <div className="item text-center">
                        <SiJavascript size={60} color="#F7DF1E" style={{ marginBottom: "10px" }}/>
                        <h5>JavaScript</h5>
                      </div>
                      <div className="item text-center">
                        <FaReact size={60} color="#61DAFB" style={{ marginBottom: "10px" }}/>
                        <h5>React</h5>
                      </div>
                      <div className="item text-center">
                        <FaNodeJs size={60} color="#339933" style={{ marginBottom: "10px" }}/>
                        <h5>Node.js</h5>
                      </div>
                      <div className="item text-center">
                        <FaGitAlt size={60} color="#F05032" style={{ marginBottom: "10px" }}/>
                        <h5>Git</h5>
                      </div>
                      <div className="item text-center">
                        <SiFigma size={60} color="#A259FF" style={{ marginBottom: "10px" }}/>
                        <h5>Figma</h5>
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
