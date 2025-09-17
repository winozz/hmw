import React from 'react';
import Card from './Card';
import Button from './Button';
import './PhotoPlaceholder.css';

const PhotoPlaceholder = ({ 
  title = "Medtech Week Celebration Photo", 
  width = "400px", 
  height = "300px",
  description = "Upload your celebration moment",
  onUpload,
  suggestions = [
    "Team celebrations",
    "Award ceremonies", 
    "Technology showcases",
    "Conference moments"
  ]
}) => {
  const handleUploadClick = () => {
    if (onUpload) {
      onUpload();
    }
    // In a real app, this would trigger a file picker
    console.log('Upload photo clicked');
  };

  return (
    <div className="photo-placeholder-container">
      <div 
        className="photo-placeholder"
        style={{ width, height }}
        onClick={handleUploadClick}
      >
        <div className="photo-placeholder__content">
          <div className="photo-placeholder__icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
          <h3 className="photo-placeholder__title">{title}</h3>
          <p className="photo-placeholder__description">{description}</p>
          <Button 
            variant="primary" 
            size="medium"
            onClick={handleUploadClick}
          >
            Choose Photo
          </Button>
        </div>
        
        <div className="photo-placeholder__border">
          <div className="corner corner--top-left"></div>
          <div className="corner corner--top-right"></div>
          <div className="corner corner--bottom-left"></div>
          <div className="corner corner--bottom-right"></div>
        </div>
      </div>
      
      {suggestions && suggestions.length > 0 && (
        <Card className="photo-suggestions" padding="medium">
          <h4 className="photo-suggestions__title">Capture the celebration:</h4>
          <ul className="photo-suggestions__list">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="photo-suggestions__item">
                {suggestion}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default PhotoPlaceholder;