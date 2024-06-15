import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './LearnRoutes/Main';
import { BrowserRouter } from 'react-router-dom';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);

