// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector} from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { getAllBlogsSlice, searchBlogsSlice } from "../reudx/features/BlogSlice";
import { useNavigate } from "react-router-dom";
import BlogCardCopy from "./BlogCardCopy";

const BlogePage = () => {
  const [search, setSearch] = useState("");
const dispatch =useDispatch()
const navigate=useNavigate()

  const {allblog}= useSelector((state)=>({...state.blog}))

  useEffect(() => {
    if (!allblog.length) {
      dispatch(getAllBlogsSlice());
    }
  }, [dispatch, allblog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchBlogsSlice(search));
      navigate(`/blogs/search?searchQuery=${search}`);
      setSearch("");
    } else {
      navigate("/");
    }
  };
  return (
    <div>
      {/*----------category section----- */}
    { /* <div>
      <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
  </div> */}
      {/*----------search section----- */}
      <div className="w-3/5 my-4">
      <form className="d-flex input-group" onSubmit={handleSubmit} >
      <input
        type="text"
        className="form-control"
        placeholder="Search blog title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        
      />
      <div style={{ marginTop: "5px", marginLeft: "5px" }}>
        <IoIosSearch  />
      </div>
    </form>
    </div>

      {/*  <BlogCard allblog={allblog} blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}  />  */}

      <div className="flex flex-col-reverse lg:flex-row gap-4">
      <div className="cardclass grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 h-[400px]"> 
      {allblog &&
        allblog?.map((item) => <BlogCardCopy key={item._id} {...item} />)}
      
      </div>
      <div><Sidebar /></div>
      </div>
      
    </div>
  );
};

export default BlogePage;
