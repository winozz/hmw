import React, { useState, useEffect } from 'react';
import Card from './Card';
import './PersonalPhoto.css';

const PersonalPhoto = ({ 
  imageSrc, 
  message = "I am proud of her",
  name = "Amazing Achievement",
  description = "Celebrating excellence in medical technology",
  width = "500px",
  height = "375px"
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset states when imageSrc changes
  useEffect(() => {
    setImageError(false);
    setImageLoaded(false);
    setIsLoading(true);
  }, [imageSrc]);

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setIsLoading(false);
  };

  return (
    <div className="personal-photo-container">
      <Card className="personal-photo-card" padding="large">
        <div className="personal-photo__header">
          <h2 className="personal-photo__message">{message}</h2>
          <h3 className="personal-photo__name">{name}</h3>
        </div>
        
        <div 
          className="personal-photo__image-container"
          style={{ width, height }}
        >
          {!imageSrc ? (
            <div className="personal-photo__no-image">
              <div className="no-image-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
              </div>
              <h4 className="no-image-title">No Image Provided</h4>
              <p className="no-image-message">Please add an image source</p>
            </div>
          ) : !imageError ? (
            <>
              {isLoading && (
                <div className="personal-photo__loading">
                  <div className="loading-spinner"></div>
                  <p>Loading image...</p>
                </div>
              )}
              <img 
                src={imageSrc} 
                alt={name}
                className={`personal-photo__image ${imageLoaded ? 'loaded' : ''}`}
                onError={handleImageError}
                onLoad={handleImageLoad}
                style={{ display: isLoading ? 'none' : 'block' }}
              />
              {imageLoaded && (
                <div className="personal-photo__overlay">
                  <div className="personal-photo__celebration">
                    <span className="celebration-icon">★</span>
                    <span className="celebration-text">Medtech Excellence</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="personal-photo__fallback">
              <div className="fallback-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                  <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
                  <path d="m21 21-2-2"/>
                  <path d="m19 19-2-2"/>
                  <path d="m7 7-2-2"/>
                  <path d="m5 5-2-2"/>
                </svg>
              </div>
              <h4 className="fallback-title">Image Not Available</h4>
              <p className="fallback-message">
                Failed to load: {imageSrc}<br/>
                Please check the file path and format
              </p>
              <div className="personal-photo__celebration">
                <span className="celebration-icon">★</span>
                <span className="celebration-text">Medtech Excellence</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="personal-photo__footer">
          <p className="personal-photo__description">{description}</p>
          <div className="personal-photo__badge">
            <span className="badge-text">Medical Technology Week 2025</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PersonalPhoto;