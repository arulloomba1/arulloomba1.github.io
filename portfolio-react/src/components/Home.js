import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTrail, TrailSvg } from './trail';
import './Home.css';

const featuredProjects = [
  {
    id: 'veevo',
    title: 'CVD Survival Modeling Engine',
    org: 'Veevo Health',
    short: 'Deep learning survival analysis forecasting lifetime cardiovascular disease risk across 500K+ patient records.',
    image: '/project-images/cvd-calibration.png',
    imgBg: '#ffffff',
  },
  {
    id: 'intuition',
    title: 'Robotic Teleoperation & ML Platform',
    org: 'Intuition Core',
    short: 'End-to-end robotic teleoperation pipeline with ML integration, operating in 5+ locations across SF and Berkeley.',
    image: '/project-images/mae--002.png',
    video: '/videos/IMG 3778 from CloudConvert.mp4',
  },
  {
    id: 'formula',
    title: 'Self-Driving Formula Race Car',
    org: 'Formula Electric at Berkeley',
    short: "Led 50+ engineers designing Berkeley's first fully autonomous electric race car with ROS and LiDAR perception.",
    image: '/project-images/formula-car-1.jpg',
  },
];

const apps = [
  {
    name: 'Behind',
    href: 'https://getbehind.app',
    blurb: 'eight scores. one card. see where you stand against everyone born your year.',
    icon: <div className="app-icon app-icon-behind">behind</div>,
  },
  {
    name: 'Tally',
    href: 'https://www.tally.kitchen/',
    blurb: 'Habit tracking app that charges you 50 cents every time you slip up and gives it to a friend.',
    icon: <div className="app-icon app-icon-tally">tally<span>.</span></div>,
  },
];

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/robotics', label: 'Robotics' },
  { path: '/terminal', label: 'Terminal' },
];

const Home = () => {
  const rootRef = useRef(null);
  const { trail, refs } = useTrail(rootRef);

  return (
    <div className="home-page">
      <div className="home-root" ref={rootRef}>
        <TrailSvg trail={trail} refs={refs} />

        <header className="home-header">
          <Link to="/" className="home-logo">Arul Loomba</Link>
          <nav className="home-nav">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={item.path === '/' ? 'active' : ''}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <section className="home-hero">
          <h1>Arul<br /><i>Loomba</i></h1>
          <p>
            Building at the intersection of machine learning, robotics, and software engineering.
            UC Berkeley EECS. Founder{' '}
            <a href="https://www.tally.kitchen/" target="_blank" rel="noopener noreferrer" className="home-inline-link">@tally</a>
            {' '}— habit tracking app that charges you 50 cents every time you slip up and gives it to a friend. Researcher at BAIR.
          </p>
        </section>
        <div className="home-hero-gap"><div data-node="0" className="node home-node-start" /></div>

        <section className="home-featured">
          {featuredProjects.map((p, i) => {
            const left = i % 2 === 0;
            return (
              <div key={p.id} className={`featured-row ${left ? 'text-left' : 'text-right'}`}>
                <div className="featured-text">
                  <span className="featured-org">{p.org}</span>
                  <h3>{p.title}</h3>
                  <p>{p.short}</p>
                  <Link to={`/projects/${p.id}`} className="home-more">Read more →</Link>
                </div>
                <div data-node={i + 1} className="node featured-node" />
                <Link to={`/projects/${p.id}`} className="featured-media" style={{ background: p.imgBg || '#e9e6de' }}>
                  {p.video ? (
                    <video src={p.video} poster={p.image} autoPlay loop muted playsInline />
                  ) : (
                    <img src={p.image} alt={p.title} />
                  )}
                </Link>
              </div>
            );
          })}
        </section>

        <section className="home-apps">
          <div className="home-apps-rail">
            <div data-node="10" className="node home-apps-node" />
            <div data-node="10.5" className="node home-apps-ghost" />
          </div>
          <div className="home-apps-body">
            <div className="home-apps-head">
              <h2>Also building</h2>
            </div>
            <div className="home-apps-grid">
              {apps.map((app) => (
                <a key={app.name} href={app.href} target="_blank" rel="noopener noreferrer" className="app-card">
                  {app.icon}
                  <div className="app-card-text">
                    <span className="app-card-name">{app.name}</span>
                    <span className="app-card-blurb">{app.blurb}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="home-footer">
          <div data-node="99" className="node" />
          <a href="mailto:arulloomba@berkeley.edu" className="home-email">arulloomba@berkeley.edu</a>
          <div className="home-footer-links">
            <a href="https://github.com/arulloomba1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/arul-loomba/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/resume1.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <Link to="/terminal">Terminal</Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
