import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import icons from '../assets/img/icons.svg';
import logo from '../assets/img/yh-logo.png';

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = value => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''} fixed="top">
      <Container>
        <Navbar.Brand href="/">
         <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
