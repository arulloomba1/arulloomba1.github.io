import React from 'react';
import { motion } from 'framer-motion';
import './Robotics.css';

const Robotics = () => {
  const roboticsVideos = [
    { id: 12, src: '/videos/MOV to MP4 Conversion (1).mp4', title: 'Robotics Experiment 6' },
    { id: 13, src: '/videos/IMG 0859 (1).mp4', title: 'Robotics Experiment 7' },
    { id: 14, src: '/videos/MOV to MP4 26912.mp4', title: 'Robotics Experiment 8' },
    { id: 15, src: '/videos/MOV to MP4 518.mp4', title: 'Robotics Experiment 9' },
    { id: 16, src: '/videos/MOV to MP4 Conversion.mp4', title: 'Robotics Experiment 10' },
    { id: 1, src: '/videos/1-phone_reconstruction_slow_temp_slowed.mp4', title: 'Phone Reconstruction' },
    { id: 2, src: '/videos/2-phone_input_strided_slow_temp_slowed.mp4', title: 'Phone Input Strided' },
    { id: 3, src: '/videos/3-laptop_reconstruction_slow_temp_slowed.mp4', title: 'Laptop Reconstruction' },
    { id: 4, src: '/videos/4-laptop_input_strided_slow_temp_slowed.mp4', title: 'Laptop Input Strided' },
    { id: 5, src: '/videos/5-proprioception_plots_final_slowed.mp4', title: 'Proprioception Plots' },
    { id: 6, src: '/videos/Arm Move 4.mp4', title: 'Arm Movement 4' },
    { id: 7, src: '/videos/IMG 3341 from CloudConvert.mp4', title: 'Robotics Experiment 1' },
    { id: 8, src: '/videos/IMG 3584 from CloudConvert.mp4', title: 'Robotics Experiment 2' },
    { id: 9, src: '/videos/IMG 3594 from CloudConvert.mp4', title: 'Robotics Experiment 3' },
    { id: 10, src: '/videos/IMG 3778 from CloudConvert.mp4', title: 'Robotics Experiment 4' },
    { id: 11, src: '/videos/IMG 9805 from CloudConvert.mp4', title: 'Robotics Experiment 5' },
  ];

  return (
    <div className="robotics-page">
      <div className="robotics-container">
        <motion.div
          className="robotics-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Robotics</h1>
          <p>A portfolio of experiments, progress, and research in robotic manipulation and control.</p>
        </motion.div>

        <div className="videos-grid">
          {roboticsVideos.map((video, i) => (
            <motion.div
              key={video.id}
              className="video-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <video controls preload="metadata">
                <source src={encodeURI(video.src)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Robotics;
