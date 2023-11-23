// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Paginaation from "./Paginaation";
import CategorySelection from "./CategorySelection";
import Sidebar from "./Sidebar";
import { useDispatch} from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { searchBlogsSlice } from "../reudx/features/BlogSlice";
import { useNavigate } from "react-router-dom";

const BlogePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const pageSize=12;
  const [selectedCategory,setSelectedCategory]=useState(null)
  const [activeCategory,setActiveCategory]=useState(null)
  const [search, setSearch] = useState("");
const dispatch =useDispatch()
const navigate=useNavigate()

  useEffect(() => {
    async function fetchBlog() {
      let url = `http://localhost:5000/blog/allblogs?page=${currentPage}&limit=${pageSize}`;

      if(selectedCategory){
        url +=`&category=${selectedCategory}`
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlog();
  }, [currentPage,pageSize,selectedCategory]);
  console.log("allbologs", blogs);

  const handlePageChange=(pagenumber)=>{
    setCurrentPage(pagenumber)
  }
  const handleCategoryChange=(category)=>{
    setSelectedCategory(category)
    setCurrentPage(1)
  setActiveCategory(category)
  }

 

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
      <div>
      <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
      </div>

      {/*----------search section----- */}
      <div className="w-3/5 mb-5">
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

      {/*----------blogcard section----- */}
      <div className="flex flex-col lg:flex-row gap-10">
      {/*----------blogcard component----- */}
       <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} /> 

       {/*----------Siderar component----- */}
       <Sidebar />
       </div>
      {/*----------paginations section----- */}
      <div>
      <Paginaation onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
      </div>
    </div>
  );
};

export default BlogePage;
