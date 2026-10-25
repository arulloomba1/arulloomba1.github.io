import React from 'react';
import { SitePage, Rail, Node } from './SiteLayout';
import { apps } from '../data/site';
import './Apps.css';

const ext = { target: '_blank', rel: 'noopener noreferrer' };
const { behind, tally } = apps;

const Shot = ({ index, caption, children, className = '' }) => (
  <figure className={`app-shot ${className}`}>
    <div className="app-shot-frame">{children}</div>
    <figcaption>
      <span className="app-shot-num">{String(index + 1).padStart(2, '0')}</span>
      <span className="app-shot-caption">{caption}</span>
    </figcaption>
  </figure>
);

const Apps = () => (
  <SitePage className="apps-page">
    <Rail node="0" top={40} className="apps-hero">
      <h1 className="page-title">Apps</h1>
    </Rail>

    <section id="behind" className="apps-behind">
      <div className="behind-row">
        <div className="behind-text">
          <span className="eyebrow">{behind.platform}</span>
          <h2 className="app-title">{behind.name}</h2>
          <p className="app-question">{behind.question}</p>
          <p className="app-body">{behind.short}</p>
          <div className="app-actions">
            <a href={behind.appStore} {...ext} className="btn solid">Download on the App Store</a>
            <a href={behind.site} {...ext} className="btn">Website ↗</a>
          </div>
        </div>
        <Node id="1" className="behind-node" />
        <a href={behind.site} {...ext} className="behind-hero" aria-label="getbehind.app">
          <img src={behind.hero} alt="Behind — how behind are you?" />
        </a>
      </div>
      <Rail node="2" className="apps-shots-rail">
        <div className="app-shots">
          {behind.shots.map((s, i) => (
            <Shot key={s.src} index={i} caption={s.caption} className="shot-behind">
              <img src={s.src} alt={`Behind — ${s.caption}`} loading="lazy" />
            </Shot>
          ))}
        </div>
      </Rail>
    </section>

    <Rail node="3" ghost="3.5" id="tally" className="apps-tally">
      <div className="tally-stack">
        <div className="tally-row">
          <a href={tally.site} {...ext} className="tally-card">
            <span className="tally-card-url">tally.kitchen</span>
            <img src={tally.logo} alt="tally." className="tally-card-logo" />
          </a>
          <div className="tally-text">
            <span className="eyebrow">{tally.role}</span>
            <h2 className="app-title">{tally.name}</h2>
            <p className="app-question">{tally.tagline}</p>
            <p className="app-body">{tally.short}</p>
            <div className="app-actions">
              <a href={tally.site} {...ext} className="btn tally-btn">Visit tally.kitchen ↗</a>
            </div>
          </div>
        </div>
        <div className="app-shots">
          {tally.shots.map((s, i) => (
            <Shot key={s.src} index={i} caption={s.caption} className="shot-tally">
              <video src={s.src} poster={s.poster} autoPlay loop muted playsInline />
            </Shot>
          ))}
        </div>
        <figure className="tally-film">
          <video src={tally.film.src} poster={tally.film.poster} autoPlay loop muted playsInline />
          <figcaption>
            <span className="app-shot-num">04</span>
            <span className="app-shot-caption">From the launch film</span>
          </figcaption>
        </figure>
      </div>
    </Rail>
  </SitePage>
);

export default Apps;
