import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import { searchMovies } from './services/fetch-utils';
import { logout } from './services/supabase-utils';
import { getWatchList } from './services/supabase-utils';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const movieData = await searchMovies(query);

    // eslint-disable-next-line no-console
    console.log(movieData);

    setMovies(movieData.results);
  }

  async function searchWatchList() {
    const onWatchList = await getWatchList();

    setWatchList(onWatchList);
  }

  useEffect(() => {
    searchWatchList();
  }, []);

  function isOnWatchList(api_id) {
    const movieMatch = watchList.find(
      (watchListItem) => Number(watchListItem.api_id) === Number(api_id)
    );

    return Boolean(movieMatch);
  }

  return (
    <div>
      <header>
        <a href="./search">Search</a>
        <a href="./watch-list">Watch List</a>
        <a href="./" onClick={logout}>Logout</a>
      </header>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <div className='movie-list'>
        {movies.map((movie, i) => 
          <MovieItem key={movie.title + i} {...movie} isOnWatchList={isOnWatchList} searchWatchList={searchWatchList} movie={movie}/>
        )}
      </div>
    </div>
  );
}
