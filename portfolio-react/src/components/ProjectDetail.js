import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = {
    veevo: {
      title: 'CVD Survival Modeling Engine',
      org: 'Veevo Health — Founding ML Engineer',
      description: 'An advanced nonlinear survival modeling engine that combines Fine-Gray competing-risk analysis with deep architectures to forecast lifetime cardiovascular disease risk.',
      fullDescription: `At Veevo Health, I built a survival modeling engine from the ground up to predict lifetime cardiovascular disease risk across 500,000+ longitudinal patient records. The system combines traditional biostatistical methods (Fine-Gray competing-risk analysis) with modern deep learning architectures including Cox-Time and Transformer models.

A key technical challenge was handling left truncation — our dataset was entirely left-truncated since individuals only entered the study after surviving to a certain age. This required carefully adjusting loss functions to condition on survival to entry time, avoiding the selection bias that would otherwise overestimate survival.

I designed a dual-head network architecture for CVD versus non-CVD mortality, trained on more than 100,000 patient-years of data. This architecture achieved a 0.07 gain in C-index and 25% lower Brier score compared to baseline models, enabling individualized lifetime risk trajectories. The system also incorporates Inverse Probability of Censoring weighting (IPS) for handling informative censoring in discrete-time survival models.

I also built a real-time evaluation suite with confidence-aware predictions, reducing per-patient uncertainty by 40%. This involved careful consideration of discrete vs continuous time modeling — using discrete-time models when event times are naturally binned (e.g., 6-month follow-ups) and continuous-time models for finer-grained predictions.`,
      features: [
        'Fine-Gray competing-risk analysis combined with Cox-Time and Transformer architectures',
        'Dual-head network for CVD vs non-CVD mortality on 100K+ patient-years',
        '0.07 C-index gain and 25% lower Brier score over baselines',
        'Left truncation handling to correct for selection bias in longitudinal data',
        'Inverse Probability of Censoring (IPS) weighting for informative censoring',
        'Real-time evaluation suite reducing per-patient uncertainty by 40%',
      ],
      stack: ['Python', 'PyTorch', 'Pycox', 'Survival Analysis', 'Transformers', 'Scikit-learn', 'Pandas'],
      results: [
        'Improved model fit by 18% in log-likelihood across 500K+ patient records',
        'Enabled individualized lifetime CVD risk trajectories',
        '40% reduction in per-patient prediction uncertainty',
      ],
    },
    intuition: {
      title: 'Robotic Teleoperation & ML Platform',
      org: 'Intuition Core — Founding Engineer',
      description: 'End-to-end robotic teleoperation pipeline with integrated machine learning, deployed across 5+ real-world locations in San Francisco and Berkeley.',
      fullDescription: `At Intuition Core, I built the core robotic teleoperation and ML platform from scratch. The system operates in 5+ real-world locations — restaurants, hotels, and laundromats across San Francisco and Berkeley — performing long-horizon manipulation tasks like towel folding, cooking, and delivery.

A major component of the work was the Video MAE (Masked Autoencoder) pipeline — a 3-encoder architecture that processes visual and proprioceptive data for robot learning. The pipeline uses tube masking and temporal striding (sampling every 4th frame) to learn meaningful temporal representations rather than overfitting to adjacent similar frames. Through iterative debugging, we identified and solved key challenges: overfitting to training distributions, difficulty learning proprioception data, and lack of temporal information from consecutive frames.

I designed and configured 15+ robot arms from I2RT, ARX Robotics, AgileX, and HuggingFace, creating seamless workflows for data collection, reinforcement and imitation learning, and fine-tuning. The MLP policy head takes vision embeddings and outputs joint velocities, end-effector poses, and force/torques, with diffusion/flow-matching for trajectory generation.

I collected 10,000+ robotic episodes and trained a pi-zero policy on Piper and ARX x5 robot arms. The full-stack application was built with Supabase (backend), React Native (frontend), and Tauri for MacOS deployment, with Docker containerization for cross-platform support.

This work directly contributed to raising $2.4M at a $24M valuation from investors including Founders Fund.`,
      features: [
        'Remote robotic teleoperation operating in 5+ real-world locations',
        '3-encoder Video MAE pipeline with tube masking and temporal striding',
        'MLP policy head with vision embeddings, diffusion/flow-matching outputs',
        '15+ robot arms configured (I2RT, ARX, AgileX, HuggingFace)',
        '10,000+ robotic episodes collected for pi-zero policy training',
        'Full-stack app: Supabase + React Native + Tauri + Docker',
        'Long-horizon tasks: towel folding, cooking, delivery',
      ],
      stack: ['Python', 'PyTorch', 'React Native', 'Supabase', 'Tauri', 'Docker', 'MuJoCo', 'CUDA', 'HuggingFace'],
      results: [
        'Deployed in 5+ real-world locations across SF and Berkeley',
        'Helped raise $2.4M at $24M valuation from Founders Fund',
        'Trained pi-zero policy on 10K+ episodes for long-horizon manipulation',
      ],
      demoUrl: 'https://intuition.dev/research/world-model-fashion',
    },
    bair: {
      title: 'Robotic Arm Imitation Learning',
      org: 'Berkeley Artificial Intelligence Research (BAIR)',
      description: 'Low-cost robotic arm platform for human-assistive tasks with state-of-the-art imitation learning and reinforcement learning methods.',
      fullDescription: `At BAIR, I built and deployed a low-cost robotic arm platform designed for human-assistive tasks, specifically a feed-a-person task. The project involved collecting and annotating 200+ real-world episodes of demonstration data.

I trained an Action Chunking Transformer (ACT) imitation learning policy using HuggingFace datasets and Vision-Language-Action (VLA) models, achieving smooth, human-like arm control. The key innovation was implementing a diffusion-based trajectory stitching algorithm with segment-level success extrapolation — this transforms sparse reward signals into dense ones, making it possible to learn from partially successful demonstrations.

To improve task diversity and generalization in unstructured environments, I leveraged curiosity-driven reinforcement learning, which increased the output success rate by approximately 50%. I also designed and integrated vision-language evaluation pipelines powered by transformers for fine-grained debugging and performance evaluation of learned policies, enabling faster iteration cycles.`,
      features: [
        'Low-cost robotic arm platform for feed-a-person assistive task',
        '200+ real-world episodes collected and annotated',
        'Action Chunking Transformer (ACT) imitation learning policy',
        'Vision-Language-Action (VLA) model integration',
        'Diffusion-based trajectory stitching with success extrapolation',
        'Curiosity-driven RL improving success rate by ~50%',
        'Vision-language evaluation pipelines for policy debugging',
      ],
      stack: ['Python', 'PyTorch', 'HuggingFace', 'Transformers', 'Diffusion Models', 'VLA'],
      results: [
        '~50% improvement in success rate via curiosity-driven RL',
        'Smooth, human-like arm control from imitation learning',
        'Dense reward signals from sparse demonstrations via trajectory stitching',
      ],
    },
    formula: {
      title: 'Self-Driving Formula Race Car',
      org: 'Formula Electric at Berkeley — Autonomous Software Lead',
      description: 'Led a 50+ student team designing and deploying Berkeley\'s first fully autonomous Formula electric race car on a ~$30K EV platform.',
      fullDescription: `As Autonomous Software Lead at Formula Electric at Berkeley, I led a team of 50+ student engineers in designing and deploying Berkeley's first fully self-driving Formula electric race car, built on a ~$30K EV platform.

I oversaw the entire system architecture including Robot Operating System (ROS) pipelines with 25+ module nodes and over 4,000 lines of C++ code. I managed live simulation and remote testing infrastructure for full autonomy validation.

The perception stack integrates multimodal inputs: real-time LiDAR and camera data to detect and localize track cones at distances up to ~35m. Using GraphSLAM techniques, we achieved sub-15cm RMS error in mapping. These maps feed into a spline-based trajectory generator with aerodynamic constraints for motion planning and control.

I developed trajectory planning and optimization modules using Python and PyTorch, including dynamic cone-based race-line visualization and SLAM-based mapping, modeling 300+ potential competition driving paths to identify the fastest route under different constraints.

A key achievement was improving real-time processing throughput by ~24% through optimized sensor fusion pipelines — reconfiguring LiDAR and camera data synchronization and simulation modules to reduce latency and boost frame rates.`,
      features: [
        'First fully autonomous Formula electric race car at Berkeley',
        'ROS pipelines: 25+ nodes, 4,000+ lines of C++',
        'LiDAR + camera perception detecting cones at ~35m range',
        'GraphSLAM mapping with sub-15cm RMS error',
        'Spline-based trajectory planning with aerodynamic constraints',
        '300+ driving path models for route optimization',
        '~24% improvement in real-time processing throughput',
      ],
      stack: ['C++', 'Python', 'ROS', 'PyTorch', 'LiDAR', 'GraphSLAM', 'OpenCV'],
      results: [
        'Built Berkeley\'s first fully self-driving electric race car',
        'Sub-15cm RMS mapping error with GraphSLAM',
        '24% faster real-time processing through optimized sensor fusion',
      ],
    },
    1: {
      title: 'Voice Recognition & Object Detection Model',
      description: 'Advanced computer vision and voice synthesis system combining YOLO-v8 object detection with FPGA-based voice processing.',
      fullDescription: `This project integrates state-of-the-art computer vision with hardware-accelerated voice synthesis. The system uses YOLO-v8 trained to recognize over 250 household objects, combined with an FPGA-based voice synthesis module implemented in Verilog for low-latency audio processing.

The integrated conferencing application brings visual object detection and auditory feedback together, enabling users to interact with their environment through both visual and auditory interfaces. The project required expertise across deep learning, FPGA hardware design, and full-stack application development.`,
      features: [
        'YOLO-v8 model detecting 250+ household objects',
        'Voice synthesis on FPGA using Verilog',
        'Integrated conferencing application',
        'Real-time object recognition with voice feedback',
      ],
      stack: ['Python', 'TensorFlow', 'Verilog', 'FPGA', 'Computer Vision'],
      results: [
        'Detected 250+ object classes with high accuracy',
        'Achieved low-latency voice synthesis on FPGA',
        'Fully functional integrated application',
      ],
    },
    2: {
      title: 'RISC-V Neural Network',
      description: 'Neural network implementation at the assembly level with practical applications in stock market analysis.',
      fullDescription: `This project implements a complete neural network at the assembly level on the RISC-V instruction set architecture. It includes matrix multiplication and ReLU activation functions written entirely in assembly, with a memory-efficient architecture utilizing 10+ cache levels for performance optimization.

The system uses 32-bit registers to create a full machine learning interface and was applied to stock market prediction and analysis.`,
      features: [
        'Matrix multiplication and ReLU in assembly',
        'Memory-efficient architecture with 10+ cache levels',
        'Full ML interface using 32-bit registers',
        'Applied to stock market prediction',
      ],
      stack: ['C', 'C++', 'Assembly', 'RISC-V', 'Logisim'],
      results: [
        'Complete neural network in assembly',
        'Efficient multi-level cache system',
        'Applied to stock market analysis',
      ],
    },
    3: {
      title: 'MAE Encoder Pipeline',
      description: 'Triple-stream Masked Autoencoder for multimodal data processing and robot learning.',
      fullDescription: `The MAE Encoder Pipeline implements a 3-encoder Video MAE architecture for processing visual and proprioceptive data from robotic manipulation tasks. The system was trained on 500+GB of multimodal training data using CUDA batch parallelization.

Key technical challenges included addressing overfitting (the model memorized training distributions rather than learning temporal understanding), implementing temporal striding to capture meaningful motion across frames, and learning proprioception data which proved significantly harder than visual reconstruction. Solutions included tube masking, temporal stride of 4 frames, and 3D patch construction by combining adjacent frames.`,
      features: [
        'Triple-stream architecture for visual and proprioceptive data',
        '500+GB training data with CUDA parallelization',
        'Tube masking and temporal striding for temporal learning',
        '3D patch construction for strengthened temporal correlation',
      ],
      stack: ['PyTorch', 'OpenCV', 'CUDA', 'NumPy', 'TensorBoard', 'Weights & Biases'],
      results: [
        'Processed massive multimodal dataset',
        'Achieved visual reconstruction with temporal understanding',
        'Robust architecture for robotic manipulation learning',
      ],
      demoUrl: 'https://intuition.dev/research/world-model-fashion',
    },
    4: {
      title: 'MuJoCo Simulator Robot Arm',
      description: 'Robot arm simulation and data collection system supporting multiple arms with inverse kinematics.',
      fullDescription: `A comprehensive robot arm simulation system using MuJoCo physics engine supporting SO100, Franka, and Arx robot arms. The data collection pipeline incorporates inverse kinematics calculations for realistic movements, with end-effector joint calculations for accurate positioning. Over 5 hours of robot task data were collected for ML research.`,
      features: [
        'Multi-arm support: SO100, Franka, Arx',
        'Inverse kinematics data collection pipeline',
        '5+ hours of robot task data collected',
        'Real-time simulation and recording',
      ],
      stack: ['MuJoCo', 'Python', 'HuggingFace', 'Pandas', 'PyArrow', 'PySide6'],
      results: [
        '5+ hours of high-quality robot task data',
        'Flexible multi-arm support system',
        'Efficient data collection pipeline',
      ],
      githubUrl: 'https://github.com/arulloomba1/mujoco_data_collector',
    },
    5: {
      title: 'Snek Game',
      description: 'Feature-rich snake game with extensive customization and cross-platform support.',
      fullDescription: `A comprehensive snake game with 1000+ lines of C/C++, featuring 30+ unique snake characters with distinct visual styles, 75+ modular map layouts, and cross-platform JavaScript UI/UX.`,
      features: [
        '1000+ lines of C/C++ with custom game mechanics',
        '30+ unique snake characters',
        '75+ modular map layouts',
        'Cross-platform JavaScript UI',
      ],
      stack: ['C', 'C++', 'OpenGL', 'Docker', 'Valgrind'],
      results: [
        'Feature-rich game with extensive customization',
        'Cross-platform compatibility',
      ],
    },
    6: {
      title: 'S1XT33N Voice-Controlled Robot Car',
      description: 'Autonomous vehicle with voice command recognition and custom circuit design.',
      fullDescription: `S1XT33N is an autonomous robot car with voice-activated control recognizing 4+ distinct commands. Features custom motor controllers and power management circuits, PWM regulation, and PCA-based voice classification with optimized hyperparameters.`,
      features: [
        'Voice-activated control with 4+ commands',
        'Custom motor controller and power management circuits',
        'PWM and current-controlled sources for motor regulation',
        'PCA-based voice classification',
      ],
      stack: ['Arduino', 'Embedded C', 'PWM', 'PCA', 'Signal Processing', 'Analog Circuits'],
      results: [
        'Functional voice-controlled robot car',
        'High accuracy voice command recognition',
        'Custom circuit designs',
      ],
    },
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="detail-page">
        <div className="detail-container">
          <h1>Project Not Found</h1>
          <button onClick={() => navigate('/projects')} className="back-link">Back to Projects</button>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <motion.button
          className="back-link"
          onClick={() => navigate('/projects')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          &larr; Back to Projects
        </motion.button>

        <motion.div className="detail-hero" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          {project.org && <p className="detail-org">{project.org}</p>}
          <h1>{project.title}</h1>
          <p className="detail-subtitle">{project.description}</p>
        </motion.div>

        <div className="detail-body">
          <motion.section className="detail-section" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            <h2>Overview</h2>
            <div className="detail-text">
              {project.fullDescription.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.section>

          <motion.section className="detail-section" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <h2>Key Features</h2>
            <ul className="detail-list">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </motion.section>

          <motion.section className="detail-section" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <h2>Technology Stack</h2>
            <div className="detail-tags">
              {project.stack.map((tech) => (
                <span key={tech} className="detail-tag">{tech}</span>
              ))}
            </div>
          </motion.section>

          <motion.section className="detail-section" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
            <h2>Results</h2>
            <ul className="detail-list results">
              {project.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </motion.section>

          {(project.demoUrl || project.githubUrl) && (
            <motion.div className="detail-links" variants={fadeUp} initial="hidden" animate="visible" custom={5}>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="detail-link">
                  View Demo &rarr;
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="detail-link secondary">
                  View on GitHub &rarr;
                </a>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
