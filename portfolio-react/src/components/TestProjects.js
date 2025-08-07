import React from 'react';

const TestProjects = () => {
  return (
    <div style={{ 
      background: '#000000', 
      color: '#ffffff', 
      minHeight: '100vh', 
      padding: '20px'
    }}>
      <h1>Test Projects Page</h1>
      <p>This is a test to see if the navigation is working properly.</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
      <div style={{ 
        background: '#00ff99', 
        color: '#000000', 
        padding: '20px', 
        margin: '20px 0',
        borderRadius: '8px'
      }}>
        <h2>Navigation Test</h2>
        <p>If you can see this, the Projects page is rendering correctly.</p>
      </div>
    </div>
  );
};

export default TestProjects;
