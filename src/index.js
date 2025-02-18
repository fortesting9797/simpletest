// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optionally, include your styles
import App from './App'; // Import your main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
