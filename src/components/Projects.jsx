import { useMemo, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// images
import projImg1 from '../assets/img/MoviesHunt.png';
import projImg2 from '../assets/img/Phonebook.png';
import projImg3 from '../assets/img/Energy-flow.png';
import projImg4 from '../assets/img/Vishivanka.png';
import projImg5 from '../assets/img/Task-pro.png';
import projImg6 from '../assets/img/Web Studio.png';

const PROJECTS = [
  {
    id: 1,
    category: 'Web Development',
    title: 'MoviesHunt',
    description:
      'Responsive movie search (React, Redux, TMDb). Search by title, view details.',
    imgUrl: projImg1,
    url: 'https://goit-react-hw-05-amber.vercel.app',
    gitUrl: 'https://github.com/YuliiaHosteva/goit-react-hw-05',
  },
  {
    id: 2,
    category: 'Web Development',
    title: 'Phonebook',
    description:
      'Contacts manager: add/edit/delete/search. Auth, smooth UX.',
    imgUrl: projImg2,
    url: 'https://goit-react-hw-08-one-livid.vercel.app',
    gitUrl: 'https://github.com/YuliiaHosteva/goit-react-hw-08',
  },
  {
    id: 3,
    category: 'Fitness',
    title: 'Energy.flow',
    description:
      'Fitness app: workouts, programs, nutrition tips, useful resources.',
    imgUrl: projImg3,
    url: 'https://jackavryashnik.github.io/fitnes-app/',
    gitUrl: 'https://github.com/jackavryashnik/fitnes-app',
  },
  {
    id: 4,
    category: 'Culture',
    title: 'Vishivanka',
    description:
      'Project about Ukrainian vyshyvanka: history, meaning, styles.',
    imgUrl: projImg4,
    url: 'https://veronikavaraksina1.github.io/command-project-vyshyvanka-vibes/',
    gitUrl: 'https://github.com/VeronikaVaraksina1/command-project-vyshyvanka-vibes',
  },
  {
    id: 5,
    category: 'Productivity',
    title: 'Task-pro',
    description:
      'Trello-like boards/tasks, Google auth, themes (dark/light/violet).',
    imgUrl: projImg5,
    url: 'https://task-pro-kohl.vercel.app/welcome',
    gitUrl: 'https://github.com/jackavryashnik/task-pro',
  },
  {
    id: 6,
    category: 'Web Development',
    title: 'Web Studio',
    description:
      'Landing for digital solutions. Responsive, clean HTML+CSS.',
    imgUrl: projImg6,
    url: 'https://yuliiahosteva.github.io/goit-markup-hw-06/',
    gitUrl: 'https://github.com/YuliiaHosteva/goit-markup-hw-06',
  },
];

const TABS = ['All', 'Web Development', 'Fitness', 'Culture', 'Productivity'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => (active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active)),
    [active]
  );

  return (
    <section className="project cyberpunk" id="projects" aria-label="Projects">
      <Container>
        <h2 className="cp-title">Projects</h2>

        {/* Tabs */}
        <div className="cp-tabs" role="tablist" aria-label="Project categories">
          {TABS.map(tab => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              className={`cp-tab ${active === tab ? 'is-active' : ''}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Swiper carousel */}
        <Swiper
          className="cp-swiper"
          modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
          effect="coverflow"
          centeredSlides
          grabCursor
          keyboard={{ enabled: true }}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.6 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 24,
            stretch: 0,
            depth: 160,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {filtered.map(p => (
            <SwiperSlide key={p.id} aria-label={p.title}>
              <ProjectCard {...p} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Fallback for no-JS / SEO */}
        <noscript>
          <div className="cp-grid">
            {filtered.map(p => (
              <div key={p.id}>
                <ProjectCard {...p} />
              </div>
            ))}
          </div>
        </noscript>
      </Container>
    </section>
  );
};

export default Projects;
