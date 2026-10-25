import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { SitePage, Rail } from './SiteLayout';
import { detailedProjects } from '../data/site';
import './ProjectDetail.css';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

const ProjectDetail = () => {
  const { id } = useParams();
  const idx = detailedProjects.findIndex((x) => x.id === id);
  if (idx === -1) return <Navigate to="/projects" replace />;

  const p = detailedProjects[idx];
  const next = detailedProjects[(idx + 1) % detailedProjects.length];
  const orgLine = [p.org, p.role].filter(Boolean).join(' — ') || p.tags.slice(0, 3).join('  ·  ');
  const fit = /svg|cvd/.test(p.image) ? 'contain' : 'cover';
  const gallery = (p.gallery || []).slice(1);

  return (
    <SitePage className="project-page" key={p.id}>
      <Rail node="0" top={96} className="project-hero">
        <div className="project-intro">
          <Link to="/projects" className="project-back">← Projects</Link>
          <span className="eyebrow project-org">{orgLine}</span>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
        </div>
      </Rail>

      <Rail className="project-cover-section">
        <div className="project-cover" style={{ background: p.imgBg || '#e9e6de' }}>
          {p.video ? (
            <video src={p.video} poster={p.image} autoPlay loop muted playsInline controls />
          ) : (
            <img src={p.image} alt={p.title} style={{ objectFit: fit }} />
          )}
        </div>
      </Rail>

      <Rail node="1" className="project-overview">
        <div className="project-overview-grid">
          <div className="project-prose">
            <h2 className="h2">Overview</h2>
            {p.full.split('\n\n').map((para) => <p key={para.slice(0, 32)}>{para}</p>)}
          </div>
          <aside className="project-aside">
            <span className="project-aside-label">STACK</span>
            <div className="project-stack">
              {p.stack.map((s) => <span key={s}>{s}</span>)}
            </div>
            {p.demoUrl && <a href={p.demoUrl} {...ext} className="link-italic project-aside-link">View demo ↗</a>}
            {p.githubUrl && <a href={p.githubUrl} {...ext} className="link-italic project-aside-link">View on GitHub ↗</a>}
          </aside>
        </div>
      </Rail>

      <Rail node="2" className="project-facts">
        <div className="project-facts-grid">
          <div className="project-col">
            <h2 className="h3">Key features</h2>
            <ul className="project-features">
              {p.features.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <div className="project-col">
            <h2 className="h3">Results</h2>
            <div className="project-results">
              {p.results.map((r) => <div key={r}>{r}</div>)}
            </div>
          </div>
        </div>
      </Rail>

      {gallery.length > 0 && (
        <Rail node="3" className="project-gallery-section">
          <div className="project-col">
            <h2 className="h3">Gallery</h2>
            <div className="project-gallery">
              {gallery.map((g) => <img key={g} src={g} alt={`${p.title} — gallery`} loading="lazy" />)}
            </div>
          </div>
        </Rail>
      )}

      <Rail node="4" ghost="4.5" className="project-next-section">
        <Link to={next.href} className="project-next">
          <div>
            <span className="project-aside-label">NEXT PROJECT</span>
            <span className="project-next-title">{next.title}</span>
          </div>
          <span className="project-next-arrow">→</span>
        </Link>
      </Rail>
    </SitePage>
  );
};

export default ProjectDetail;
