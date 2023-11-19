// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


const Sidebar = () => {
    const [popularBlog,setPopularBlog]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res=> res.json())
        .then(data => setPopularBlog(data.slice(0,15)))

    },[])
    console.log("popularblog",popularBlog)
  return (
    <div>
    <div>
    <h3 className='font-bold mb-1 border-b-2 rounded-sm'>Latest Blogs</h3>
    <div>
    {
        popularBlog.slice(0,5).map((popular)=>(
            <div key={popular.id}>
            <h4 className='text-sm'> {popular.title} </h4>
            <Link to={""} className='font-medium py-1 hover:text-orange-500'> <p className=''>Read More </p> </Link>
            </div>
        ))
    }
    </div>
    </div>


    <div>
    <h3 className='mt-10 font-bold mb-1 border-b-2 rounded-sm'>Popular Blogs</h3>
    <div>
    {
        popularBlog.slice(6,10).map((popular)=>(
            <div key={popular.id}>
            <h4 className='text-sm'> {popular.title} </h4>
            <Link to={""} className='font-medium py-1 hover:text-orange-500'> <p className=''>Read More </p> </Link>
            </div>
        ))
    }
    </div>
    </div>
    </div>
  )
}

export default Sidebar