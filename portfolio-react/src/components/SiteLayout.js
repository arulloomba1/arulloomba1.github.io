import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTrail, TrailSvg } from './trail';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../data/site';
import './Site.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/apps', label: 'Apps' },
  { path: '/robotics', label: 'Robotics' },
  { path: '/terminal', label: 'Terminal' },
];

const ext = { target: '_blank', rel: 'noopener noreferrer' };

// A waypoint the trail passes through. Ids sort numerically; ids with a
// decimal are "ghost" points that bend the path without drawing a stop.
export const Node = ({ id, className = '', style }) => (
  <div data-node={id} className={`node ${className}`} style={style} />
);

// Left 200px lane that carries the trail beside a section's content.
export const Rail = ({ node, top = 22, ghost, children, className = '', ...rest }) => (
  <section className={`rail ${className}`} {...rest}>
    <div className="rail-lane">
      {node !== undefined && <Node id={node} className="rail-node" style={{ marginTop: top }} />}
      {ghost !== undefined && <Node id={ghost} className="rail-ghost" />}
    </div>
    <div className="rail-body">{children}</div>
  </section>
);

// Internal routes use the router; everything else opens in a new tab.
export const SmartLink = ({ href, children, ...rest }) =>
  href.startsWith('/') && !href.endsWith('.pdf') ? (
    <Link to={href} {...rest}>{children}</Link>
  ) : (
    <a href={href} {...ext} {...rest}>{children}</a>
  );

export const PillToggle = ({ options, value, onChange }) => (
  <div className="pill-row">
    {options.map(([key, label]) => (
      <button
        key={key}
        type="button"
        className={`pill-toggle ${key === value ? 'is-active' : ''}`}
        onClick={() => onChange(key)}
      >
        {label}
      </button>
    ))}
  </div>
);

// Alternating text / media row with a trail stop in the middle lane.
export const FeatureRow = ({ project: p, index, node, tagLine }) => {
  const textFirst = index % 2 === 0;
  return (
    <div className={`feature-row ${textFirst ? 'text-left' : 'text-right'}`}>
      <div className="feature-text">
        <span className="eyebrow">{p.org}</span>
        <h3>{p.title}</h3>
        <p>{p.short}</p>
        {tagLine && <span className="feature-tags">{tagLine}</span>}
        <SmartLink href={p.href} className="link-italic">Read more →</SmartLink>
      </div>
      <Node id={node} className="feature-node" />
      <SmartLink href={p.href} className="feature-media" style={{ background: p.imgBg || '#e9e6de' }}>
        {p.video ? (
          <video src={p.video} poster={p.image} autoPlay loop muted playsInline />
        ) : (
          <img src={p.image} alt={p.title} />
        )}
      </SmartLink>
    </div>
  );
};

const SiteHeader = () => (
  <header className="site-header">
    <Link to="/" className="site-logo">Arul Loomba</Link>
    <nav className="site-nav">
      {navItems.map((item) => (
        <NavLink key={item.path} to={item.path} end={item.path === '/'}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  </header>
);

const SiteFooter = ({ showTerminalLink, compact }) => (
  <footer className={`site-footer ${compact ? 'compact' : ''}`}>
    <Node id="99" />
    <a href={`mailto:${EMAIL}`} className="site-email">{EMAIL}</a>
    <div className="site-footer-links">
      <a href={GITHUB_URL} {...ext}>GitHub</a>
      <a href={LINKEDIN_URL} {...ext}>LinkedIn</a>
      <a href={RESUME_URL} {...ext}>Resume</a>
      {showTerminalLink && <Link to="/terminal">Terminal</Link>}
    </div>
  </footer>
);

export const SitePage = ({ className = '', children, showTerminalLink = true, compactFooter = false }) => {
  const rootRef = useRef(null);
  const { trail, refs } = useTrail(rootRef);
  return (
    <div className={`site-page ${className}`}>
      <div className="site-root" ref={rootRef}>
        <TrailSvg trail={trail} refs={refs} />
        <SiteHeader />
        {children}
        <SiteFooter showTerminalLink={showTerminalLink} compact={compactFooter} />
      </div>
    </div>
  );
};
