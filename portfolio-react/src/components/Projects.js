import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    // Star Projects
    {
      id: 'veevo',
      title: 'CVD Survival Modeling Engine',
      description: 'Deep learning survival analysis combining Fine-Gray competing-risk with Cox-Time and Transformer architectures, forecasting lifetime cardiovascular disease risk across 500K+ patient records.',
      tags: ['Python', 'PyTorch', 'Pycox', 'Survival Analysis'],
      category: 'ml',
      star: true,
      org: 'Veevo Health',
      image: '/project-images/cvd-calibration.png',
    },
    {
      id: 'intuition',
      title: 'Robotic Teleoperation & ML Platform',
      description: 'End-to-end robotic teleoperation pipeline with ML integration operating in 5+ real-world locations. Includes 3-encoder Video MAE, MLP policy heads, and pi0 training on 10K+ episodes.',
      tags: ['Python', 'PyTorch', 'React Native', 'Supabase', 'Docker', 'MuJoCo'],
      category: 'robotics',
      star: true,
      org: 'Intuition Core',
      demoUrl: 'https://intuition.dev/research/world-model-fashion',
      video: '/videos/IMG 3778 from CloudConvert.mp4',
      image: '/project-images/mae--002.png',
    },
    {
      id: 'bair',
      title: 'Robotic Arm Imitation Learning',
      description: 'Low-cost robotic arm platform for human-assistive tasks with ACT imitation learning, diffusion-based trajectory stitching, and curiosity-driven RL achieving ~50% success rate improvement.',
      tags: ['Python', 'PyTorch', 'HuggingFace', 'VLA', 'Diffusion Models'],
      category: 'robotics',
      star: true,
      org: 'BAIR',
      image: '/project-images/mae--006.png',
    },
    {
      id: 'formula',
      title: 'Self-Driving Formula Race Car',
      description: 'Led 50+ engineers building Berkeley\'s first fully autonomous electric race car. ROS pipelines, LiDAR perception with GraphSLAM (sub-15cm RMS), and trajectory planning across 300+ paths.',
      tags: ['C++', 'Python', 'ROS', 'LiDAR', 'PyTorch', 'SLAM'],
      category: 'robotics',
      star: true,
      org: 'Formula Electric at Berkeley',
      image: '/project-images/feb-team-2.jpg',
    },
    // Engineering Projects
    {
      id: 1,
      title: 'Voice Recognition & Object Detection',
      description: 'YOLO-v8 object detection for 250+ objects combined with FPGA-based voice synthesis for an integrated conferencing application.',
      tags: ['Python', 'TensorFlow', 'Verilog', 'FPGA'],
      category: 'ml',
      image: '/project-images/yolo-detection.jpg',
    },
    {
      id: 3,
      title: 'MAE Encoder Pipeline',
      description: 'Triple-stream Masked Autoencoder for visual and proprioceptive data. Processed 500+GB training data with CUDA batch parallelization.',
      tags: ['PyTorch', 'OpenCV', 'CUDA', 'Weights & Biases'],
      category: 'ml',
      demoUrl: 'https://intuition.dev/research/world-model-fashion',
      image: '/project-images/s1xt33n-car.jpg',
    },
    {
      id: 2,
      title: 'RISC-V Neural Network',
      description: 'Neural network at the assembly level with matrix multiplication, ReLU, and 10+ cache levels on RISC-V architecture for stock market analysis.',
      tags: ['C', 'C++', 'Assembly', 'RISC-V'],
      category: 'systems',
      image: '/project-images/riscv-pipeline.svg',
    },
    {
      id: 4,
      title: 'MuJoCo Simulator Robot Arm',
      description: 'Robot arm simulation and data collection system supporting SO100, Franka, and Arx with inverse kinematics. Collected 5+ hours of task data.',
      tags: ['MuJoCo', 'Python', 'HuggingFace', 'PyArrow'],
      category: 'robotics',
      githubUrl: 'https://github.com/arulloomba1/mujoco_data_collector',
      image: '/project-images/real-and-sim.gif',
    },
    {
      id: 6,
      title: 'S1XT33N Voice-Controlled Robot Car',
      description: 'Autonomous vehicle with PCA-based voice classification, custom motor controllers, and PWM regulation for 4+ voice commands.',
      tags: ['Arduino', 'Embedded C', 'PCA', 'Signal Processing'],
      category: 'robotics',
      image: '/project-images/s1xt33n-actual.jpg',
    },
    // Software & Games
    {
      id: 5,
      title: 'Snek Game',
      description: '1000+ lines of C/C++ with 30+ snake characters, 75+ modular map layouts, and cross-platform JavaScript UI.',
      tags: ['C/C++', 'OpenGL', 'Docker'],
      category: 'software',
      image: '/project-images/snek-game.png',
    },
    {
      id: 'scheme',
      title: 'Scheme Interpreter',
      description: 'Full interpreter for the Scheme programming language built in Python, implementing lexing, parsing, and evaluation.',
      tags: ['Python', 'Interpreters', 'Functional Programming'],
      category: 'systems',
      githubUrl: 'https://github.com/arulloomba1/Scheme-Interpreter',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910auj3?w=400&h=240&fit=crop',
    },
    {
      id: 'maze',
      title: 'World Maze Generator',
      description: 'Interactive maze generation application with multiple algorithms and real-time visualization.',
      tags: ['Java', 'Algorithms', 'Graph Theory'],
      category: 'software',
      githubUrl: 'https://github.com/arulloomba1/World-Maze-Generator-Interactive',
      image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=240&fit=crop',
    },
    {
      id: 'ant',
      title: 'Ant Boardgame',
      description: 'Strategy board game simulation with ant-themed gameplay mechanics built in Python.',
      tags: ['Python', 'Game Design', 'OOP'],
      category: 'software',
      githubUrl: 'https://github.com/arulloomba1/Ant-Boardgame',
      image: '/project-images/ants-game.png',
    },
    {
      id: 'expense',
      title: 'ML Expense Categorizer',
      description: 'Machine learning system for automatic expense categorization and financial data analysis.',
      tags: ['JavaScript', 'Machine Learning'],
      category: 'ml',
      githubUrl: 'https://github.com/arulloomba1/ml_expense_categorizer',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop',
    },
    {
      id: 'text',
      title: 'Text Extracter',
      description: 'Resume and job description comparison tool using NLP for matching and analysis.',
      tags: ['Python', 'NLP'],
      category: 'ml',
      githubUrl: 'https://github.com/arulloomba1/text_extracter',
      image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=400&h=240&fit=crop',
    },
    {
      id: 'geo',
      title: 'Geo-Network Simulation',
      description: 'Geographic network simulation framework for modeling and analyzing spatial networks.',
      tags: ['Python', 'Simulation', 'Networks'],
      category: 'systems',
      githubUrl: 'https://github.com/arulloomba1/Geo-Network-Simulation',
      image: '/project-images/geo-network.png',
    },
    {
      id: 'writing',
      title: 'Writing Enhancer',
      description: 'AI-powered writing improvement tool for grammar, style, and clarity enhancement.',
      tags: ['JavaScript', 'NLP'],
      category: 'software',
      githubUrl: 'https://github.com/arulloomba1/writing-enhancer',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=240&fit=crop',
    },
    {
      id: 'aigym',
      title: 'AI Gym',
      description: 'AI training environment for experimenting with reinforcement learning agents.',
      tags: ['TypeScript', 'RL', 'Environments'],
      category: 'ml',
      githubUrl: 'https://github.com/arulloomba1/ai-gym',
      image: '/project-images/lunar-lander.gif',
    },
  ];

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'ml', label: 'ML & AI' },
    { key: 'robotics', label: 'Robotics' },
    { key: 'systems', label: 'Systems' },
    { key: 'software', label: 'Software' },
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const starProjects = filtered.filter(p => p.star);
  const otherProjects = filtered.filter(p => !p.star);

  return (
    <div className="projects-page">
      <div className="projects-container">
        <motion.div
          className="projects-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Projects</h1>
          <p>A collection of work spanning machine learning, robotics, systems, and software engineering.</p>
        </motion.div>

        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {starProjects.length > 0 && (
          <div className="projects-section">
            <div className="star-grid">
              {starProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link to={`/projects/${project.id}`} className="project-card star">
                    <div className="card-image-slot">
                      {project.video ? (
                        <>
                          <video src={project.video} autoPlay loop muted playsInline style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                          <div className="card-image-overlay" />
                        </>
                      ) : project.image ? (
                        <>
                          <img src={project.image} alt={project.title} loading="lazy" />
                          <div className="card-image-overlay" />
                        </>
                      ) : (
                        <span className="image-placeholder-text">Image coming soon</span>
                      )}
                    </div>
                    <div className="card-content">
                      {project.org && <span className="card-org">{project.org}</span>}
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="card-tags">
                        {project.tags.slice(0, 4).map(tag => (
                          <span key={tag} className="card-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="projects-section">
            {starProjects.length > 0 && <h2 className="section-label">More Projects</h2>}
            <div className="other-grid">
              {otherProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (starProjects.length + i) * 0.05 }}
                >
                  {project.githubUrl || project.demoUrl ? (
                    <a
                      href={project.githubUrl || project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card other-card"
                    >
                      {project.image && (
                        <div className="other-card-image">
                          <img src={project.image} alt={project.title} loading="lazy" />
                        </div>
                      )}
                      <div className="card-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="card-tags">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="card-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <span className="card-arrow">&rarr;</span>
                    </a>
                  ) : (
                    <Link to={`/projects/${project.id}`} className="project-card other-card">
                      {project.image && (
                        <div className="other-card-image">
                          <img src={project.image} alt={project.title} loading="lazy" />
                        </div>
                      )}
                      <div className="card-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="card-tags">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="card-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <span className="card-arrow">&rarr;</span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
