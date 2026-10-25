// All site copy lives here so pages stay presentational.
const gh = 'https://github.com/arulloomba1/';
const img = (name) => `/project-images/${name}`;
const vid = (name) => encodeURI(`/videos/${name}`);

export const EMAIL = 'arulloomba@gmail.com';
export const RESUME_URL = '/resume1.pdf';
export const GITHUB_URL = 'https://github.com/arulloomba1';
export const LINKEDIN_URL = 'https://linkedin.com/in/arul-loomba/';

const rawProjects = [
  { id: 'veevo', star: true, category: 'ml', org: 'Veevo Health', role: 'Founding ML Engineer', year: '2025', title: 'CVD Survival Modeling Engine', short: 'Deep learning survival analysis forecasting lifetime cardiovascular disease risk across 500K+ patient records.', image: img('cvd-calibration.png'), imgBg: '#ffffff', gallery: [img('cvd-calibration.png')],
    tags: ['Python', 'PyTorch', 'Pycox', 'Survival Analysis'],
    description: 'An advanced nonlinear survival modeling engine that combines Fine-Gray competing-risk analysis with deep architectures to forecast lifetime cardiovascular disease risk.',
    full: `At Veevo Health, I built a survival modeling engine from the ground up to predict lifetime cardiovascular disease risk across 500,000+ longitudinal patient records. The system combines traditional biostatistical methods (Fine-Gray competing-risk analysis) with modern deep learning architectures including Cox-Time and Transformer models.

A key technical challenge was handling left truncation — our dataset was entirely left-truncated since individuals only entered the study after surviving to a certain age. This required carefully adjusting loss functions to condition on survival to entry time, avoiding the selection bias that would otherwise overestimate survival.

I designed a dual-head network architecture for CVD versus non-CVD mortality, trained on more than 100,000 patient-years of data. This architecture achieved a 0.07 gain in C-index and 25% lower Brier score compared to baseline models, enabling individualized lifetime risk trajectories. The system also incorporates Inverse Probability of Censoring weighting (IPS) for handling informative censoring in discrete-time survival models.

I also built a real-time evaluation suite with confidence-aware predictions, reducing per-patient uncertainty by 40%. This involved careful consideration of discrete vs continuous time modeling — using discrete-time models when event times are naturally binned (e.g., 6-month follow-ups) and continuous-time models for finer-grained predictions.`,
    features: ['Fine-Gray competing-risk analysis combined with Cox-Time and Transformer architectures', 'Dual-head network for CVD vs non-CVD mortality on 100K+ patient-years', '0.07 C-index gain and 25% lower Brier score over baselines', 'Left truncation handling to correct for selection bias in longitudinal data', 'Inverse Probability of Censoring (IPS) weighting for informative censoring', 'Real-time evaluation suite reducing per-patient uncertainty by 40%'],
    stack: ['Python', 'PyTorch', 'Pycox', 'Survival Analysis', 'Transformers', 'Scikit-learn', 'Pandas'],
    results: ['Improved model fit by 18% in log-likelihood across 500K+ patient records', 'Enabled individualized lifetime CVD risk trajectories', '40% reduction in per-patient prediction uncertainty'] },
  { id: 'intuition', star: true, category: 'robotics', org: 'Intuition Core', role: 'Founding Engineer', year: '2025', title: 'Robotic Teleoperation & ML Platform', short: 'End-to-end robotic teleoperation pipeline with ML integration, operating in 5+ locations across SF and Berkeley.', image: img('mae--002.png'), video: vid('IMG 3778 from CloudConvert.mp4'), gallery: [img('mae--002.png'), img('mae--003.png'), img('mae--004.png'), img('mlp--000.png')],
    tags: ['Python', 'PyTorch', 'React Native', 'Supabase', 'Docker', 'MuJoCo'], demoUrl: 'https://intuition.dev/research/world-model-fashion',
    description: 'End-to-end robotic teleoperation pipeline with integrated machine learning, deployed across 5+ real-world locations in San Francisco and Berkeley.',
    full: `At Intuition Core, I built the core robotic teleoperation and ML platform from scratch. The system operates in 5+ real-world locations — restaurants, hotels, and laundromats across San Francisco and Berkeley — performing long-horizon manipulation tasks like towel folding, cooking, and delivery.

A major component of the work was the Video MAE (Masked Autoencoder) pipeline — a 3-encoder architecture that processes visual and proprioceptive data for robot learning. The pipeline uses tube masking and temporal striding (sampling every 4th frame) to learn meaningful temporal representations rather than overfitting to adjacent similar frames. Through iterative debugging, we identified and solved key challenges: overfitting to training distributions, difficulty learning proprioception data, and lack of temporal information from consecutive frames.

I designed and configured 15+ robot arms from I2RT, ARX Robotics, AgileX, and HuggingFace, creating seamless workflows for data collection, reinforcement and imitation learning, and fine-tuning. The MLP policy head takes vision embeddings and outputs joint velocities, end-effector poses, and force/torques, with diffusion/flow-matching for trajectory generation.

I collected 10,000+ robotic episodes and trained a pi-zero policy on Piper and ARX x5 robot arms. The full-stack application was built with Supabase (backend), React Native (frontend), and Tauri for MacOS deployment, with Docker containerization for cross-platform support.

This work directly contributed to raising $2.4M at a $24M valuation from investors including Founders Fund.`,
    features: ['Remote robotic teleoperation operating in 5+ real-world locations', '3-encoder Video MAE pipeline with tube masking and temporal striding', 'MLP policy head with vision embeddings, diffusion/flow-matching outputs', '15+ robot arms configured (I2RT, ARX, AgileX, HuggingFace)', '10,000+ robotic episodes collected for pi-zero policy training', 'Full-stack app: Supabase + React Native + Tauri + Docker', 'Long-horizon tasks: towel folding, cooking, delivery'],
    stack: ['Python', 'PyTorch', 'React Native', 'Supabase', 'Tauri', 'Docker', 'MuJoCo', 'CUDA', 'HuggingFace'],
    results: ['Deployed in 5+ real-world locations across SF and Berkeley', 'Helped raise $2.4M at $24M valuation from Founders Fund', 'Trained pi-zero policy on 10K+ episodes for long-horizon manipulation'] },
  { id: 'bair', star: true, category: 'robotics', org: 'BAIR', role: 'Undergraduate Research Assistant', year: '2025', title: 'Robotic Arm Imitation Learning', short: 'Low-cost robotic arm platform for human-assistive tasks with ACT imitation learning, diffusion-based trajectory stitching, and curiosity-driven RL achieving ~50% success rate improvement.', image: img('mae--006.png'), gallery: [img('mae--006.png')],
    tags: ['Python', 'PyTorch', 'HuggingFace', 'VLA', 'Diffusion Models'],
    description: 'Low-cost robotic arm platform for human-assistive tasks with state-of-the-art imitation learning and reinforcement learning methods.',
    full: `At BAIR, I built and deployed a low-cost robotic arm platform designed for human-assistive tasks, specifically a feed-a-person task. The project involved collecting and annotating 200+ real-world episodes of demonstration data.

I trained an Action Chunking Transformer (ACT) imitation learning policy using HuggingFace datasets and Vision-Language-Action (VLA) models, achieving smooth, human-like arm control. The key innovation was implementing a diffusion-based trajectory stitching algorithm with segment-level success extrapolation — this transforms sparse reward signals into dense ones, making it possible to learn from partially successful demonstrations.

To improve task diversity and generalization in unstructured environments, I leveraged curiosity-driven reinforcement learning, which increased the output success rate by approximately 50%. I also designed and integrated vision-language evaluation pipelines powered by transformers for fine-grained debugging and performance evaluation of learned policies, enabling faster iteration cycles.`,
    features: ['Low-cost robotic arm platform for feed-a-person assistive task', '200+ real-world episodes collected and annotated', 'Action Chunking Transformer (ACT) imitation learning policy', 'Vision-Language-Action (VLA) model integration', 'Diffusion-based trajectory stitching with success extrapolation', 'Curiosity-driven RL improving success rate by ~50%', 'Vision-language evaluation pipelines for policy debugging'],
    stack: ['Python', 'PyTorch', 'HuggingFace', 'Transformers', 'Diffusion Models', 'VLA'],
    results: ['~50% improvement in success rate via curiosity-driven RL', 'Smooth, human-like arm control from imitation learning', 'Dense reward signals from sparse demonstrations via trajectory stitching'] },
  { id: 'formula', star: true, category: 'robotics', org: 'Formula Electric at Berkeley', role: 'Autonomous Software Lead', year: '2023', title: 'Self-Driving Formula Race Car', short: "Led 50+ engineers designing Berkeley's first fully autonomous electric race car with ROS and LiDAR perception.", image: img('formula-car-1.jpg'), gallery: [img('formula-car-1.jpg'), img('feb-team-2.jpg'), img('formula-car-2.jpg'), img('feb-team-1.jpg'), img('feb-team-3.jpg')],
    tags: ['C++', 'Python', 'ROS', 'LiDAR', 'PyTorch', 'SLAM'],
    description: "Led a 50+ student team designing and deploying Berkeley's first fully autonomous Formula electric race car on a ~$30K EV platform.",
    full: `As Autonomous Software Lead at Formula Electric at Berkeley, I led a team of 50+ student engineers in designing and deploying Berkeley's first fully self-driving Formula electric race car, built on a ~$30K EV platform.

I oversaw the entire system architecture including Robot Operating System (ROS) pipelines with 25+ module nodes and over 4,000 lines of C++ code. I managed live simulation and remote testing infrastructure for full autonomy validation.

The perception stack integrates multimodal inputs: real-time LiDAR and camera data to detect and localize track cones at distances up to ~35m. Using GraphSLAM techniques, we achieved sub-15cm RMS error in mapping. These maps feed into a spline-based trajectory generator with aerodynamic constraints for motion planning and control.

I developed trajectory planning and optimization modules using Python and PyTorch, including dynamic cone-based race-line visualization and SLAM-based mapping, modeling 300+ potential competition driving paths to identify the fastest route under different constraints.

A key achievement was improving real-time processing throughput by ~24% through optimized sensor fusion pipelines — reconfiguring LiDAR and camera data synchronization and simulation modules to reduce latency and boost frame rates.`,
    features: ['First fully autonomous Formula electric race car at Berkeley', 'ROS pipelines: 25+ nodes, 4,000+ lines of C++', 'LiDAR + camera perception detecting cones at ~35m range', 'GraphSLAM mapping with sub-15cm RMS error', 'Spline-based trajectory planning with aerodynamic constraints', '300+ driving path models for route optimization', '~24% improvement in real-time processing throughput'],
    stack: ['C++', 'Python', 'ROS', 'PyTorch', 'LiDAR', 'GraphSLAM', 'OpenCV'],
    results: ["Built Berkeley's first fully self-driving electric race car", 'Sub-15cm RMS mapping error with GraphSLAM', '24% faster real-time processing through optimized sensor fusion'] },
  { id: '1', category: 'ml', title: 'Voice Recognition & Object Detection', short: 'YOLO-v8 object detection for 250+ objects combined with FPGA-based voice synthesis for an integrated conferencing application.', image: img('yolo-detection.jpg'), gallery: [img('yolo-detection.jpg')], tags: ['Python', 'TensorFlow', 'Verilog', 'FPGA'],
    description: 'Advanced computer vision and voice synthesis system combining YOLO-v8 object detection with FPGA-based voice processing.',
    full: `This project integrates state-of-the-art computer vision with hardware-accelerated voice synthesis. The system uses YOLO-v8 trained to recognize over 250 household objects, combined with an FPGA-based voice synthesis module implemented in Verilog for low-latency audio processing.

The integrated conferencing application brings visual object detection and auditory feedback together, enabling users to interact with their environment through both visual and auditory interfaces. The project required expertise across deep learning, FPGA hardware design, and full-stack application development.`,
    features: ['YOLO-v8 model detecting 250+ household objects', 'Voice synthesis on FPGA using Verilog', 'Integrated conferencing application', 'Real-time object recognition with voice feedback'],
    stack: ['Python', 'TensorFlow', 'Verilog', 'FPGA', 'Computer Vision'],
    results: ['Detected 250+ object classes with high accuracy', 'Achieved low-latency voice synthesis on FPGA', 'Fully functional integrated application'] },
  { id: '3', category: 'ml', title: 'MAE Encoder Pipeline', short: 'Triple-stream Masked Autoencoder for visual and proprioceptive data. Processed 500+GB training data with CUDA batch parallelization.', image: img('mae--003.png'), gallery: [img('mae--003.png'), img('mae--004.png')], tags: ['PyTorch', 'OpenCV', 'CUDA', 'Weights & Biases'], demoUrl: 'https://intuition.dev/research/world-model-fashion',
    description: 'Triple-stream Masked Autoencoder for multimodal data processing and robot learning.',
    full: `The MAE Encoder Pipeline implements a 3-encoder Video MAE architecture for processing visual and proprioceptive data from robotic manipulation tasks. The system was trained on 500+GB of multimodal training data using CUDA batch parallelization.

Key technical challenges included addressing overfitting (the model memorized training distributions rather than learning temporal understanding), implementing temporal striding to capture meaningful motion across frames, and learning proprioception data which proved significantly harder than visual reconstruction. Solutions included tube masking, temporal stride of 4 frames, and 3D patch construction by combining adjacent frames.`,
    features: ['Triple-stream architecture for visual and proprioceptive data', '500+GB training data with CUDA parallelization', 'Tube masking and temporal striding for temporal learning', '3D patch construction for strengthened temporal correlation'],
    stack: ['PyTorch', 'OpenCV', 'CUDA', 'NumPy', 'TensorBoard', 'Weights & Biases'],
    results: ['Processed massive multimodal dataset', 'Achieved visual reconstruction with temporal understanding', 'Robust architecture for robotic manipulation learning'] },
  { id: '2', category: 'systems', title: 'RISC-V Neural Network', short: 'Neural network at the assembly level with matrix multiplication, ReLU, and 10+ cache levels on RISC-V architecture for stock market analysis.', image: img('riscv-pipeline.svg'), imgBg: '#ffffff', gallery: [img('riscv-pipeline.svg')], tags: ['C', 'C++', 'Assembly', 'RISC-V'],
    description: 'Neural network implementation at the assembly level with practical applications in stock market analysis.',
    full: `This project implements a complete neural network at the assembly level on the RISC-V instruction set architecture. It includes matrix multiplication and ReLU activation functions written entirely in assembly, with a memory-efficient architecture utilizing 10+ cache levels for performance optimization.

The system uses 32-bit registers to create a full machine learning interface and was applied to stock market prediction and analysis.`,
    features: ['Matrix multiplication and ReLU in assembly', 'Memory-efficient architecture with 10+ cache levels', 'Full ML interface using 32-bit registers', 'Applied to stock market prediction'],
    stack: ['C', 'C++', 'Assembly', 'RISC-V', 'Logisim'],
    results: ['Complete neural network in assembly', 'Efficient multi-level cache system', 'Applied to stock market analysis'] },
  { id: '4', category: 'robotics', title: 'MuJoCo Simulator Robot Arm', short: 'Robot arm simulation and data collection system supporting SO100, Franka, and Arx with inverse kinematics. Collected 5+ hours of task data.', image: img('mae--004.png'), gallery: [img('mae--004.png')], tags: ['MuJoCo', 'Python', 'HuggingFace', 'PyArrow'], githubUrl: gh + 'mujoco_data_collector',
    description: 'Robot arm simulation and data collection system supporting multiple arms with inverse kinematics.',
    full: `A comprehensive robot arm simulation system using MuJoCo physics engine supporting SO100, Franka, and Arx robot arms. The data collection pipeline incorporates inverse kinematics calculations for realistic movements, with end-effector joint calculations for accurate positioning. Over 5 hours of robot task data were collected for ML research.`,
    features: ['Multi-arm support: SO100, Franka, Arx', 'Inverse kinematics data collection pipeline', '5+ hours of robot task data collected', 'Real-time simulation and recording'],
    stack: ['MuJoCo', 'Python', 'HuggingFace', 'Pandas', 'PyArrow', 'PySide6'],
    results: ['5+ hours of high-quality robot task data', 'Flexible multi-arm support system', 'Efficient data collection pipeline'] },
  { id: '6', category: 'robotics', title: 'S1XT33N Voice-Controlled Robot Car', short: 'Autonomous vehicle with PCA-based voice classification, custom motor controllers, and PWM regulation for 4+ voice commands.', image: img('s1xt33n-actual.jpg'), gallery: [img('s1xt33n-actual.jpg'), img('s1xt33n-car.jpg')], tags: ['Arduino', 'Embedded C', 'PCA', 'Signal Processing'],
    description: 'Autonomous vehicle with voice command recognition and custom circuit design.',
    full: `S1XT33N is an autonomous robot car with voice-activated control recognizing 4+ distinct commands. Features custom motor controllers and power management circuits, PWM regulation, and PCA-based voice classification with optimized hyperparameters.`,
    features: ['Voice-activated control with 4+ commands', 'Custom motor controller and power management circuits', 'PWM and current-controlled sources for motor regulation', 'PCA-based voice classification'],
    stack: ['Arduino', 'Embedded C', 'PWM', 'PCA', 'Signal Processing', 'Analog Circuits'],
    results: ['Functional voice-controlled robot car', 'High accuracy voice command recognition', 'Custom circuit designs'] },
  { id: '5', category: 'software', title: 'Snek Game', short: '1000+ lines of C/C++ with 30+ snake characters, 75+ modular map layouts, and cross-platform JavaScript UI.', image: img('snek-game.png'), gallery: [img('snek-game.png')], tags: ['C/C++', 'OpenGL', 'Docker'],
    description: 'Feature-rich snake game with extensive customization and cross-platform support.',
    full: `A comprehensive snake game with 1000+ lines of C/C++, featuring 30+ unique snake characters with distinct visual styles, 75+ modular map layouts, and cross-platform JavaScript UI/UX.`,
    features: ['1000+ lines of C/C++ with custom game mechanics', '30+ unique snake characters', '75+ modular map layouts', 'Cross-platform JavaScript UI'],
    stack: ['C', 'C++', 'OpenGL', 'Docker', 'Valgrind'],
    results: ['Feature-rich game with extensive customization', 'Cross-platform compatibility'] },
  { id: 'scheme', category: 'systems', title: 'Scheme Interpreter', short: 'Full interpreter for the Scheme programming language built in Python, implementing lexing, parsing, and evaluation.', tags: ['Python', 'Interpreters', 'Functional Programming'], githubUrl: gh + 'Scheme-Interpreter' },
  { id: 'maze', category: 'software', title: 'World Maze Generator', short: 'Interactive maze generation application with multiple algorithms and real-time visualization.', tags: ['Java', 'Algorithms', 'Graph Theory'], githubUrl: gh + 'World-Maze-Generator-Interactive' },
  { id: 'ant', category: 'software', title: 'Ant Boardgame', short: 'Strategy board game simulation with ant-themed gameplay mechanics built in Python.', image: img('ants-game.png'), tags: ['Python', 'Game Design', 'OOP'], githubUrl: gh + 'Ant-Boardgame' },
  { id: 'expense', category: 'ml', title: 'ML Expense Categorizer', short: 'Machine learning system for automatic expense categorization and financial data analysis.', tags: ['JavaScript', 'Machine Learning'], githubUrl: gh + 'ml_expense_categorizer' },
  { id: 'text', category: 'ml', title: 'Text Extracter', short: 'Resume and job description comparison tool using NLP for matching and analysis.', tags: ['Python', 'NLP'], githubUrl: gh + 'text_extracter' },
  { id: 'geo', category: 'systems', title: 'Geo-Network Simulation', short: 'Geographic network simulation framework for modeling and analyzing spatial networks.', image: img('geo-network.png'), tags: ['Python', 'Simulation', 'Networks'], githubUrl: gh + 'Geo-Network-Simulation' },
  { id: 'writing', category: 'software', title: 'Writing Enhancer', short: 'AI-powered writing improvement tool for grammar, style, and clarity enhancement.', tags: ['JavaScript', 'NLP'], githubUrl: gh + 'writing-enhancer' },
  { id: 'aigym', category: 'ml', title: 'AI Gym', short: 'AI training environment for experimenting with reinforcement learning agents.', image: img('lunar-lander.gif'), tags: ['TypeScript', 'RL', 'Environments'], githubUrl: gh + 'ai-gym' },
];

