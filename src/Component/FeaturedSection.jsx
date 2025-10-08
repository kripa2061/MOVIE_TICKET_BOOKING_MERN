// src/Component/FeaturedSection.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import './FeaturedSection.css';
import BlurCircle from './BlurCircle';
import { dummyShowsData } from '../assets-3/assets';
import MovieCard from './MovieCard';

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className="featured-section">
      <div className="featured-header">
        <BlurCircle top="0" right="-80px" />
        <p className="featured-title">Now Showing</p>
        <button onClick={() => navigate('/movies')} className="view-all-button">
          View All
          <ArrowRightIcon className="arrow-icon" />
        </button>
      </div>

      <div className="movie-grid">
        {dummyShowsData.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      <div className="featured-row"></div>
      <div className="featured-row"></div>

      <div className="show-more-wrapper">
        <button
          onClick={() => {
            navigate('/movies');
            scrollTo(0, 0);
          }}
          className="show-more-button"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
