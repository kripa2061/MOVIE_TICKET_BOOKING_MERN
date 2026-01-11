import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets-3/assets'
import { Menu, Search, TicketPlus, X } from 'lucide-react'
import "./Navbar.css";
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
const Navbar = ({data,setdata}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      <div className="navbar-component">
        <div className="navbar-logo">
          <Link to="/"><img src={assets.logo} alt="Logo" /></Link>
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <X className="close-icon" onClick={() => setIsOpen(false)} />
          <Link to="/" onClick={() => { window.scrollTo(0, 0); setIsOpen(false) }}>Home</Link>
          <Link to="/movies" onClick={() => { window.scrollTo(0, 0); setIsOpen(false) }}>Movies</Link>
          <Link to="/" onClick={() => { window.scrollTo(0, 0); setIsOpen(false) }}>Theaters</Link>
          <Link to="/" onClick={() => { window.scrollTo(0, 0); setIsOpen(false) }}>Releases</Link>
          <Link to="/favorite" onClick={() => { window.scrollTo(0, 0); setIsOpen(false) }}>Favorites</Link>
        </div>

        <div className="navbar-actions">
          <Search className="navbar-icon" />
          {!data?(
            <div onClick={()=>{navigate("/login")}}>
              <button>Login</button>
               </div>
          ):(
            <div> 
              {data.name[0].toUpperCase()}
            </div>
          )
          }

          {!isOpen && <Menu className="navbar-icon menu-icon" onClick={() => setIsOpen(true)} />}
        </div>
      </div>
    </>
  )
}

export default Navbar
