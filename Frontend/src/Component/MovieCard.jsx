import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";
import isoTimeFormat from "../lib/ISOTIMEFORMAT";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const url = "http://localhost:8000";

  return (
    <div className="adm-show-box">
      {movie && (
        <img
          src={`${url}/uploads/${movie.image}`}
          alt={movie.name}
          className="adm-show-image"
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            window.scrollTo(0, 0);
          }}
        />
      )}

      <p className="adm-show-title">{movie.name}</p>

      <div className="adm-show-price-rating">
        <p className="adm-show-price">Rs. {movie.price}</p>
      </div>

      <div className="adm-show-datetime">
        {movie.datetime && movie.datetime.length > 0 ? (
          movie.datetime.map((d, idx) => {
            const isoString = `${d.date.split("T")[0]}T${d.time || "00:00"}:00`;
            return (
              <span key={idx}>
                {isoTimeFormat(isoString)}
                {idx < movie.datetime.length - 1 && ", "}
              </span>
            );
          })
        ) : (
          <span>No showtimes</span>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
