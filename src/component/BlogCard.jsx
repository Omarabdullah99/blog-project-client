/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import {FaUser} from 'react-icons/fa'

const BlogCard = ({ blogs,currentPage,selectedCategory,pageSize }) => {
  const blogCard = blogs.filter((blogs)=> !selectedCategory || blogs.category === selectedCategory).slice((currentPage - 1) * pageSize, currentPage * pageSize);

  console.log("blogcard", blogCard);
  // console.log(currentPage,pageSize,selectedCategory)
  const excerpt = (str) => {
    if (str?.length > 45) {
      str = str.substring(0, 45) + " ...";
    }
    return str;
  };

  const titleexcerpt = (str) => {
    if (str?.length > 45) {
      str = str.substring(0, 45) + " ...";
    }
    return str;
  };
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {blogCard &&
        blogCard.map((blog) => (
          <div key={blog?.id} className="p-3 shadow-lg rounded cursor-pointer text-black h-96">
            <div>
              <img src={blog?.imageFile} alt="" className="w-fit" />
            </div>
            <span className="">
            {blog?.tags?.map((tag) => (
                `#${tag}`
            ))}
          </span>
            <h3 className=" mb-2 font-bold text-sm cursor-pointer"> {titleexcerpt(blog?.title)} </h3>
           <Link to={`/blog/${blog?._id}`}> <p className="text-black"> {excerpt(blog?.description)}see more</p></Link>
            <p className="mb-2 text-sm text-gray-500"><FaUser className="inline-flex items-center mr-2" /> {blog?.name}</p>
          </div>
        ))}
    </div>
  );
};

export default BlogCard;
