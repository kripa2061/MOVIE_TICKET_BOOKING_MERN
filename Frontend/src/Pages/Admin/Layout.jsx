import React from 'react';
import AdminNavbar from '../../Component/Admin/AdminNavbar';
import AdminSideBar from '../../Component/Admin/AdminSideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AdminNavbar />
      <div style={{ display: 'flex' }}>
        <AdminSideBar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}

export default Layout;
