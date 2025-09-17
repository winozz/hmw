import React from 'react'
import Greeting from './components/Greeting'
import PhotoPlaceholder from './components/PhotoPlaceholder'
import PersonalPhoto from './components/PersonalPhoto'
import Card from './components/Card'
import './App.css'

function App() {
  const handlePhotoUpload = () => {
    // Handle photo upload logic here
    console.log('Photo upload triggered');
  };

  const infoCards = [
    {
      title: "This Week's Focus",
      content: "Celebrating breakthrough innovations in medical technology that are revolutionizing patient care and improving health outcomes worldwide."
    },
    {
      title: "Join the Movement", 
      content: "Be part of the global celebration recognizing the dedicated professionals and cutting-edge technologies shaping the future of healthcare."
    }
  ];

  return (
    <div className="app">
      <main className="main-content">
        <Greeting 
          name="Healthcare Heroes" 
          subtitle="Celebrating Innovation in Healthcare"
        />
        
        <section className="content-section">
          <h2 className="section-title">Personal Celebration</h2>
          <PersonalPhoto 
            imageSrc="/photo.jpeg"
            message="I am proud of her"
            name="Medical Technology Excellence"
            description="Recognizing outstanding achievements in advancing healthcare through innovation"
            width="500px"
            height="375px"
          />
        </section>
        
        <section className="content-section">
          <h2 className="section-title">Share More Celebrations</h2>
          <PhotoPlaceholder 
            title="Additional Medtech Week Memories"
            description="Share more celebration photos with the community"
            width="500px"
            height="375px"
            onUpload={handlePhotoUpload}
            suggestions={[
              "Team celebrations",
              "Award ceremonies", 
              "Technology showcases",
              "Conference moments"
            ]}
          />
        </section>
        
        <section className="info-section">
          <div className="info-grid">
            {infoCards.map((card, index) => (
              <Card key={index} hover className="info-card">
                <h3 className="info-card__title">{card.title}</h3>
                <p className="info-card__content">{card.content}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="footer__content">
          <p className="footer__text">
            Medical Technology Week 2025 • Celebrating Innovation in Healthcare
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
