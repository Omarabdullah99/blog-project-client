// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBlogbyIdSlice } from '../reudx/features/BlogSlice'
import moment from 'moment'
import { SlCalender } from "react-icons/sl";

const SingleBlog = () => {
    const {id}=useParams()
    console.log("detailsid",id)
    const dispatch=useDispatch()
    const {blog}= useSelector((state)=>({...state.blog}))
    useEffect(()=>{
        dispatch(getBlogbyIdSlice(id))
    },[id])

    console.log("detailsidcard",blog)

  return (
    <div className='w-2/4 mx-auto'>
    <img src={blog?.imageFile} alt="" className='w-fit ' />
    <div className="cardbody">
    <h3>{blog?.title}</h3>
      <p className="text-[#F48FB1] font-bold">Created By: {blog?.name}</p>
      <span className="text-start">
      {blog && blog?.tags && blog?.tags?.map((item) => `#${item} `)}
    </span>
    <p className='flex items-center gap-1'> <SlCalender /> {moment(blog?.createdAt).fromNow()} </p>
    <p> {blog?.description} </p>
    </div>
    </div>
  )
}

export default SingleBlog