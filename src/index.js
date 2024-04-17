import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { db } from "./firebase"
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <App  db={db}/>
  </React.StrictMode>
);

