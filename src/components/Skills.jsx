import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiFigma } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6"},
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E"},
  { name: "React", icon: <FaReact />, color: "#61DAFB"},
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032"},
  { name: "Figma", icon: <SiFigma />, color: "#A259FF" },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 7 },
  desktop: { breakpoint: { max: 1280, min: 992 }, items: 5 },
  tablet: { breakpoint: { max: 992, min: 576 }, items: 3 },
  mobile: { breakpoint: { max: 576, min: 0 }, items: 2 },
};

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <div className="skill-bg" aria-hidden="true" />
              <h2 className="skill-title">Skills</h2>
              <p className="skill-text">
                I enjoy creating modern, responsive web applications and turning ideas into interactive experiences.
                My strengths are <span className="emph">clean code</span>, <span className="emph">problem-solving</span>, and
                <span className="emph"> teamwork</span>. I’m always curious to learn new tools and improve both technically and creatively.
              </p>

              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <Carousel
                      responsive={responsive}
                      infinite
                      autoPlay
                      autoPlaySpeed={2200}
                      arrows={false}
                      customTransition="transform 600ms ease"
                      itemClass="skill-item-wrap"
                      containerClass="skill-slider"
                      pauseOnHover
                    >
                      {skills.map(({ name, icon, color, level }) => (
                        <div className="item text-center skill-item" key={name} title={name}>
                          <div
                            className="skill-icon"
                            style={{ color }}
                            aria-label={name}
                            role="img"
                          >
                            {icon}
                          </div>
                          <h5 className="skill-name">{name}</h5>
                          <span className="skill-badge">{level}</span>
                        </div>
                      ))}
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
