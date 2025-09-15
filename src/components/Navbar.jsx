import { useState, useEffect, useCallback, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import icons from '../assets/img/icons.svg';
import logo from '../assets/img/yh-high-resolution-logo-transparent-2.png';

const SECTION_IDS = ['home', 'skills', 'projects', 'contact'];

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  // підсвітка фону навбару при скролі
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // детермінований scrollspy 
  useEffect(() => {
    let navH = navRef.current?.offsetHeight || 0;

    const getSectionsMeta = () =>
      SECTION_IDS.map(id => {
        const el = document.getElementById(id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        const bottom = top + el.offsetHeight;
        return { id, top, bottom };
      }).filter(Boolean);

    let meta = getSectionsMeta();

    // виставляємо CSS-змінну для scroll-margin-top (щоб якорі не ховались)
    const setCSSVar = () => {
      navH = navRef.current?.offsetHeight || 0;
      document.documentElement.style.setProperty('--navH', `${navH}px`);
    };
    const HYST = 24; // невеликий буфер проти "миготіння"

    const getRefY = () => {
      const navH = navRef.current?.offsetHeight || 0;
      const vh = window.innerHeight;
      // референтна лінія трохи нижче верху екрана
      const ratio = window.matchMedia('(max-width: 768px)').matches ? 0.30 : 0.40;
      return window.scrollY + navH + vh * ratio;
    };
    const handle = () => {
    const yRef = getRefY();

    // на всяк випадок тримаємо meta відсортованим
    meta.sort((a, b) => a.top - b.top);

    // знаходимо першу секцію, чий top ще попереду (вище yRef)
    let idx = meta.findIndex(m => yRef + HYST < m.top);

    // якщо такої нема — активна остання
    if (idx === -1) idx = meta.length;

    // активна — та, чий top ми вже перетнули
    const current = meta[Math.max(0, idx - 1)];


    if (current && current.id !== activeLink) setActiveLink(current.id);
  };

    const onResize = () => { setCSSVar(); meta = getSectionsMeta(); handle(); };

  setCSSVar();
  handle();

  window.addEventListener('scroll', handle, { passive: true });
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize);
  window.addEventListener('load', onResize);

  const interval = setInterval(() => {
    const h = navRef.current?.offsetHeight || 0;
    if (h !== navH) onResize();
  }, 300);

  return () => {
    window.removeEventListener('scroll', handle);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('orientationchange', onResize);
    window.removeEventListener('load', onResize);
    clearInterval(interval);
  };
}, [activeLink]);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    e.currentTarget?.blur();       // прибираємо :focus підсвітку
    setExpanded(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  }, []);

  return (
    <Navbar
      ref={navRef}
      expanded={expanded}
      expand="md"
      className={scrolled ? 'scrolled' : ''}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home" onClick={(e) => handleNavClick(e, 'home')}>
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          {/* керуємо активністю через activeKey */}
          <Nav className="nav-container" activeKey={activeLink}>
            {SECTION_IDS.map(id => (
              <Nav.Link
                key={id}
                eventKey={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="navbar-link"
              >
                {id === 'home' ? 'Home'
                  : id === 'skills' ? 'Skills'
                  : id === 'projects' ? 'Projects'
                  : 'Contacts'}
              </Nav.Link>
            ))}
          </Nav>

          <span className="navbar-text">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/yuliia-hosteva/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="icon" width={18} height={18}><use href={`${icons}#icon-linkedin`} /></svg>
              </a>
              <a href="https://t.me/YuliiaHosteva" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="icon" width={18} height={18}><use href={`${icons}#icon-telegram`} /></svg>
              </a>
              <a href="https://wa.me/+4915205485193" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="icon" width={18} height={18}><use href={`${icons}#icon-whatsapp`} /></svg>
              </a>
              <a href="https://github.com/YuliiaHosteva" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="icon" width={18} height={18}><use href={`${icons}#icon-github`} /></svg>
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
