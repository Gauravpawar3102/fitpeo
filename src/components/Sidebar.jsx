import React from 'react';
import logo from '../assets/logo-app.png';
import profile from '../assets/profile-image.jpg';
function Sidebar() {
  return (
    <div className="sidebar-container pl-8 py-6 w-1/4">
      <img className="sidebar-logo h-auto w-10" src={logo} alt="logo" />
      <div className="admin-profile-container flex m-2 p-4 bg-slate-100">
        <img
          className="admin-picture h-10 rounded-full w-10 object-contain"
          src={profile}
          alt="profile"
        />
        <div className="admin-details">
          <div className="Minimal-UI">Minimal UI</div>
          <div className="admin-tag">admin</div>
        </div>
      </div>
      <div className="general-container">
        <div className="sidebar-general font-bold">GENERAL</div>

        <ol>
          <li>App</li>
          <li>E-Commerce</li>
          <li>Analytics</li>
          <li>Banking</li>
          <li>Booking</li>
        </ol>
      </div>
      <div className="management-container">
        <div className="sidebar-management font-bold">MANAGEMENT</div>

        <ol>
          <li>User</li>
          <li>E-Commerce</li>
          <li>Blog</li>
        </ol>
      </div>
      <div className="app-container ">
        <div className="sidebar-app font-bold"> APP</div>
        <ol>
          <li>Mail</li>
        </ol>
      </div>
    </div>
  );
}

export default Sidebar;
