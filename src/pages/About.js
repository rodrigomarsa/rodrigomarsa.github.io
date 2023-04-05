import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="About">
      <h1>Sobre mim</h1>
      <h2>
        Sou engenheiro agrônomo apaixonado por tecnologia, após muito tempo dedicado na
        área de agronomia, estou em transição de carreira para o desenvolvimento web
        através do curso da
        {' '}
        <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>
        , aonde aprendi muito sobre ReactJS em front-end e NodeJS em back-end, além de
        várias outras hard-skills e soft-skills, bem como metodologias agéis.
        Nas horas vagas adoro ficar com minha família e praticar esportes.
      </h2>
    </div>
  );
}

export default About;
