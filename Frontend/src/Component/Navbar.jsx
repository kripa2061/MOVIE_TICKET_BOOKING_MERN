import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets-3/assets'
import { Menu, Search, X } from 'lucide-react'
import "./Navbar.css";

const Navbar = ({ data, setData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setData(null);
    navigate("/login");
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      <div className="navbar-component">
        <div className="navbar-logo">
          <Link to="/"><img src={assets.logo} alt="Logo" /></Link>
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <X className="close-icon" onClick={() => setIsOpen(false)} />
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/movies" onClick={() => setIsOpen(false)}>Movies</Link>
          <Link to="/">Theaters</Link>
          <Link to="/">Releases</Link>
          <Link to="/favorite">Favorites</Link>
        </div>

        <div className="navbar-actions">
          <Search className="navbar-icon" />

          {!data ? (
            <button
              className='login-button'
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          ) : (
            <div
              className="profile-icon"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              {data?.email?.charAt(0).toUpperCase()}
            </div>
          )}

          {data && profileOpen && (
            <div className='profile-open'>
              <ul>
                <li onClick={() => navigate("/mybooking")}>My Booking</li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}

          {!isOpen && (
            <Menu
              className="navbar-icon menu-icon"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
