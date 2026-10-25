import React, { useState } from 'react';
import { SitePage, Rail } from './SiteLayout';
import { experience, skills, awards, RESUME_URL } from '../data/site';
import './About.css';

const stats = [
  { value: '4x', label: "Dean's List" },
  { value: 'UC Berkeley', label: 'EECS' },
  { value: '2nd Place', label: 'MOOC AI Hackathon 2025' },
];

const About = () => {
  const [open, setOpen] = useState(0);

  return (
    <SitePage className="about-page">
      <Rail node="0" top={40} className="about-hero">
        <div className="about-hero-grid">
          <div className="about-intro">
            <h1 className="page-title">About</h1>
            <p>
              I'm a software engineer and robotics researcher at UC Berkeley studying EECS. I build systems that sit at the
              intersection of machine learning, robotics, and production software — from survival models predicting
              cardiovascular risk to autonomous race cars and robotic teleoperation platforms deployed in the real world.
            </p>
          </div>
          <img src="/photos/IMG 2273.jpg" alt="Arul Loomba" className="about-portrait" />
        </div>
      </Rail>

      <Rail className="about-stats-section">
        <div className="about-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </Rail>

      <Rail node="1" top={30} className="about-experience">
        <div className="about-stack">
          <div className="head-row">
            <h2 className="h2 lg">Experience</h2>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="link-italic about-resume">Download resume ↓</a>
          </div>
          <div className="xp-list">
            {experience.map((e, i) => {
              const isOpen = open === i;
              return (
                <div key={e.role + e.company} className={`xp-item ${isOpen ? 'is-open' : ''}`}>
                  <button type="button" className="xp-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span className="xp-period">{e.period}</span>
                    <span className="xp-role">{e.role}</span>
                    <span className="xp-company">{e.company}</span>
                    <span className="xp-sign">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="xp-body">
                      <span className="xp-location">{e.location}</span>
                      <ul>
                        {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Rail>

      <Rail node="2" ghost="2.5" className="about-more">
        <div className="about-two-col">
          <div className="about-stack-sm">
            <h2 className="h2">Skills</h2>
            <div className="skill-list">
              {skills.map((s) => (
                <div key={s.name} className="skill-item">
                  <span className="eyebrow">{s.name}</span>
                  <span>{s.items}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-stack-sm">
            <h2 className="h2">Awards</h2>
            <div className="award-list">
              {awards.map((a) => (
                <div key={a.title} className="award-card">
                  <span className="award-title">{a.title}</span>
                  <span className="award-meta">{a.meta}</span>
                </div>
              ))}
            </div>
            <img src="/photos/IMG_8922.jpg" alt="" className="about-candid" />
          </div>
        </div>
      </Rail>
    </SitePage>
  );
};

export default About;
