import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MagicNumber from './components/MagicNumber';
import UpdateCount from './components/UpdateCount';
import MovieList from './components/movieList/MovieList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    {/* <MovieList /> */}
    <App/>
    {/* <App />
    <MagicNumber />
    <UpdateCount /> */}
  </div>
);

