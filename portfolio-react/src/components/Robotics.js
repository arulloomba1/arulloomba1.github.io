import React, { useState } from 'react';
import { SitePage, Rail, PillToggle } from './SiteLayout';
import { videos } from '../data/site';
import './Robotics.css';

const tabs = [
  ['all', 'All'],
  ['Arm', 'Arm experiments'],
  ['MAE', 'MAE visualizations'],
];

const Robotics = () => {
  const [tab, setTab] = useState('all');
  const shown = videos.filter((v) => tab === 'all' || v.group === tab);

  return (
    <SitePage className="robotics-page">
      <Rail node="0" top={40} className="robotics-hero">
        <div className="robotics-intro">
          <h1 className="page-title">Robotics</h1>
          <p className="page-lede">A portfolio of experiments, progress, and research in robotic manipulation and control.</p>
          <PillToggle options={tabs} value={tab} onChange={setTab} />
        </div>
      </Rail>

      <Rail node="1" top={0} ghost="1.5" className="robotics-videos">
        <div className="video-grid">
          {shown.map((v, i) => (
            <figure key={v.id} className={`video-tile ${i % 7 === 0 ? 'wide' : ''}`}>
              <div className="video-frame">
                <video controls muted playsInline preload="metadata" src={v.src} />
              </div>
              <figcaption>
                <span className="video-title">{v.title}</span>
                <span className="video-num">{String(i + 1).padStart(2, '0')}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Rail>
    </SitePage>
  );
};

export default Robotics;
