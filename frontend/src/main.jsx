import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import i18n configuration
import './languages/Language';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);