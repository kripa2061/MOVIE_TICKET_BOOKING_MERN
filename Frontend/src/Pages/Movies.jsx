// Movies.jsx
import React, { useEffect, useState, useRef } from 'react';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import MovieCard from '../Component/MovieCard';

const Movies = () => {
  const [shows, setShows] = useState([]);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return; // prevents duplicate fetch
    fetched.current = true;

    axios.get("http://localhost:8000/api/movie/movieList")
      .then(res => {
        if (res.data.success) setShows(res.data.data);
        else toast.error(res.data.message);
      })
      .catch(err => toast.error(err.message || "Server Error"));
  }, []);

  return <MovieCard shows={shows} />;
};

export default Movies;
