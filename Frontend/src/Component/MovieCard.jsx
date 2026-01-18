import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import './MovieCard.css';
import isoTimeFormat from '../lib/ISOTIMEFORMAT';
import axios from 'axios';

const MovieCard = () => {
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);
  const url = "http://localhost:8000";

 

    const fetchShows = async () => {
      try {
        const response = await axios.get(`${url}/api/movie/movieList`);
        if (response.data.success) {
          toast.success("Movies Fetched");
          setShows(response.data.data);
        } else {
          toast.error(response.data.message);
        }
      } catch (err) {
        toast.error(err.message || "Server Error");
      }
    };

  useEffect(()=>{
    fetchShows()
  },[])

    // empty dependency array = run once

  return (
    <div className="movie-cards-container">
      {shows.length === 0 ? (
        <p>No movies available</p>
      ) : (
        shows.map((item) => (
          <div key={item._id} className="adm-show-box">
            {item.image && (
              <img
                src={`${url}/uploads/${item.image}`}
                alt={item.name}
                className="adm-show-image"
                onClick={() => {
                  navigate(`/movies/${item._id}`);
                  window.scrollTo(0, 0);
                }}
              />
            )}
            <p className="adm-show-title">{item.name}</p>
            <div className="adm-show-price-rating">
              <p className="adm-show-price">Rs. {item.price}</p>
            </div>
            <div className="adm-show-datetime">
              {item.datetime && item.datetime.length > 0 ? (
                item.datetime.map((d, idx) => {
                  const isoString = `${d.date.split("T")[0]}T${d.time || "00:00"}:00`;
                  return (
                    <span key={idx}>
                      {isoTimeFormat(isoString)}
                      {idx < item.datetime.length - 1 && ", "}
                    </span>
                  );
                })
              ) : (
                <span>No showtimes</span>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieCard;
