import React from 'react';
import '../styles/Backend.css';

function Backend() {
  return (
    <div className="Backend">
      <h1>Projetos de Back-end</h1>
      <ul className="container_back">
        <li>
          <a
            href="https://github.com/rodrigomarsa/talker-manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talker Manager
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rodrigomarsa/store-manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            Store Manager
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rodrigomarsa/blogs-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            API de Blogs
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rodrigomarsa/trybesmith"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trybesmith
          </a>
        </li>
        <li>
          <a
            href="https://trybe-futebol-clube-production-60be.up.railway.app"
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
