import React from 'react';
import Navigation from '../../componets/Navigation/index'; 
import './About.css';

function About() {
  return (
    <div className="about">
        <Navigation/> 
      <h2 className="about-titulo">Sobre a Nutriz Alimentos</h2>
      <div className="about-content">
        <img
          src="https://nutriz.com.br/static/media/qs_s3_img.ab17b5d859c42b0e5947.png"
          alt="Brocolis"
          className="about-image"
        />
        
          
          <p className="about-frase">
          <h1 className="about-titulo-h1"> Uma trajetória de crescimento e inovação</h1>
          <br /><br />
           Desde a nossa fundação em 2003, nos estabelecemos como referência no mercado de alimentos congelados. Em 2008, inauguramos nossa própria câmara frigorífica, aprimorando a logística e conquistando a confiança de nossos clientes. Em 2011, lançamos uma linha de produtos atacadistas, seguida pela reformulação visual de todas as embalagens em 2012.
          <br /><br />
          Ao longo do tempo, criamos as marcas BOM APETITE e MACERATA, destinadas a auxiliar a Nutriz a ter uma atuação estratégica no mercado, sendo utilizadas para a comercialização de alguns produtos da linha Nutriz e também para a distribuição de alguns alimentos em determinadas regiões do Brasil.
          <br /><br />
          Assim, desde o nosso início, continuamos evoluindo, expandindo e, cada vez mais oferecendo qualidade e variedade para todos os nossos clientes.
        </p>
      </div>
      <div className="about-info">
        <p className="about-text">
          <h1 className="about-titulo-h1">escolha consciente para alimentos congelados e de qualidade</h1>
         
          <br /><br />
           A Conquistamos presença no Brasil por meio de uma abordagem inovadora e com tecnologias avançadas que nos destacam no mercado.
          <br /><br />
          Garantimos a qualidade de nossos produtos o ano todo, desde a escolha das sementes até a entrega, com controle de resíduos e mão de obra responsável. Somos reconhecidos não apenas pela rapidez no processamento, mas também pelo frescor e qualidade.
          <br /><br />
          Com uma ampla gama de alimentos ultracongelados, livre de conservantes e em embalagens 100% recicláveis, proporcionamos praticidade, saúde e respeito ao meio ambiente, contando com uma seleção de insumos naturais para nutrição saudável que mantém o sabor e os nutrientes através de um processo de ultracongelamento de alta tecnologia.
        </p>
        <img
          src="https://nutriz.com.br/static/media/qs_s2_img.c1ada64c9603bd580931.png"
          alt="Qualidade Nutriz"
          className="about-info-image"
        />
      </div>
      <a
        href="https://nutriz.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="about-link"
        
      >
        Saiba Mais
      </a>
    </div>
  );
}

export default About;

