import './App.css';
import React from 'react';
import MovieList from './components/movieList/MovieList';

function App() {
  return (
    <div className='myDiv'>
      <div className='heading'>
        <h1>My First React App</h1>
      </div>
      <div>
        Learning our reactJS
      </div>

      <MovieList />
    </div>
  );
}

export default App;