// Detailed projects open their own page; the rest link straight out.
export const projects = rawProjects.map((p) => ({
  ...p,
  external: !p.full,
  href: p.full ? `/projects/${p.id}` : (p.githubUrl || p.demoUrl || '#'),
}));

export const detailedProjects = projects.filter((p) => p.full);

export const projectCategories = [
  ['all', 'All'],
  ['ml', 'ML & AI'],
  ['robotics', 'Robotics'],
  ['systems', 'Systems'],
  ['software', 'Software'],
];

export const experience = [
  ['Founding ML Engineer', 'Veevo Health', 'San Francisco, CA', 'Sep 2025 – Present', ['Built nonlinear survival modeling engine combining Fine-Gray competing-risk analysis with Cox-Time and Transformer architectures to forecast lifetime CVD risk across 500K+ longitudinal patient records, improving model fit by 18% in log-likelihood.', 'Designed dual-head network for CVD vs non-CVD mortality trained on 100K+ patient-years, achieving 0.07 C-index gain and 25% lower Brier score.', 'Built real-time evaluation suite for confidence-aware predictions, reducing per-patient uncertainty by 40%.']],
  ['Undergraduate Research Assistant', 'Berkeley Artificial Intelligence Research (BAIR)', 'Berkeley, CA', 'Jan 2025 – Present', ['Built and deployed low-cost robotic arm platform for human-assistive tasks; collected and annotated 200+ real-world episodes for feed-a-person task.', 'Trained Action Chunking Transformer (ACT) imitation learning policy using HuggingFace datasets and Vision-Language-Action (VLA) models.', 'Implemented diffusion-based trajectory stitching algorithm with segment-level success extrapolation, transforming sparse rewards into dense signals.', 'Leveraged curiosity-driven RL to improve task diversity, increasing success rate by ~50% in unstructured environments.']],
  ['Founding Engineer', 'Intuition Core', 'San Francisco, CA', 'May 2025 – Sep 2025', ['Developed remote robotic teleoperation pipeline with ML integration, operating in 5+ restaurants, hotels, and laundromats across SF and Berkeley.', 'Designed and configured 15+ robot arms (I2RT, ARX Robotics, AgileX) for seamless data collection, RL/IL, and fine-tuning.', 'Created full-stack application using Supabase, React Native, and Tauri for MacOS deployment.', 'Collected 10,000+ robotic episodes and trained π0 policy on Piper and ARX x5 robot arms for long-horizon tasks.', 'Aided founders in raising $2.4M at $24M valuation from Founders Fund by developing first ML MVP product.']],
  ['Autonomous Software Lead', 'Formula Electric at Berkeley', 'Berkeley, CA', 'Aug 2023 – Present', ["Led 50+ student engineers designing Berkeley's first fully self-driving Formula electric race car on a ~$30K EV platform.", 'Oversaw ROS pipelines with 25+ nodes, 4,000+ lines of C++ code, and live simulation infrastructure.', 'Developed trajectory planning with SLAM-based mapping, modeling 300+ driving paths; achieved sub-15cm RMS error with GraphSLAM.', 'Improved real-time processing throughput by ~24% through optimized sensor fusion pipelines.']],
  ['Software Engineer Intern', 'Antrix', 'San Jose, CA', 'Aug 2024 – Jan 2025', ['Trained and fine-tuned 7+ foundational models using Microsoft Autogen, Amazon Bedrock, and Dialogflow with LLM integration.', 'Designed IRIS AI Agent for processing regulatory data from OpenFDA and EUDAMED APIs, analyzing 1M+ data points.', 'Automated ISO 13485 and ISO 62304 compliance documentation using PyTorch and Scikit-learn.']],
  ['Teaching Assistant, EECS 16A', 'UC Berkeley', 'Berkeley, CA', 'Jan 2024 – Jan 2025', ['Guided 40+ students on hands-on projects including song fingerprinting and miniature projector design.', 'Designed 30+ interactive lesson plans covering data visualization, probability, and applied ML.', 'Coordinated design competitions engaging 900+ incoming students.']],
  ['Software Engineer Intern', 'Sound Scope', 'Berkeley, CA', 'May 2024 – Aug 2024', ['Converted Figma designs into functional React Native UI components with MongoDB backend integration.', 'Developed behavioral intelligence model using ML algorithms for artist development platform.']],
  ['VP of Development', 'SBC Strategy Consulting', 'Berkeley, CA', 'Jan 2024 – Present', ['Led strategy consulting for clients including Sweetgreen ($1.3B), Reddit, Atlassian, and Fabletics.', 'Conducted primary research on 300+ survey responses and 10-20 focus groups per engagement.', 'Developed activation strategies boosting client engagement by 20%+ across multiple campaigns.']],
].map(([role, company, location, period, points]) => ({ role, company, location, period, points }));

