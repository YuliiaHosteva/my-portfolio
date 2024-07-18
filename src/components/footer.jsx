import { Container, Row, Col } from 'react-bootstrap';
import icons from '../assets/img/icons.svg';
import logo from '../assets/img/yh-logo.png';




const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
        <Col size={12} sm={6}>
        <img src={logo} alt="Logo" className="logo" />
         </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icons">
              <a href="#" className="social-link">
                <svg className="icon" width={18} height={18}>
            <use href={`${icons}#icon-linkedin`}></use>
          </svg>
              </a>
              <a href="#" className="social-link">
                <svg className="icon" width={18} height={18}>
            <use href={`${icons}#icon-telegram`}></use>
          </svg>
              </a>
              <a href="#" className="social-link">
                <svg className="icon" width={18} height={18}>
            <use href={`${icons}#icon-whatsapp`}></use>
          </svg>
              </a>
            </div>
            <p className="footer-text">
              Copyright 2024. All Rights Reserved.
              The idea is borrowed from webdecoded.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;