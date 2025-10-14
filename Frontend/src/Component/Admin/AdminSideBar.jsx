import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets-3/assets'
import './AdminSidebar.css'
const AdminSideBar = () => {
  const User = {
    FirstName: "admin",
    LastName: "user",
    imageUrl: "assets.profile"
  }

  const AdminNavbarLink = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboardIcon /> },
    { name: "Add Show", path: "/admin/add-show", icon: <PlusSquareIcon /> },
    { name: "List Show", path: "/admin/list-show", icon: <ListIcon /> },
    { name: "List Booking", path: "/admin/list-booking", icon: <ListCollapseIcon /> }
  ]

  return (
    <div className="side-bar">
      <div className="user-info">
        <img src={assets.profile} alt="user" />
        <p>{User.FirstName} {User.LastName}</p>
      </div>

      {AdminNavbarLink.map((item, index) => (
        <NavLink end
          to={item.path} 
          key={index}
          className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
        >
          <span className="icon">{item.icon}</span>
          <span className="name">{item.name}</span>
        </NavLink>
      ))}
    </div>
  )
}

export default AdminSideBar
