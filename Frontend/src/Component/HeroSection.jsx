import React from "react";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets-3/assets";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <img src={assets.marvelLogo} alt="Marvel Logo" className="marvel-logo" />

      <h1 className="movie-title">
        Guardians <br /> of the Galaxy
      </h1>

      <div className="movie-info">
        <span>Action | Adventure | Sci-Fi</span>
        <div className="info-item">
          <CalendarIcon className="icon" /> <span>2018</span>
        </div>
        <div className="info-item">
          <ClockIcon className="icon" /> <span>2h 8m</span>
        </div>
      </div>

      <p className="movie-description">
        In a post-apocalyptic world where cities ride on wheels and consume each other to survive,
        two people meet in London and try to stop a conspiracy.
      </p>

      <button onClick={() => navigate("/movies")} className="explore-button">
        Explore Movies
        <ArrowRightIcon className="icon" />
      </button>
    </div>
  );
};

export default HeroSection;
