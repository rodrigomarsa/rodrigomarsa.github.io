import React from 'react';
import '../styles/Frontend.css';

function Frontend() {
  return (
    <div className="Frontend">
      <h1>Projetos de Front-end</h1>
      <ul className="container_front">
        <li>
          <a
            href="https://rodrigomarsa.github.io/app-recipes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            App de Receitas
          </a>
        </li>
        <li>
          <a
            href="https://rodrigomarsa.github.io/online-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            On-line Store
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Frontend;
