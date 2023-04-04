import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import AppProvider from './context/AppProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </HashRouter>,
);
