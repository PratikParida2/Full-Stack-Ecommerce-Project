import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-10 w-auto rounded bg-white p-1"
          />
          <span className="text-xl font-semibold">Admin Panel</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link to="/add" className="hover:text-gray-300 transition">
              Add Product
            </Link>
          </li>
          <li>
            <Link to="/remove" className="hover:text-gray-300 transition">
              Remove Product
            </Link>
          </li>
          <li>
            <Link to="/list" className="hover:text-gray-300 transition">
              View Products
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm transition">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;