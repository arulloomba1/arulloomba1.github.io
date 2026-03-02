import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Home = () => {
  const featuredProjects = [
    {
      id: 'veevo',
      title: 'CVD Survival Modeling Engine',
      tag: 'Veevo Health',
      description: 'Deep learning survival analysis forecasting lifetime cardiovascular disease risk across 500K+ patient records.',
      image: '/project-images/cvd-calibration.png',
    },
    {
      id: 'intuition',
      title: 'Robotic Teleoperation & ML Platform',
      tag: 'Intuition Core',
      description: 'End-to-end robotic teleoperation pipeline with ML integration, operating in 5+ locations across SF and Berkeley.',
      video: '/videos/IMG 3778 from CloudConvert.mp4',
      image: '/project-images/mae--002.png',
    },
    {
      id: 'formula',
      title: 'Self-Driving Formula Race Car',
      tag: 'Formula Electric at Berkeley',
      description: 'Led 50+ engineers designing Berkeley\'s first fully autonomous electric race car with ROS and LiDAR perception.',
      image: '/project-images/formula-car-1.jpg',
    },
  ];

  const pillars = [
    { title: 'Machine Learning', description: 'Survival analysis, imitation learning, transformers, diffusion models', icon: '01' },
    { title: 'Robotics', description: 'Teleoperation, robot arms, autonomous vehicles, ROS pipelines', icon: '02' },
    { title: 'Full-Stack', description: 'React Native, Supabase, Docker, Tauri, cloud deployment', icon: '03' },
    { title: 'Systems', description: 'RISC-V, FPGA, embedded C, sensor fusion, real-time processing', icon: '04' },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="badge-dot" />
            Founder, Software Engineer & Robotics Researcher
          </motion.div>
          <motion.h1
            className="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Arul Loomba
          </motion.h1>
          <motion.p
            className="hero-description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Building at the intersection of machine learning, robotics, and software engineering.
            UC Berkeley EECS. Founder <a href="https://www.tally.kitchen/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-accent)'}}>@tally</a> — habit tracking app that charges you 50 cents every time you slip up and gives it to a friend. Researcher at BAIR.
          </motion.p>
          <motion.div
            className="hero-links"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Link to="/projects" className="hero-btn primary">
              View Projects
              <span className="btn-arrow">&rarr;</span>
            </Link>
            <Link to="/about" className="hero-btn secondary">About Me</Link>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.h2>
          <div className="pillars-grid">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="pillar-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="pillar-number">{pillar.icon}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <Link to="/projects" className="section-link">View all &rarr;</Link>
          </motion.div>
          <div className="featured-grid">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/projects/${project.id}`} className="featured-card">
                  <div className="featured-image-slot">
                    {project.video ? (
                      <video src={project.video} autoPlay loop muted playsInline style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    ) : (
                      <img src={project.image} alt={project.title} loading="lazy" />
                    )}
                    <div className="featured-image-overlay" />
                  </div>
                  <div className="featured-info">
                    <span className="featured-tag">{project.tag}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
