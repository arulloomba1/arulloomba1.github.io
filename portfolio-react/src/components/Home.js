import React from 'react';
import { Link } from 'react-router-dom';
import { SitePage, Node, Rail, FeatureRow } from './SiteLayout';
import { projects, apps } from '../data/site';
import './Home.css';

const featured = ['veevo', 'intuition', 'formula'].map((id) => projects.find((p) => p.id === id));

const ext = { target: '_blank', rel: 'noopener noreferrer' };

const appCards = [
  {
    ...apps.behind,
    key: 'behind',
    media: (
      <div className="app-media-phones">
        {apps.behind.shots.slice(0, 2).map((s) => (
          <img key={s.src} src={s.src} alt={`Behind — ${s.caption}`} loading="lazy" />
        ))}
      </div>
    ),
  },
  {
    ...apps.tally,
    key: 'tally',
    media: <video src={apps.tally.film.src} poster={apps.tally.film.poster} autoPlay loop muted playsInline />,
  },
];

const Home = () => (
  <SitePage className="home-page">
    <section className="home-hero">
      <h1>Arul<br /><i>Loomba</i></h1>
      <p>
        Building at the intersection of machine learning, robotics, and software engineering.
        UC Berkeley EECS. Founder{' '}
        <a href={apps.tally.site} {...ext} className="home-inline-link">@tally</a>
        {' '}— habit tracking app that charges you 50 cents every time you slip up and gives it to a friend. Researcher at BAIR.
      </p>
    </section>
    <div className="home-hero-gap"><Node id="0" className="home-node-start" /></div>

    <section className="feature-list">
      {featured.map((p, i) => (
        <FeatureRow key={p.id} project={p} index={i} node={i + 1} />
      ))}
    </section>

    <Rail node="10" ghost="10.5" className="home-apps">
      <div className="home-apps-body">
        <div className="head-row">
          <h2 className="h2">Also building</h2>
          <Link to="/apps" className="link-italic">All apps →</Link>
        </div>
        <div className="home-apps-grid">
          {appCards.map((app) => (
            <article key={app.key} className={`app-card app-card-${app.key}`}>
              <Link to={`/apps#${app.key}`} className="app-media" aria-label={app.name}>
                {app.media}
              </Link>
              <div className="app-info">
                <div className="app-id">
                  <img src={app.icon} alt="" className="app-icon" />
                  <div className="app-id-text">
                    <span className="app-card-name">{app.name}</span>
                    <span className="app-card-tagline">{app.tagline}</span>
                  </div>
                </div>
                <p className="app-card-blurb">{app.short}</p>
                <div className="app-links">
                  {app.appStore && <a href={app.appStore} {...ext} className="btn solid sm">App Store</a>}
                  <a href={app.site} {...ext} className="btn sm">{app.site.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Rail>
  </SitePage>
);

export default Home;
