import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { RiFlag2Line } from 'react-icons/ri';
import { IoIosNotifications, IoMdContacts } from 'react-icons/io';
import profile from '../assets/profile-image.jpg';

function Navbar() {
  return (
    <div className="navbar-container flex justify-between w-full items-center ">
      <div className="search text-2xl">
        <FiSearch />
      </div>
      <div className="navbar-right-container gap-4 items-center justify-around text-2xl flex">
        <RiFlag2Line />
        <IoIosNotifications />
        <IoMdContacts />
        <img
          className="admin-picture h-10 rounded-full w-10 object-contain"
          src={profile}
          alt="profile"
        />
      </div>
    </div>
  );
}

export default Navbar;
