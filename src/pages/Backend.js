import React from 'react';
import '../styles/Backend.css';

function Backend() {
  return (
    <div className="Backend">
      <h1>Projetos de Back-end</h1>
      <ul className="container_back">
        <li>
          <a
            className="talker-manager"
            href="https://github.com/rodrigomarsa/talker-manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talker Manager
          </a>
        </li>
        <li>
          <a
            className="store-manager"
            href="https://github.com/rodrigomarsa/store-manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            Store Manager
          </a>
        </li>
        <li>
          <a
            className="blogs-api"
            href="https://github.com/rodrigomarsa/blogs-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            API de Blogs
          </a>
        </li>
        <li>
          <a
            className="trybesmith"
            href="https://github.com/rodrigomarsa/trybesmith"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trybesmith
          </a>
        </li>
        <li>
          <a
            className="trybe-futebol-clube"
            href="https://tfc-frontend-production-60be.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            TFC - Trybe Futebol Clube
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Backend;
