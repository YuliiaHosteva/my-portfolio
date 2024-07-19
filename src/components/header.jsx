import { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);
  const period = 2000;

  const rotatingTexts = useMemo(() => ['Yuliia Hosteva', 'Web Developer', 'Freelancer'], []);

  useEffect(() => {
    const tick = () => {
      const i = rotationIndex % rotatingTexts.length;
      const fullText = rotatingTexts[i];

      let updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (isDeleting) {
        setTypingSpeed(prevTypingSpeed => prevTypingSpeed / 5);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setRotationIndex(prevRotationIndex => prevRotationIndex + 1);
        setTypingSpeed(100);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [currentText, isDeleting, rotationIndex, rotatingTexts, typingSpeed]);

  return (
    <section className="header" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagLine">Welcome to my Portfolio</span>
            <h1>
            I&apos;m <span className="wrap gradient-text">{currentText}</span>
            <span className="cursor"></span> 
            </h1>
            <div className="text-box">
            <p>
              I&apos;m a full stack developer passionate about creating elegant and 
              efficient solutions to complex problems. With a keen eye for design and 
              a thirst for new challenges, I push the boundaries of what&apos;s possible, 
              whether in user interfaces or development tasks.
            </p>
            </div>
         
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Header;