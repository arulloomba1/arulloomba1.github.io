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
    tagline: 'see where you actually rank',
    blurb: 'Ranks you against everyone your exact age and gender, worldwide, on six things — privilege, mog, popularity, lore, bag and brainrot — then tells you plainly how far ahead or behind you are.',
    icon: '/apps/behind-icon.png',
    site: { href: 'https://getbehind.app', label: 'getbehind.app' },
    appStore: 'https://apps.apple.com/us/app/behind-self-improvement-coach/id6814665658',
    media: (
      <div className="app-media-phones">
        <img src="/apps/behind-03-reveal-overall.jpg" alt="Behind overall rank reveal" loading="lazy" />
        <img src="/apps/behind-02-card-pro.jpg" alt="Behind score card" loading="lazy" />
      </div>
    ),
  },
  {
    name: 'Tally',
    tagline: 'bet on yourself.',
    blurb: 'The habit tracker that charges you every time you slip up — and gives it to a friend. Put money on the line, prove it with a photo, and let the feed close the loop.',
    icon: '/apps/tally-icon.png',
    site: { href: 'https://www.tally.kitchen/', label: 'tally.kitchen' },
    media: (
      <video src="/apps/tally-launch.mp4" poster="/apps/tally-launch-poster.jpg" autoPlay loop muted playsInline />
    ),
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
                <article key={app.name} className={`app-card app-card-${app.name.toLowerCase()}`}>
                  <a href={app.site.href} target="_blank" rel="noopener noreferrer" className="app-media" aria-label={app.name}>
                    {app.media}
                  </a>
                  <div className="app-info">
                    <div className="app-id">
                      <img src={app.icon} alt="" className="app-icon" />
                      <div className="app-id-text">
                        <span className="app-card-name">{app.name}</span>
                        <span className="app-card-tagline">{app.tagline}</span>
                      </div>
                    </div>
                    <p className="app-card-blurb">{app.blurb}</p>
                    <div className="app-links">
                      {app.appStore && (
                        <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="app-pill app-pill-solid">App Store</a>
                      )}
                      <a href={app.site.href} target="_blank" rel="noopener noreferrer" className="app-pill">{app.site.label} ↗</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="home-footer">
          <div data-node="99" className="node" />
          <a href="mailto:arulloomba@gmail.com" className="home-email">arulloomba@gmail.com</a>
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
