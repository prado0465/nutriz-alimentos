import React from 'react';
import './Hero.css';  

function Hero() {
  const heroImageUrl = 'https://nutriz.com.br/static/media/logo.c654380388ad2deaec40.png'; 

  return (
    <div className="hero">
      <img src={heroImageUrl} alt="Hero" className="hero-image" /> 
      <div className="hero-content">
        <h1>Bem-vindo à Nutriz Alimentos</h1>
        <p className='hero-p'>Saúde e qualidade em cada produto.</p>
      </div>
    </div>
  );
}

export default Hero;
