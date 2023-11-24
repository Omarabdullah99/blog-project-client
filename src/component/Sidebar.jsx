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

    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res=> res.json())
        .then(data => setPopularBlog(data.slice(0,15)))

    },[])
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
  return (
    <div>
    <div>
    <h3 className='font-bold mb-1 border-b-2 rounded-sm'>Latest Blogs</h3>
    <div>
    {
        latestblog?.slice(0,5).map((latest)=>(
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