import React from "react";
import BlogePage from "../component/BlogePage";

const Blog = () => {
  return (
    <div>
    <div className="px-4 py-40 bg-black mx-auto">
      <div>
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5  text-white text-center">
          Blog Page
        </h1>
      </div>
      
    </div>
    {/*  bloge Container */}
    <div className="w-3/4 mx-auto">
    <BlogePage />
  </div>
    </div>
  );
};

export default Blog;
