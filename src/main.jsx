import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes.jsx';
import GlobalStyles from '../styles/GlobalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes/>
    <GlobalStyles/>
  </React.StrictMode>
);
