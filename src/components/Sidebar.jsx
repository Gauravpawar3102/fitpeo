import React from 'react';
import logo from '../assets/logo-app.png';
import profile from '../assets/profile-image.jpg';
import {
  MdOutlineAppRegistration,
  MdShoppingCart,
  MdAnalytics,
  MdOutlineEditCalendar,
  MdMail,
} from 'react-icons/md';
import { AiTwotoneBank } from 'react-icons/ai';
import { FaUser, FaShoppingCart, FaBlogger } from 'react-icons/fa';
import styled from 'styled-components';
const SidebarList = styled.button`
  li {
    background-color: white;
    padding: 0.5rem 0.25rem 0.5rem 0.25rem;
    border-radius: 1rem;
    color: black;
    &:hover {
      background-color: #eff8f3ff;
    }
  }
  li a {
    display: flex;
    color: black;
    gap: 1rem;
  }
  &:hover {
    color: #c9facdff;
  }
`;

function Sidebar() {
  return (
    <div className="sidebar-container pl-6 py-6 w-1/4 ">
      <img
        className="sidebar-logo h-6 w-10 object-contain "
        src={logo}
        alt="logo"
      />
      <div className="admin-profile-container rounded-lg flex my-4 w-9/10 p-2 items-center gap-4 bg-slate-100">
        <img
          className="admin-picture h-10 rounded-full w-10  object-contain"
          src={profile}
          alt="profile"
        />
        <div className="admin-details">
          <div className="Minimal-UI">Minimal UI</div>
          <div className="admin-tag text-slate-500">admin</div>
        </div>
      </div>
      <div className="general-container my-4  ">
        <div className="sidebar-general font-bold">GENERAL</div>

        <ul className="sidebarList flex flex-col  my-2 text-lg ">
          <SidebarList>
            <li>
              <a href="#" className="items-center flex">
                <MdOutlineAppRegistration />
                <span> App</span>
              </a>
            </li>
            <li>
              <a href="#" className="items-center flex">
                <MdShoppingCart />
                <span> E-Commerce</span>
              </a>
            </li>
            <li>
              <a href="#" className="items-center flex">
                <MdAnalytics />
                <span> Analytics</span>
              </a>
            </li>
            <li>
              <a href="#" className="items-center flex">
                <AiTwotoneBank />
                <span> Banking</span>
              </a>
            </li>
            <li>
              <a href="#" className="items-center flex">
                <MdOutlineEditCalendar />
                <span> Booking</span>
              </a>
            </li>
          </SidebarList>
        </ul>
      </div>
      <div className="management-container">
        <div className="sidebar-management font-bold">MANAGEMENT</div>

        <ul className="sidebarList flex flex-col  my-2 text-lg ">
          <SidebarList>
            <li>
              <a href="#" className="items-center flex">
                <FaUser />
                <span> User</span>
              </a>
            </li>{' '}
            <li>
              <a href="#" className="items-center flex">
                <FaShoppingCart />
                <span> E-Commerce</span>
              </a>
            </li>
            <li>
              <a href="#" className="items-center flex">
                <FaBlogger />
                <span>Blog</span>
              </a>
            </li>
          </SidebarList>
        </ul>
      </div>
      <div className="app-container ">
        <div className="sidebar-app font-bold"> APP</div>
        <ul className="sidebarList flex flex-col  my-2 text-lg ">
          <SidebarList>
            <li>
              <a href="#" className="items-center flex">
                <MdMail />
                <span>Mail</span>
              </a>
            </li>
          </SidebarList>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
