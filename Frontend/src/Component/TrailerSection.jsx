import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlurCircle from './BlurCircle';
import { PlayCircleIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import './TrailerSection.css';

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(null);
  const [shows, setShows] = useState([]);

  const url = 'http://localhost:8000';

  const fetchShows = async () => {
    try {
      const response = await axios.get(`${url}/api/movie/movieList`);
      if (response.data.success) {
        const movies = response.data.data;
        setShows(movies);

        if (movies.length > 0) {
          setCurrentTrailer(movies[0]); 
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.message || 'Server Error');
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <div className="trailer-container">
      <div className="trailer-section">
        <p className="current-trailer-label">Trailer</p>

        {/* Main Trailer */}
        <div className="current-trailer-display">
          <BlurCircle />

          {currentTrailer?.movieUrl ? (
            <iframe
              width="100%"
              height="100%"
              src={currentTrailer.movieUrl}
              title="Movie Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <p className="no-trailer-text">No trailer available</p>
          )}
        </div>

        {/* Thumbnails */}
        <div className="trailer-thumbnails-wrapper">
          {shows.map((trailer) => (
            <div
              key={trailer._id}
              className={`trailer-thumb ${
                trailer.movieUrl === currentTrailer?.movieUrl ? 'active' : ''
              }`}
              onClick={() => setCurrentTrailer(trailer)}
            >
              <img
                src={`${url}/uploads/${trailer.image}`}
                alt={trailer.name}
              />
              <PlayCircleIcon className="play-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
