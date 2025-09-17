import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default', 
  padding = 'medium',
  hover = false,
  ...props 
}) => {
  const cardClasses = [
    'card',
    `card--${variant}`,
    `card--padding-${padding}`,
    hover && 'card--hover',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;