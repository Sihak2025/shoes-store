import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        <div className="flex gap-20">
           <h1 className="text-red-600 text-xl font-bold tracking-wide">
          THE AUTEUR
        </h1>

         <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="text-red-500 border-b-2 border-red-500 pb-1">
            BROWSE
          </a>
          <a href="#" className="hover:text-red-400">NEW RELEASE</a>
          <a href="#" className="hover:text-red-400">WATCHLIST</a>
          <a href="#" className="hover:text-red-400">CATEGORIES</a>
        </nav>

        </div>

        <div className="flex items-center gap-4">
          
          <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search films..."
              className="bg-transparent outline-none text-xl text-white placeholder-gray-400"
            />
          </div>

          <FaBell className="text-gray-300 cursor-pointer hover:text-white" />

          <FaUserCircle className="text-2xl cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </header>
  );
};

export default Header;