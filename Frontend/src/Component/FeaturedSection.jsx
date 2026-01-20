

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import './FeaturedSection.css';
import BlurCircle from './BlurCircle';
import { dummyShowsData } from '../assets-3/assets';
import MovieCard from './MovieCard';
import axios from 'axios';
import toast from 'react-hot-toast';

const FeaturedSection = () => {
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);
  const url = "http://localhost:8000";
  const fetchShows = async () => {
    try {
      const response = await axios.get(`${url}/api/movie/movieList`);
      if (response.data.success) {
        setShows(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.message || "Server Error");
    }
  };

  useEffect(() => {
    fetchShows()
  }, [])
  return (
    <div className="featured-section">
      <div className="featured-header">
        <BlurCircle top="0" right="-80px" />
        <p className="featured-title">Now Showing</p>
        <button onClick={() => navigate('/movies')} className="view-all-button">
          View All
          <ArrowRightIcon className="arrow-icon" />
        </button>
      </ div>

      <div className="movie-grid">
        {shows.slice(0, 4).map((show) => (
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
