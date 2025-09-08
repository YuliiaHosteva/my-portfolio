import { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);
  const period = 2000;

  const rotatingTexts = useMemo(() => ['WEB APPS', 'DESIGNS', 'BACKENDS'], []);

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
            <span className="tagLine"> Portfolio — Selected Work & Experiments</span>
            <h1 className="dynamic-text-wrapper">
              I build <span className="wrap gradient-text">{currentText}</span>
            <span className="cursor"></span> 
            </h1>
            </Col>
            </Row>
          <div className="text-box">
            <p>
            I craft <span className="emph">bold, responsive interfaces</span> and
            <span className="emph"> high-performance back-ends</span>. Smooth visuals,
            clean architecture, real-world impact. Let’s ship the future.
            </p>
          </div>
          <div className="cta-buttons">
           <a href="/public/yuliia_hosteva_cv.pdf" download className="cta-btn">Download CV</a>
          </div>

      </Container>
    </section>
  );
};
export default Header;