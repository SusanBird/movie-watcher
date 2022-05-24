import React, { useState } from 'react';
import MovieItem from './MovieItem';
import { searchMovies } from './services/fetch-utils';
import { logout } from './services/supabase-utils';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const movieData = await searchMovies(query);

    // eslint-disable-next-line no-console
    console.log(movieData);

    setMovies(movieData.results);
  }

  return (
    <div>
      <header>
        <a href="./search">Search</a>
        <a href="./watch-list">Watch List</a>
        <a href="./" onClick={logout}>
          Logout
        </a>
      </header>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <div className='movie-list'>
        {movies.map((movie, i) => 
          <MovieItem key={movie.title + i} {...movie} />
        )}
      </div>
    </div>
  );
}
