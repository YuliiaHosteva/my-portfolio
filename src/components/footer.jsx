import { Container, Row, Col } from 'react-bootstrap';
import icons from '../assets/img/icons.svg';
import logo from '../assets/img/yh-high-resolution-logo-transparent-2.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col size={8} sm={6}>
            <a href="#home">
              <img src={logo} alt="Logo" className="logo" />
            </a>
          </Col>
          <Col size={8} sm={6} className="text-center text-sm-end">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/yuliia-hosteva/" target="_blank" className="social-link">
                <svg className="icon" width={18} height={18}>
                  <use href={`${icons}#icon-linkedin`}></use>
                </svg>
              </a>
              <a href="https://t.me/YuliiaHosteva" target="_blank" className="social-link">
                <svg className="icon" width={18} height={18}>
                  <use href={`${icons}#icon-telegram`}></use>
                </svg>
              </a>
              <a href="https://wa.me/+4915205485193" target="_blank" className="social-link">
                <svg className="icon" width={18} height={18}>
                  <use href={`${icons}#icon-whatsapp`}></use>
                </svg>
              </a>
              <a href="https://github.com/YuliiaHosteva" target="_blank" className="social-link">
                <svg className="icon" width={18} height={18}>
                  <use href={`${icons}#icon-github`}></use>
                </svg>
              </a>
            </div>
          </Col>
        </Row>

        <p className="footer-text glitch" data-text={`© ${new Date().getFullYear()} // Yuliia Hosteva // Neon Dreams`}>
          © {new Date().getFullYear()} // Yuliia Hosteva // Neon Dreams
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
