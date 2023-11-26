// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getLatestBlogsSlice } from '../reudx/features/BlogSlice'


const Sidebar = () => {
    const [popularBlog,setPopularBlog]=useState([])
    const {latestblog}= useSelector((state)=>({...state.blog}))
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getLatestBlogsSlice())

    },[])
    console.log('slider-latestblog',latestblog)

    console.log("popularblog",popularBlog)
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

      const populartag=["sports","ai","health","tech","cr7" ]
      console.log("side-popular",populartag)
  return (
    <div>
    <h1 className="text-3xl font-bold">Popular tags</h1>
    <span className="">
    {populartag?.map((tag) => (
      <Link key={tag} to={`/blog/tag/${tag}`} >
        {" "}
        #{tag}
      </Link>
    ))}
  </span>
    <div>
    <h3 className='font-bold mt-5 mb-1 border-b-2 rounded-sm'>Latest Blogs</h3>
    <div>
    {
        latestblog?.slice(0,7).map((latest)=>(
            <div key={latest._id} className=''>
            <div>
            <img src={latest.imageFile} alt="" className='md:w-52 lg:w-full'/>
            </div>
            <div>
            <h4 className='text-sm'> {titleexcerpt(latest?.title)} </h4>
            <p className='text-sm'> {excerpt(latest?.description)} </p>
            <Link to={`/blog/${latest?._id}`} className='font-medium py-1 hover:text-orange-500'> <p className=''>Read More </p> </Link>
            </div>
            </div>
        ))
    }
    </div>
    </div>

    </div>
  )
}

export default Sidebar