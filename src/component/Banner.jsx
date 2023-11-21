// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5  text-white">
          Welcome to our Blog
        </h1>
        <p className="text-gray-300 lg:w-3/5 mx-auto mb-5 font-primary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsa quo rerum fugit architecto error unde dolores illum. Animi iure alias id dignissimos reprehenderit expedita.</p>
        <div>
        <Link className="font-medium hover:text-orange-500 text-white inline-flex items-center">Learn More <FaArrowRight className="mt-1 ml-2" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
