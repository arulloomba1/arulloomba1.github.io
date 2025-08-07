import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {

  
  const projects = [
    {
      id: 1,
      title: "Voice Recognition and Object Detection Model",
      description: "Advanced computer vision and voice synthesis system combining YOLO-v8 object detection with FPGA-based voice processing.",
      image: "https://via.placeholder.com/600x400/333/ffffff?text=Voice+Recognition",
      features: [
        "Developed YOLO-v8 model for 250+ household objects detection",
        "Implemented Voice Synthesis on FPGA using Verilog",
        "Created integrated conferencing application",
        "Stack: Python, Tensorflow, Verilog"
      ]
    },
    {
      id: 2,
      title: "RISC-V Neural Network",
      description: "Low-level neural network implementation at the assembly level with practical applications in stock market analysis.",
      image: "https://via.placeholder.com/600x400/333/ffffff?text=RISC-V+Neural+Network",
      features: [
        "Implemented matrix multiplication and ReLu in assembly",
        "Designed memory-efficient architecture with 10+ caches",
        "Created full machine learning interface using 32-bit registers",
        "Stack: C, C++, Assembly, Logism"
      ]
    },
    {
      id: 3,
      title: "MAE Encoder Pipeline",
      description: "Advanced triple-stream Masked-Autoencoder for multimodal data processing and analysis.",
      image: "https://via.placeholder.com/600x400/333/ffffff?text=MAE+Encoder+Pipeline",
      features: [
        "Engineered triple-stream architecture for visual and proprioceptive data",
        "Processed 500+GB of training data",
        "Implemented batch parallelization with CUDA",
        "Stack: PyTorch, OpenCV, Gym, NumPy, Tensorboard, CUDA, Weights & Biases"
      ],
      hasDemo: true,
      demoUrl: "https://intuition.dev/news/world-model-fashion"
    },
    {
      id: 4,
      title: "Mujoco Simulator Robot Arm",
      description: "Comprehensive robot arm simulation and data collection system with multiple environment support.",
      image: "https://via.placeholder.com/600x400/333/ffffff?text=Mujoco+Robot+Arm",
      features: [
        "Designed data collection pipeline with inverse-kinematics",
        "Implemented end-effector joint calculations",
        "Collected 5+ hours of robot task data",
        "Supported multiple robot arms (SO100, Franka, Arx)",
        "Stack: Mujoco, Huggingface, CAD, Pandas, PyArrow, PySide6, MediaPy"
      ],
      hasProject: true,
      projectUrl: "https://github.com/arulloomba1/mujoco_data_collector.git"
    },
    {
      id: 5,
      title: "Snek Game",
      description: "Feature-rich snake game with extensive customization options and cross-platform support.",
      image: "https://via.placeholder.com/600x400/333/ffffff?text=Snek+Game",
      features: [
        "Developed 1000+ lines of C/C++ code with custom game mechanics",
        "Created 30+ unique snake characters and 75+ modular map layouts",
        "Implemented JavaScript-based UI/UX for cross-platform support",
        "Stack: C#, Makefile, Git, OpenGL, Valgrind, Docker"
      ]
    },
    {
      id: 6,
      title: "S1XT33N Voice-Controlled Robot Car",
      description: "Autonomous vehicle system with voice command recognition and custom circuit design for optimal performance.",
      image: "https://via.placeholder.com/600x400/333/ffffff?text=S1XT33N+Robot+Car",
      features: [
        "Developed voice-activated control system with 4+ command recognition",
        "Designed and implemented custom motor controller and power management circuits",
        "Applied PWM and current-controlled sources for digital motor regulation",
        "Implemented PCA-based voice classification with optimized hyperparameters",
        "Stack: Arduino, Embedded C, PWM, PCA, Signal Processing, Analog Circuits"
      ]
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="header">
          <h1>Projects: Extended</h1>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.hasDemo && (
                    <a 
                      href={project.demoUrl || "mae_demos.html"} 
                      target={project.demoUrl ? "_blank" : "_self"}
                      rel={project.demoUrl ? "noopener noreferrer" : ""}
                    >
                      View Project Demo
                    </a>
                  )}
                  {project.hasProject && (
                    <a 
                      href={project.projectUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
