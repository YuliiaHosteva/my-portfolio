import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import icons from '../assets/img/icons.svg';
import logo from '../assets/img/yh-high-resolution-logo-transparent-2.png';

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // Закриваємо меню після натискання на посилання
  };

  return (
    <Navbar expanded={expanded} expand="md" className={scrolled ? 'scrolled' : ''} fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-container">
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
              Contacts
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/yuliia-hosteva/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="icon" width={18} height={18}>
                  <use href={`${icons}#icon-linkedin`}></use>
                </svg>
              </a>
              <a href="https://t.me/YuliiaHosteva" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="icon" width={18} height={18}>
                  <use href={`${icons}#icon-telegram`}></use>
                </svg>
              </a>
              <a href="https://wa.me/+4915205485193" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="icon" width={18} height={18}>
                  <use href={`${icons}#icon-whatsapp`}></use>
                </svg>
              </a>
              <a href="https://github.com/YuliiaHosteva" target="_blank" rel="noopener noreferrer" className="social-link">
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
