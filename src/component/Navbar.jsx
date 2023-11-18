// Navigation.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const user = {
    results: {
      id: 843784,
      name: "omar",
    },
  };
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link>
            <span className="text-sm lg:text-lg font-semibold px-2 ">
              Your Logo
            </span>
          </Link>
        </div>

        {/* Middle: Dashboard and Add Product (Visible on Mobile Too) */}
        {user?.results ? (
          <div className="flex-grow md:flex md:justify-center ">
            <a className="px-1"> Login as{user?.results?.name}</a>
            <Link to={"/something"}>Dashboard</Link>
            <Link className="px-1">Add Blog</Link>
            <Link>Logout</Link>
          </div>
        ) : (
          <div className="flex-grow md:flex md:justify-center ">
            <Link to={"/register"}>Register</Link>

            <Link className="px-1" to={"/login"}>
              Login
            </Link>
          </div>
        )}

        {/* Right Side: Navigation Links */}
        <nav className="hidden md:flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/blog" className="px-1">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
          {/* Add more links as needed */}
        </nav>

        {/* Mobile Hamburger Menu */}
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <nav className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <Link
           to="/"
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={toggleMobileMenu}
          >
            Blog
          </Link>
          <Link
          to="/about"
          className="block py-2 px-4 hover:bg-gray-700"
          onClick={toggleMobileMenu}
        >
          About
        </Link>
        <Link
        to="/services"
        className="block py-2 px-4 hover:bg-gray-700"
        onClick={toggleMobileMenu}
      >
        Services
      </Link>
      <Link
      to="/contact"
      className="block py-2 px-4 hover:bg-gray-700"
      onClick={toggleMobileMenu}
    >
      Contact
    </Link>
          {/* Add more links as needed */}
          {/* Additional Links (Always Visible) */}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