export const skills = Object.entries({
  'Languages': ['Python', 'Java', 'JavaScript', 'C/C++', 'Assembly', 'SQL', 'HTML/CSS', 'Verilog'],
  'ML & AI': ['PyTorch', 'TensorFlow', 'Transformers', 'Imitation Learning', 'Reinforcement Learning', 'CUDA', 'Weights & Biases'],
  'Robotics': ['ROS', 'MuJoCo', 'HuggingFace LeRobot', 'Inverse Kinematics', 'LiDAR', 'SLAM'],
  'Full-Stack': ['React', 'React Native', 'Node.js', 'Supabase', 'FastAPI', 'MongoDB', 'Tauri'],
  'Cloud & DevOps': ['AWS', 'Azure', 'GCP', 'Docker', 'CI/CD', 'Linux/Unix'],
}).map(([name, items]) => ({ name, items: items.join('  ·  ') }));

export const awards = [
  { title: "4x Dean's List Award", meta: 'UC Berkeley, EECS · 2023–2025' },
  { title: '2nd Place, MOOC AI Hackathon 2025', meta: 'UC Berkeley · Historical AI Debate Agent' },
  { title: 'Cal Leadership Award', meta: 'UC Berkeley' },
];

export const videos = [
  [12, 'MOV to MP4 Conversion (1).mp4', 'Robotics Experiment 6'], [13, 'IMG 0859 (1).mp4', 'Robotics Experiment 7'], [14, 'MOV to MP4 26912.mp4', 'Robotics Experiment 8'], [15, 'MOV to MP4 518.mp4', 'Robotics Experiment 9'], [16, 'MOV to MP4 Conversion.mp4', 'Robotics Experiment 10'],
  [1, '1-phone_reconstruction_slow_temp_slowed.mp4', 'Phone Reconstruction'], [2, '2-phone_input_strided_slow_temp_slowed.mp4', 'Phone Input Strided'], [3, '3-laptop_reconstruction_slow_temp_slowed.mp4', 'Laptop Reconstruction'], [4, '4-laptop_input_strided_slow_temp_slowed.mp4', 'Laptop Input Strided'], [5, '5-proprioception_plots_final_slowed.mp4', 'Proprioception Plots'],
  [6, 'Arm Move 4.mp4', 'Arm Movement 4'], [7, 'IMG 3341 from CloudConvert.mp4', 'Robotics Experiment 1'], [8, 'IMG 3584 from CloudConvert.mp4', 'Robotics Experiment 2'], [9, 'IMG 3594 from CloudConvert.mp4', 'Robotics Experiment 3'], [10, 'IMG 3778 from CloudConvert.mp4', 'Robotics Experiment 4'], [11, 'IMG 9805 from CloudConvert.mp4', 'Robotics Experiment 5'],
].map(([id, file, title]) => ({ id, src: vid(file), title, group: /reconstruction|strided|proprioception/i.test(file) ? 'MAE' : 'Arm' }));

