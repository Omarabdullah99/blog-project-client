// Navigation.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLogout } from "../reudx/features/AuthSlice";
import { getAllBlogsSlice } from "../reudx/features/BlogSlice";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const users= JSON.parse(localStorage.getItem("blogprofile"))
  // console.log("localstorage",users)
  const {user}= useSelector((state)=>({...state.authentication}))
 // console.log('redux',user)

 const {allblog}= useSelector((state)=>({...state.blog}))
 console.log("navbar",allblog)
  const dispatch=useDispatch()

  useEffect(() => {
    if (!allblog.length) {
      dispatch(getAllBlogsSlice());
    }
  }, [dispatch, allblog]);
  //*Logout
  const handleLogOut= ()=>{
    dispatch(setLogout())
    // console.log("logout")
  }



  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link className="text-white">
            <span className="text-sm lg:text-lg font-semibold px-2 ">
              Your Logo
            </span>
          </Link>
        </div>

        {/* Middle: Dashboard and Add Product (Visible on Mobile Too) */}
        {user?.result ? (
          <div className="flex-grow md:flex md:justify-center ">
            <a className=" text-white"> Loginas:{user?.result?.name}</a>
            <Link className="text-white px-2" to={"/dashboard"}>Dashboard</Link>
            <Link to={"/addblog"} className="px-1 text-white">Add Blog</Link>
            <Link className="text-white" onClick={handleLogOut}>Logout</Link>
          </div>
        ) : (
          <div className="flex-grow md:flex md:justify-center ">
            <Link className="text-white" to={"/register"}>Register</Link>

            <Link  className="px-1 text-white" to={"/login"}>
              Login
            </Link>
          </div>
        )}

        {/* Right Side: Navigation Links */}
        <nav className="hidden md:flex space-x-4">
        <Link className="text-white" to="/">Home</Link>
        <Link  to="/blog" className="px-1 text-white">Blog</Link>
        <Link className="text-white" to="/about">About</Link>
        <Link className="text-white" to="/services">Services</Link>
        <Link className="text-white" to="/contact">Contact</Link>
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
            className="block py-2 px-4 hover:bg-gray-700 text-white"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="block py-2 px-4 hover:bg-gray-700 text-white"
            onClick={toggleMobileMenu}
          >
            Blog
          </Link>
          <Link
          to="/about"
          className="block py-2 px-4 hover:bg-gray-700 text-white"
          onClick={toggleMobileMenu}
        >
          About
        </Link>
        <Link
        to="/services"
        className="block py-2 px-4 hover:bg-gray-700 text-white"
        onClick={toggleMobileMenu}
      >
        Services
      </Link>
      <Link
      to="/contact"
      className="block py-2 px-4 hover:bg-gray-700 text-white"
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
