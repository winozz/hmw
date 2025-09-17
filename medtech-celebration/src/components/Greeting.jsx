import React from 'react';
import Card from './Card';
import './Greeting.css';

const Greeting = ({ name = "Healthcare Professionals", subtitle = "Celebrating Innovation in Healthcare" }) => {
  const highlights = [
    { label: "Precision Medicine", description: "Personalized treatment approaches" },
    { label: "AI Diagnostics", description: "Advanced diagnostic capabilities" },
    { label: "Drug Innovation", description: "Breakthrough pharmaceutical research" },
    { label: "Research Excellence", description: "Cutting-edge medical research" }
  ];

  return (
    <Card variant="primary" padding="large" className="greeting">
      <div className="greeting__header">
        <h1 className="greeting__title">Medical Technology Week 2025</h1>
        <h2 className="greeting__subtitle">{subtitle}</h2>
      </div>
      
      <div className="greeting__message">
        <p className="greeting__welcome">
          Welcome, <span className="greeting__name">{name}</span>
        </p>
        <p className="greeting__description">
          Join us in celebrating the incredible advances in medical technology 
          that are transforming healthcare and improving patient outcomes worldwide.
        </p>
      </div>
      
      <div className="greeting__highlights">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight-item">
            <h3 className="highlight-item__title">{highlight.label}</h3>
            <p className="highlight-item__description">{highlight.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Greeting;