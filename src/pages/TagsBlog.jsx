// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from "react-router-dom";
import { getBlogsByTagSlice } from '../reudx/features/BlogSlice';


const TagsBlog = () => {
    const {searchBlog,tagsBlog}= useSelector((state)=>({...state.blog}))
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const { tag } = useParams();
    console.log("tags",tag)

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

      useEffect(() => {
        if (tag) {
          dispatch(getBlogsByTagSlice(tag));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [tag]);
      console.log("tagsok",tagsBlog)
  return (
     <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-5 w-[90%] mx-auto">
    {tagsBlog &&
        tagsBlog.map((blog) => (
        <div key={blog?._id} className="p-3 shadow-lg rounded cursor-pointer text-black h-[450px] mt-3">
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
  )
}

export default TagsBlog