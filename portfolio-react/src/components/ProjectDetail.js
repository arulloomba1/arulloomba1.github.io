import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = {
    1: {
      id: 1,
      title: "Voice Recognition and Object Detection Model",
      description: "Advanced computer vision and voice synthesis system combining YOLO-v8 object detection with FPGA-based voice processing.",
      fullDescription: `This project represents a comprehensive integration of computer vision and voice processing technologies. The system combines state-of-the-art object detection capabilities with real-time voice synthesis, creating an innovative conferencing application that can identify and describe objects in the environment.

The core of the system utilizes YOLO-v8, one of the most advanced object detection models, trained to recognize over 250 different household objects. This enables the system to provide real-time identification of items in the user's environment. The voice synthesis component, implemented on an FPGA using Verilog, allows for efficient, low-latency audio processing and generation.

The integrated conferencing application brings these technologies together, creating a seamless experience where users can interact with their environment through both visual and auditory interfaces. This project demonstrates expertise in deep learning, hardware design, and full-stack application development.`,
      images: [
        "https://via.placeholder.com/800x500/333/ffffff?text=YOLO+Object+Detection",
        "https://via.placeholder.com/800x500/333/ffffff?text=FPGA+Voice+Synthesis",
        "https://via.placeholder.com/800x500/333/ffffff?text=Integrated+Application"
      ],
      features: [
        "Developed YOLO-v8 model for 250+ household objects detection",
        "Implemented Voice Synthesis on FPGA using Verilog",
        "Created integrated conferencing application",
        "Real-time object recognition and voice feedback",
        "Optimized model performance for low-latency applications"
      ],
      stack: ["Python", "Tensorflow", "Verilog", "FPGA", "Computer Vision", "Deep Learning"],
      challenges: [
        "Optimizing YOLO-v8 for real-time performance",
        "Implementing efficient voice synthesis on FPGA hardware",
        "Integrating multiple systems into a cohesive application"
      ],
      results: [
        "Successfully detected 250+ object classes with high accuracy",
        "Achieved low-latency voice synthesis on FPGA",
        "Created a fully functional integrated application"
      ]
    },
    2: {
      id: 2,
      title: "RISC-V Neural Network",
      description: "Low-level neural network implementation at the assembly level with practical applications in stock market analysis.",
      fullDescription: `This project demonstrates deep understanding of computer architecture and machine learning by implementing a complete neural network at the assembly level. Built on the RISC-V instruction set architecture, this project showcases the ability to work with low-level programming while maintaining the complexity of machine learning algorithms.

The neural network implementation includes matrix multiplication and ReLU activation functions, all written in assembly language. The architecture was designed with memory efficiency in mind, utilizing over 10 different cache levels to optimize performance. The system uses 32-bit registers to create a full machine learning interface capable of processing complex data.

The practical application of this system in stock market analysis demonstrates the real-world utility of the implementation. This project required expertise in computer architecture, assembly programming, and machine learning fundamentals.`,
      images: [
        "https://via.placeholder.com/800x500/333/ffffff?text=RISC-V+Architecture",
        "https://via.placeholder.com/800x500/333/ffffff?text=Assembly+Implementation",
        "https://via.placeholder.com/800x500/333/ffffff?text=Stock+Market+Analysis"
      ],
      features: [
        "Implemented matrix multiplication and ReLu in assembly",
        "Designed memory-efficient architecture with 10+ caches",
        "Created full machine learning interface using 32-bit registers",
        "Applied to stock market prediction and analysis",
        "Optimized for performance at the hardware level"
      ],
      stack: ["C", "C++", "Assembly", "Logism", "RISC-V", "Computer Architecture"],
      challenges: [
        "Implementing complex algorithms in assembly language",
        "Designing efficient memory architecture with multiple cache levels",
        "Optimizing performance for real-time stock market analysis"
      ],
      results: [
        "Successfully implemented complete neural network in assembly",
        "Achieved efficient memory usage with multi-level cache system",
        "Applied system to stock market analysis with promising results"
      ]
    },
    3: {
      id: 3,
      title: "MAE Encoder Pipeline",
      description: "Advanced triple-stream Masked-Autoencoder for multimodal data processing and analysis.",
      fullDescription: `The MAE (Masked Autoencoder) Encoder Pipeline represents a cutting-edge approach to multimodal machine learning. This project implements a sophisticated triple-stream architecture designed to process both visual and proprioceptive data simultaneously, enabling the system to understand complex interactions between visual perception and physical movement.

The system was trained on over 500GB of multimodal training data, requiring sophisticated data pipeline management and optimization. The implementation leverages CUDA for batch parallelization, enabling efficient processing of large-scale datasets. The architecture processes visual data streams alongside proprioceptive feedback, creating a comprehensive understanding of spatial and temporal relationships.

This project demonstrates expertise in deep learning, computer vision, and large-scale data processing. The use of advanced tools like PyTorch, Tensorboard, and Weights & Biases showcases proficiency in modern ML development workflows.`,
      images: [
        "https://via.placeholder.com/800x500/333/ffffff?text=Triple+Stream+Architecture",
        "https://via.placeholder.com/800x500/333/ffffff?text=Data+Processing+Pipeline",
        "https://via.placeholder.com/800x500/333/ffffff?text=CUDA+Parallelization"
      ],
      features: [
        "Engineered triple-stream architecture for visual and proprioceptive data",
        "Processed 500+GB of training data",
        "Implemented batch parallelization with CUDA",
        "Advanced masked autoencoder implementation",
        "Real-time multimodal data processing"
      ],
      stack: ["PyTorch", "OpenCV", "Gym", "NumPy", "Tensorboard", "CUDA", "Weights & Biases"],
      challenges: [
        "Managing and processing 500+GB of training data",
        "Designing efficient triple-stream architecture",
        "Optimizing CUDA parallelization for maximum performance"
      ],
      results: [
        "Successfully processed massive multimodal dataset",
        "Achieved efficient parallel processing with CUDA",
        "Created robust architecture for multimodal learning"
      ],
      hasDemo: true,
      demoUrl: "https://intuition.dev/news/world-model-fashion"
    },
    4: {
      id: 4,
      title: "Mujoco Simulator Robot Arm",
      description: "Comprehensive robot arm simulation and data collection system with multiple environment support.",
      fullDescription: `This project involves the development of a comprehensive robot arm simulation and data collection system using the Mujoco physics engine. The system supports multiple robot arm models including SO100, Franka, and Arx, providing a flexible platform for robotics research and development.

The data collection pipeline incorporates inverse-kinematics calculations to generate realistic robot movements. The system implements end-effector joint calculations to ensure accurate positioning and movement. Over 5 hours of robot task data were collected, providing valuable datasets for machine learning and robotics research.

The project demonstrates expertise in robotics simulation, physics engines, and data collection methodologies. The use of modern tools like Huggingface, Pandas, and PyArrow showcases proficiency in data management and ML workflows.`,
      images: [
        "https://via.placeholder.com/800x500/333/ffffff?text=Mujoco+Simulation",
        "https://via.placeholder.com/800x500/333/ffffff?text=Robot+Arm+Control",
        "https://via.placeholder.com/800x500/333/ffffff?text=Data+Collection+Pipeline"
      ],
      features: [
        "Designed data collection pipeline with inverse-kinematics",
        "Implemented end-effector joint calculations",
        "Collected 5+ hours of robot task data",
        "Supported multiple robot arms (SO100, Franka, Arx)",
        "Real-time simulation and data recording"
      ],
      stack: ["Mujoco", "Huggingface", "CAD", "Pandas", "PyArrow", "PySide6", "MediaPy"],
      challenges: [
        "Implementing accurate inverse-kinematics calculations",
        "Supporting multiple robot arm models with different configurations",
        "Collecting and managing large volumes of simulation data"
      ],
      results: [
        "Successfully collected 5+ hours of high-quality robot task data",
        "Created flexible system supporting multiple robot arm models",
        "Developed efficient data collection and processing pipeline"
      ],
      hasProject: true,
      projectUrl: "https://github.com/arulloomba1/mujoco_data_collector.git"
    },
    5: {
      id: 5,
      title: "Snek Game",
      description: "Feature-rich snake game with extensive customization options and cross-platform support.",
      fullDescription: `Snek Game is a comprehensive implementation of the classic snake game, featuring extensive customization options and cross-platform support. The project consists of over 1000 lines of C/C++ code, implementing custom game mechanics and advanced features.

The game includes 30+ unique snake characters, each with distinct visual styles and behaviors. The system features 75+ modular map layouts, providing diverse gameplay experiences. The JavaScript-based UI/UX ensures cross-platform compatibility, allowing the game to run seamlessly across different operating systems.

This project demonstrates expertise in game development, graphics programming with OpenGL, and cross-platform development. The use of tools like Docker and Valgrind showcases proficiency in containerization and debugging.`,
      images: [
        "https://via.placeholder.com/800x500/333/ffffff?text=Game+Interface",
        "https://via.placeholder.com/800x500/333/ffffff?text=Custom+Snake+Characters",
        "https://via.placeholder.com/800x500/333/ffffff?text=Modular+Map+Layouts"
      ],
      features: [
        "Developed 1000+ lines of C/C++ code with custom game mechanics",
        "Created 30+ unique snake characters and 75+ modular map layouts",
        "Implemented JavaScript-based UI/UX for cross-platform support",
        "Advanced graphics rendering with OpenGL",
        "Comprehensive game state management"
      ],
      stack: ["C", "C++", "Makefile", "Git", "OpenGL", "Valgrind", "Docker"],
      challenges: [
        "Implementing complex game mechanics in C/C++",
        "Creating modular map system with 75+ layouts",
        "Ensuring cross-platform compatibility"
      ],
      results: [
        "Successfully created feature-rich game with 1000+ lines of code",
        "Developed extensive customization system with 30+ characters",
        "Achieved cross-platform compatibility"
      ]
    },
    6: {
      id: 6,
      title: "S1XT33N Voice-Controlled Robot Car",
      description: "Autonomous vehicle system with voice command recognition and custom circuit design for optimal performance.",
      fullDescription: `S1XT33N is an autonomous robot car system that combines voice recognition, custom circuit design, and advanced control systems. The project features a voice-activated control system capable of recognizing 4+ distinct commands, enabling intuitive human-robot interaction.

The custom motor controller and power management circuits were designed from scratch, requiring expertise in analog circuit design and embedded systems. The system utilizes PWM (Pulse Width Modulation) and current-controlled sources for precise digital motor regulation. The voice classification system uses PCA (Principal Component Analysis) with optimized hyperparameters to achieve high accuracy in command recognition.

This project demonstrates expertise in embedded systems, signal processing, analog circuit design, and machine learning. The integration of hardware and software components showcases a comprehensive understanding of robotics systems.`,
      images: [
        "https://via.placeholder.com/800x500/333/ffffff?text=Robot+Car+Design",
        "https://via.placeholder.com/800x500/333/ffffff?text=Custom+Circuit+Board",
        "https://via.placeholder.com/800x500/333/ffffff?text=Voice+Control+System"
      ],
      features: [
        "Developed voice-activated control system with 4+ command recognition",
        "Designed and implemented custom motor controller and power management circuits",
        "Applied PWM and current-controlled sources for digital motor regulation",
        "Implemented PCA-based voice classification with optimized hyperparameters",
        "Real-time voice processing and motor control"
      ],
      stack: ["Arduino", "Embedded C", "PWM", "PCA", "Signal Processing", "Analog Circuits"],
      challenges: [
        "Designing custom motor controller circuits",
        "Implementing accurate voice recognition with PCA",
        "Integrating hardware and software components"
      ],
      results: [
        "Successfully created voice-controlled robot car system",
        "Achieved high accuracy in voice command recognition",
        "Developed efficient custom circuit designs"
      ]
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-detail-container">
          <h1>Project Not Found</h1>
          <button onClick={() => navigate('/projects')}>Back to Projects</button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <button className="back-button" onClick={() => navigate('/projects')}>
          ← Back to Projects
        </button>

        <div className="project-header">
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.description}</p>
        </div>

        <div className="project-content">
          <div className="project-main">
            <div className="project-description">
              <h2>Overview</h2>
              <p>{project.fullDescription}</p>
            </div>

            <div className="project-images">
              <h2>Project Images</h2>
              <div className="images-grid">
                {project.images.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image} alt={`${project.title} - Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="project-features">
              <h2>Key Features</h2>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-stack">
              <h2>Technology Stack</h2>
              <div className="stack-tags">
                {project.stack.map((tech, index) => (
                  <span key={index} className="stack-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-challenges">
              <h2>Challenges</h2>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="project-results">
              <h2>Results</h2>
              <ul>
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>

            <div className="project-links">
              {project.hasDemo && (
                <a 
                  href={project.demoUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project Demo
                </a>
              )}
              {project.hasProject && (
                <a 
                  href={project.projectUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;



