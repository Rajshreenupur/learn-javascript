import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import { db } from './firebase';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router> {/* Wrap entire application inside BrowserRouter */}
        <App db={db} />
      </Router>
    </Provider>
  </React.StrictMode>
);
