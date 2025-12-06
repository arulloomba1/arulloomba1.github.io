import React from 'react';
import './Robotics.css';

const Robotics = () => {
  const roboticsVideos = [
    {
      id: 12,
      src: '/videos/MOV to MP4 Conversion (1).mp4',
      title: 'Robotics Experiment 6',
      description: 'Robotics experiment and progress'
    },
    {
      id: 13,
      src: '/videos/IMG 0859 (1).mp4',
      title: 'Robotics Experiment 7',
      description: 'Robotics experiment and progress'
    },
    {
      id: 14,
      src: '/videos/MOV to MP4 26912.mp4',
      title: 'Robotics Experiment 8',
      description: 'Robotics experiment and progress'
    },
    {
      id: 15,
      src: '/videos/MOV to MP4 518.mp4',
      title: 'Robotics Experiment 9',
      description: 'Robotics experiment and progress'
    },
    {
      id: 16,
      src: '/videos/MOV to MP4 Conversion.mp4',
      title: 'Robotics Experiment 10',
      description: 'Robotics experiment and progress'
    },
    {
      id: 1,
      src: '/videos/1-phone_reconstruction_slow_temp_slowed.mp4',
      title: 'Phone Reconstruction',
      description: 'Reconstruction demo'
    },
    {
      id: 2,
      src: '/videos/2-phone_input_strided_slow_temp_slowed.mp4',
      title: 'Phone Input Strided',
      description: 'Input strided demo'
    },
    {
      id: 3,
      src: '/videos/3-laptop_reconstruction_slow_temp_slowed.mp4',
      title: 'Laptop Reconstruction',
      description: 'Laptop reconstruction demo'
    },
    {
      id: 4,
      src: '/videos/4-laptop_input_strided_slow_temp_slowed.mp4',
      title: 'Laptop Input Strided',
      description: 'Laptop input strided demo'
    },
    {
      id: 5,
      src: '/videos/5-proprioception_plots_final_slowed.mp4',
      title: 'Proprioception Plots',
      description: 'Proprioception visualization'
    },
    {
      id: 6,
      src: '/videos/Arm Move 4.mp4',
      title: 'Arm Movement 4',
      description: 'Robot arm movement demonstration'
    },
    {
      id: 7,
      src: '/videos/IMG 3341 from CloudConvert.mp4',
      title: 'Robotics Experiment 1',
      description: 'Robotics experiment and progress'
    },
    {
      id: 8,
      src: '/videos/IMG 3584 from CloudConvert.mp4',
      title: 'Robotics Experiment 2',
      description: 'Robotics experiment and progress'
    },
    {
      id: 9,
      src: '/videos/IMG 3594 from CloudConvert.mp4',
      title: 'Robotics Experiment 3',
      description: 'Robotics experiment and progress'
    },
    {
      id: 10,
      src: '/videos/IMG 3778 from CloudConvert.mp4',
      title: 'Robotics Experiment 4',
      description: 'Robotics experiment and progress'
    },
    {
      id: 11,
      src: '/videos/IMG 9805 from CloudConvert.mp4',
      title: 'Robotics Experiment 5',
      description: 'Robotics experiment and progress'
    }
  ];

  return (
    <div className="robotics-page">
      <div className="robotics-container">
        <div className="robotics-header">
          <h1>Robotics</h1>
          <p>This is a portfolio of all work, experiments, progress, etc.</p>
        </div>

        <div className="videos-grid">
          {roboticsVideos.map(video => (
            <div key={video.id} className="video-item">
              <video controls preload="metadata">
                <source src={encodeURI(video.src)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Robotics;

