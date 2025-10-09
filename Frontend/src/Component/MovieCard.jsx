import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StarIcon, Heart } from 'lucide-react';
import { useFavorites } from '../Context/FavoritesContext';
import './MovieCard.css';
import timeFormat from '../lib/timeformat';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((m) => m._id === movie._id);

  return (
    <div className="movie-card">
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          window.scrollTo(0, 0);
        }}
        src={movie.poster_path}
        alt={movie.title}
        className="movie-image"
      />

      <div className="movie-favorite" onClick={() => toggleFavorite(movie)}>
        {isFavorite ? <Heart className="heart-icon filled" fill='red'/> : <Heart className="heart-icon" />}
      </div>

      <p className="movie-title">{movie.title}</p>

      <p className="movie-meta">
        {new Date(movie.release_date).getFullYear()} ·{' '}
        {movie.genres.slice(0, 4).map((genre) => genre.name).join(' | ')} · {timeFormat(movie.runtime)}
      </p>

      <div className="movie-footer">
        <button
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            window.scrollTo(0, 0);
          }}
          className="buy-button"
        >
          Buy Tickets
        </button>
        <p className="rating">
          <StarIcon className="star-icon" />
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
