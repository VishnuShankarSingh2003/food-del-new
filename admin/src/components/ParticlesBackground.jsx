// src/components/ParticlesBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  return (
    <div className="particles-background">
      <Particles
        options={{
          background: {
            color: {
              value: '#000', // Dark background
            },
          },
          particles: {
            color: {
              value: '#ffffff', // White particles
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3, // Speed of the particles
              direction: 'none', // Random directions
              outModes: {
                default: 'out', // Remove particles when they leave the canvas
              },
              random: true, // Random movement
              straight: false, // Allow varied paths
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
