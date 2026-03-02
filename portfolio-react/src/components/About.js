import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const About = () => {
  const experience = [
    {
      role: 'Founding ML Engineer',
      company: 'Veevo Health',
      location: 'San Francisco, CA',
      period: 'Sep 2025 - Present',
      points: [
        'Built nonlinear survival modeling engine combining Fine-Gray competing-risk analysis with Cox-Time and Transformer architectures to forecast lifetime CVD risk across 500K+ longitudinal patient records, improving model fit by 18% in log-likelihood.',
        'Designed dual-head network for CVD vs non-CVD mortality trained on 100K+ patient-years, achieving 0.07 C-index gain and 25% lower Brier score.',
        'Built real-time evaluation suite for confidence-aware predictions, reducing per-patient uncertainty by 40%.',
      ],
    },
    {
      role: 'Undergraduate Research Assistant',
      company: 'Berkeley Artificial Intelligence Research (BAIR)',
      location: 'Berkeley, CA',
      period: 'Jan 2025 - Present',
      points: [
        'Built and deployed low-cost robotic arm platform for human-assistive tasks; collected and annotated 200+ real-world episodes for feed-a-person task.',
        'Trained Action Chunking Transformer (ACT) imitation learning policy using HuggingFace datasets and Vision-Language-Action (VLA) models.',
        'Implemented diffusion-based trajectory stitching algorithm with segment-level success extrapolation, transforming sparse rewards into dense signals.',
        'Leveraged curiosity-driven RL to improve task diversity, increasing success rate by ~50% in unstructured environments.',
      ],
    },
    {
      role: 'Founding Engineer',
      company: 'Intuition Core',
      location: 'San Francisco, CA',
      period: 'May 2025 - Sep 2025',
      points: [
        'Developed remote robotic teleoperation pipeline with ML integration, operating in 5+ restaurants, hotels, and laundromats across SF and Berkeley.',
        'Designed and configured 15+ robot arms (I2RT, ARX Robotics, AgileX) for seamless data collection, RL/IL, and fine-tuning.',
        'Created full-stack application using Supabase, React Native, and Tauri for MacOS deployment.',
        'Collected 10,000+ robotic episodes and trained \u03C00 policy on Piper and ARX x5 robot arms for long-horizon tasks.',
        'Aided founders in raising $2.4M at $24M valuation from Founders Fund by developing first ML MVP product.',
      ],
    },
    {
      role: 'Autonomous Software Lead',
      company: 'Formula Electric at Berkeley',
      location: 'Berkeley, CA',
      period: 'Aug 2023 - Present',
      points: [
        'Led 50+ student engineers designing Berkeley\'s first fully self-driving Formula electric race car on a ~$30K EV platform.',
        'Oversaw ROS pipelines with 25+ nodes, 4,000+ lines of C++ code, and live simulation infrastructure.',
        'Developed trajectory planning with SLAM-based mapping, modeling 300+ driving paths; achieved sub-15cm RMS error with GraphSLAM.',
        'Improved real-time processing throughput by ~24% through optimized sensor fusion pipelines.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Antrix',
      location: 'San Jose, CA',
      period: 'Aug 2024 - Jan 2025',
      points: [
        'Trained and fine-tuned 7+ foundational models using Microsoft Autogen, Amazon Bedrock, and Dialogflow with LLM integration.',
        'Designed IRIS AI Agent for processing regulatory data from OpenFDA and EUDAMED APIs, analyzing 1M+ data points.',
        'Automated ISO 13485 and ISO 62304 compliance documentation using PyTorch and Scikit-learn.',
      ],
    },
    {
      role: 'Teaching Assistant, EECS 16A',
      company: 'UC Berkeley',
      location: 'Berkeley, CA',
      period: 'Jan 2024 - Jan 2025',
      points: [
        'Guided 40+ students on hands-on projects including song fingerprinting and miniature projector design.',
        'Designed 30+ interactive lesson plans covering data visualization, probability, and applied ML.',
        'Coordinated design competitions engaging 900+ incoming students.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Sound Scope',
      location: 'Berkeley, CA',
      period: 'May 2024 - Aug 2024',
      points: [
        'Converted Figma designs into functional React Native UI components with MongoDB backend integration.',
        'Developed behavioral intelligence model using ML algorithms for artist development platform.',
      ],
    },
    {
      role: 'VP of Development',
      company: 'SBC Strategy Consulting',
      location: 'Berkeley, CA',
      period: 'Jan 2024 - Present',
      points: [
        'Led strategy consulting for clients including Sweetgreen ($1.3B), Reddit, Atlassian, and Fabletics.',
        'Conducted primary research on 300+ survey responses and 10-20 focus groups per engagement.',
        'Developed activation strategies boosting client engagement by 20%+ across multiple campaigns.',
      ],
    },
  ];

  const skills = {
    'Languages': ['Python', 'Java', 'JavaScript', 'C/C++', 'Assembly', 'SQL', 'HTML/CSS', 'Verilog'],
    'ML & AI': ['PyTorch', 'TensorFlow', 'Transformers', 'Imitation Learning', 'Reinforcement Learning', 'CUDA', 'Weights & Biases'],
    'Robotics': ['ROS', 'MuJoCo', 'HuggingFace LeRobot', 'Inverse Kinematics', 'LiDAR', 'SLAM'],
    'Full-Stack': ['React', 'React Native', 'Node.js', 'Supabase', 'FastAPI', 'MongoDB', 'Tauri'],
    'Cloud & DevOps': ['AWS', 'Azure', 'GCP', 'Docker', 'CI/CD', 'Linux/Unix'],
  };

  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about-hero">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            About
          </motion.h1>
          <motion.p
            className="about-bio"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            I'm a software engineer and robotics researcher at UC Berkeley studying EECS.
            I build systems that sit at the intersection of machine learning, robotics, and
            production software — from survival models predicting cardiovascular risk to
            autonomous race cars and robotic teleoperation platforms deployed in the real world.
          </motion.p>
          <motion.div
            className="about-stats"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <div className="stat">
              <span className="stat-value">4x</span>
              <span className="stat-label">Dean's List</span>
            </div>
            <div className="stat">
              <span className="stat-value">UC Berkeley</span>
              <span className="stat-label">EECS</span>
            </div>
            <div className="stat">
              <span className="stat-value">2nd Place</span>
              <span className="stat-label">MOOC AI Hackathon 2025</span>
            </div>
          </motion.div>
        </section>

        <section className="about-section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>
          <div className="timeline">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="timeline-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="timeline-points">
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <h3>{category}</h3>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
