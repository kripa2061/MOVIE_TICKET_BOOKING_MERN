import React from 'react';
import { useFavorites } from '../Context/FavoritesContext';
import MovieCard from '../Component/MovieCard';
import './Favorite.css'

const Factories = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div>
      <p className='favoritetext'>Your Favorite Movies</p>
    <div className="factories-container">
      {favorites.map((movie) => (
        <MovieCard movie={movie} key={movie._id} />
      ))}
    </div>
    </div>
  );
};

export default Factories;