export const apps = {
  behind: {
    name: 'Behind',
    platform: 'iOS · getbehind.app',
    question: 'how behind are you?',
    tagline: 'see where you actually rank',
    short: 'Ranks you against everyone your exact age and gender, worldwide, on six things — privilege, mog, popularity, lore, bag and brainrot — then tells you plainly how far ahead or behind you are.',
    icon: '/app-media/behind-icon.png',
    hero: '/app-media/behind-og.jpg',
    site: 'https://getbehind.app',
    appStore: 'https://apps.apple.com/us/app/behind-self-improvement-coach/id6814665658',
    shots: [
      { src: '/app-media/behind-03-reveal-overall.jpg', caption: 'The reveal' },
      { src: '/app-media/behind-02-card-pro.jpg', caption: 'Every score, one card' },
      { src: '/app-media/behind-06-share.jpg', caption: 'Share where you stand' },
    ],
  },
  tally: {
    name: 'Tally',
    role: 'Founder',
    tagline: 'bet on yourself.',
    short: 'The habit tracker that charges you every time you slip up — and gives it to a friend. Put money on the line, prove it with a photo, and let the feed close the loop.',
    icon: '/app-media/tally-icon.png',
    logo: '/app-media/tally-logo.svg',
    site: 'https://www.tally.kitchen/',
    film: { src: '/app-media/tally-launch.mp4', poster: '/app-media/tally-launch-poster.jpg' },
    shots: [
      { src: '/app-media/tally-home.mp4', poster: '/app-media/tally-home.jpg', caption: 'Put money on a habit' },
      { src: '/app-media/tally-verify.mp4', poster: '/app-media/tally-verify.jpg', caption: 'Prove it with a photo' },
      { src: '/app-media/tally-feed.mp4', poster: '/app-media/tally-feed.jpg', caption: 'Slip up, a friend gets paid' },
    ],
  },
};
