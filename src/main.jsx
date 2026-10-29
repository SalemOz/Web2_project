import React from 'react';
import { createRoot } from 'react-dom/client';
import 'uikit/dist/css/uikit.min.css';
import './styles/global.css';
import App from './App.jsx';
import uikit from 'uikit';
import uikitIcons from 'uikit/dist/js/uikit-icons';

uikit.use(uikitIcons);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
