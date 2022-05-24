import React from 'react';
import { addToWatchList, removeWatched } from './services/supabase-utils';

export default function MovieItem({ searchWatchList, movie, isOnWatchList }) {
  
  const watched = isOnWatchList(movie.id);

  async function handleClickWatch() {
    await addToWatchList({
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
      api_id: movie.id,
    });
      
    await searchWatchList();
  }
    
  async function handleRemoveClick() {

    await removeWatched(movie.id);
    await searchWatchList();
  }


  return (
    <div onClick={handleClickWatch} style={{ backgroundColor: watched ? 'gold' : 'grey' }}>
      <h3>{movie.title}</h3>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      <p>{movie.overview}</p>
    </div>
  );
}
