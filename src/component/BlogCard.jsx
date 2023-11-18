/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import {FaUser} from 'react-icons/fa'

const BlogCard = ({ blogs,currentPage,selectedCategory,pageSize }) => {
  const blogCard = blogs.filter((blogs)=> !selectedCategory || blogs.category === selectedCategory).slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // console.log("blogcard", blogCard);
  // console.log(currentPage,pageSize,selectedCategory)

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {blogCard &&
        blogCard.map((blog) => (
          <Link key={blog?.id} className="p-5 shadow-lg rounded cursor-pointer">
            <div>
              <img src={blog?.image} alt="" className="w-full" />
            </div>
            <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer"> {blog?.title} </h3>
            <p className="mb-2 text-sm text-gray-500"><FaUser className="inline-flex items-center mr-2" /> {blog?.author}</p>
            <p className="text-sm text-gray-500">Published:{blog?.published_date} </p>
          </Link>
        ))}
    </div>
  );
};

export default BlogCard;
