import React, { useState } from 'react';
import { SitePage, Rail, Node, FeatureRow, PillToggle, SmartLink } from './SiteLayout';
import { projects, projectCategories } from '../data/site';
import './Projects.css';

const tagLine = (p, n) => p.tags.slice(0, n).join('  ·  ');

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const list = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const stars = list.filter((p) => p.star);
  const others = list.filter((p) => !p.star);

  return (
    <SitePage className="projects-page">
      <Rail node="0" top={40} className="projects-hero">
        <div className="projects-intro">
          <h1 className="page-title">Projects</h1>
          <p className="page-lede">A collection of work spanning machine learning, robotics, systems, and software engineering.</p>
          <PillToggle options={projectCategories} value={filter} onChange={setFilter} />
        </div>
      </Rail>
      <div className="projects-gap" />

      {stars.length > 0 && (
        <section className="feature-list">
          {stars.map((p, i) => (
            <FeatureRow key={p.id} project={p} index={i} node={i + 1} tagLine={tagLine(p, 4)} />
          ))}
        </section>
      )}

      <section className={`rail projects-more ${stars.length ? 'after-stars' : ''}`}>
        {stars.length > 0 && <Node id="49.5" className="projects-more-bend" />}
        <div className="rail-lane">
          <Node id="50" className="rail-node" style={{ marginTop: 22 }} />
          <Node id="50.5" className="rail-ghost" />
        </div>
        <div className="rail-body projects-more-body">
          <h2 className="h2">More projects</h2>
          {others.length ? (
            <div className="project-grid">
              {others.map((q) => (
                <SmartLink key={q.id} href={q.href} className="project-card">
                  <div className="project-card-media" style={{ background: q.image ? (q.imgBg || '#e9e6de') : 'var(--mint)' }}>
                    {q.image ? (
                      <img src={q.image} alt={q.title} loading="lazy" />
                    ) : (
                      <span className="project-card-tags">{tagLine(q, 3)}</span>
                    )}
                  </div>
                  <div className="project-card-title">
                    <span>{q.title}</span>
                    <span className="project-card-arrow">{q.external ? '↗' : '→'}</span>
                  </div>
                  <p>{q.short}</p>
                </SmartLink>
              ))}
            </div>
          ) : (
            <p className="page-lede">Everything in this category is featured above.</p>
          )}
        </div>
      </section>
    </SitePage>
  );
};

export default Projects;
