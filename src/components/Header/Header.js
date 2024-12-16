import React, { useState } from 'react';
import logo from "../images/innov.png";
import { Link } from 'react-router-dom';
import { GiSundial } from "react-icons/gi";
import { GiMoonBats } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for hamburger and close menu

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`border-b border-gray-200 shadow-sm transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" width={50} height={50} className="" />
          <span
            className={`font-bold text-lg ml-2 transition-colors duration-500 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}
          >
            Innovimagine
          </span>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="flex items-center sm:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {isMenuOpen ? (
              <FiX className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            ) : (
              <FiMenu className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            )}
          </button>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden sm:flex space-x-8 items-center">
          <Link
            to="/"
            className={`text-sm font-medium hover:text-blue-800 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium hover:text-blue-800 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}
          >
            About
          </Link>
          <Link
            to="/products"
            className={`text-sm font-medium hover:text-blue-800 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium hover:text-blue-800 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}
          >
            Contact
          </Link>

          {/* FAQ Button */}
          <Link to="/faq">
            <button
              className={`px-4 py-2 rounded-md transition duration-300 ${
                isDarkMode
                  ? 'bg-red-600 text-gray-200 hover:bg-red-700'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              FAQ
            </button>
          </Link>

          {/* Dark/Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-transform duration-300 hover:scale-110"
          >
            {isDarkMode ? (
              <GiSundial className="h-6 w-6 text-yellow-500" />
            ) : (
              <GiMoonBats className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`absolute top-16 left-0 w-full bg-gray-700 sm:hidden transition-all duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
            }`}
          >
            <nav className="flex flex-col items-center py-4">
              <Link
                to="/"
                onClick={toggleMenu}
                className="py-2 text-white hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="py-2 text-white hover:text-blue-400"
              >
                About
              </Link>
              <Link
                to="/products"
                onClick={toggleMenu}
                className="py-2 text-white hover:text-blue-400"
              >
                Products
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="py-2 text-white hover:text-blue-400"
              >
                Contact
              </Link>
              <Link to="/faq" onClick={toggleMenu}>
                <button className="mt-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">
                  FAQ
                </button>
              </Link>

              {/* Dark/Light Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                className="mt-4 p-2 rounded-full hover:scale-110"
              >
                {isDarkMode ? (
                  <GiSundial className="h-6 w-6 text-yellow-500" />
                ) : (
                  <GiMoonBats className="h-6 w-6 text-gray-800" />
                )}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
