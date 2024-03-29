import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';

function Footer() {
  return (
    <footer className="Footer">
      <a
        className="LinkedIn-link"
        href="https://www.linkedin.com/in/rodrigomarsa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={ linkedin } alt="github" width="40" />
      </a>
      <a
        className="GitHub-link"
        href="https://github.com/rodrigomarsa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={ github } alt="github" width="40" />
      </a>
      <a
        className="Gmail-link"
        href="mailto:rodrigomartins.agro@gmail.com"
      >
        <img src={ gmail } alt="gmail" width="40" />
      </a>
    </footer>
  );
}

export default Footer;
