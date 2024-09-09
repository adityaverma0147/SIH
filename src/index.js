import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserInputProvider } from './UserInputContext';
import { createRoot } from 'react-dom/client';



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <UserInputProvider>
        <App />
        </UserInputProvider>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
