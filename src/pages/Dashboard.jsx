// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteBlogSlice, getBlogsByUserIdSlice } from '../reudx/features/BlogSlice'
import { HiOutlineTrash } from "react-icons/hi";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";


const Dashboard = () => {
    const {user}= useSelector((state)=>({...state.authentication}))
    const userId= user?.result?._id
    console.log("dashboarduser",userId)

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getBlogsByUserIdSlice(userId))
    },[userId])

 const {userblog,loading}= useSelector((state)=>({...state.blog}))
 console.log("userblog",userblog)
 console.log("dashboard",loading)

 const excerpt = (str) => {
    if (str.length > 40) {
      str = str.substring(0, 40) + " ...";
    }
    return str;
  };
  
  const handleDelete=(id)=>{
    if (window.confirm("Are you sure you want to delete this tour ?")) {
      dispatch(deleteBlogSlice({ id, toast }));
    }
    console.log("dashboarddelete",id)
  }

  return (
    
    <div className='mt-7'>
    {
        userblog.length > 0 ? (<div> <h1 className='text-2xl font-bold text-center '>Dashboard: {user?.result?.name}</h1> <hr className='w-2/4 mx-auto' /> </div> ) : (<h1 className='text-center'>No Blogs available with the user: {user?.result?.name}</h1>)
    }
    {userblog?.length >0 && userblog?.map(blog=>(
        <div key={blog._id} className='flex flex-col lg:flex-row justify-between gap-3 items-center w-2/4 mx-auto p-5 shadow-lg rounded my-2' > 
        <img src={blog?.imageFile} alt="" className='lg:w-44 w-36 h-36 lg:h-44' />
        <div>
        <h1 className='text-sm text-black lg:font-bold'> {blog?.title} </h1>
        <p>{excerpt(blog?.description) }</p> 
        </div>
        <div className='flex gap-3 '>
        <HiOutlineTrash className='text-red-500 font-bold text-2xl' onClick={()=>handleDelete(blog?._id)} />
       <Link to={`/editblog/${blog?._id}`}><IoAddCircleOutline className='text-sky-600 font-bold text-2xl' /></Link> 
        </div>
        </div>
    ))}
    

    </div>
  )
}

export default Dashboard