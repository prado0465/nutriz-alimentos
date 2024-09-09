import React from 'react';
import Hero from "../../componets/Hero/index";
import Navigation from "../../componets/Navigation/index";
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Navigation /> 
      <Hero />
      <section className="intro">
        <p>
          Nutriz Alimentos oferece os produtos mais saudáveis e naturais para você e sua família.
          Explore nossa variedade e descubra como podemos contribuir para sua saúde.
        </p>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Nutriz Alimentos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
