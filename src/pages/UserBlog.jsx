// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getBlogsByUserIdSlice } from '../reudx/features/BlogSlice'
import { getAllUserSlice } from '../reudx/features/AuthSlice'

const UserBlog = () => {
    const {userId}=useParams()
    console.log("userIduserblog",userId)
    const {userblog,loading}= useSelector((state)=>({...state.blog}))
    const {allusers}= useSelector((state)=>({...state.authentication}))
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getBlogsByUserIdSlice(userId))
    },[userId])

    useEffect(()=>{
      dispatch(getAllUserSlice())
  },[])
console.log("usrBlog-alluser",allusers)
  const userBlogthisuser= allusers.filter((user)=> user._id === userId)
  console.log("thisbloguser",userBlogthisuser)

    const excerpt = (str) => {
        if (str.length > 40) {
          str = str.substring(0, 40) + " ...";
        }
        return str;
      };
  return (
    <div className='mt-7'>
    {
        userblog.length > 0 ? (<div> <h1 className='text-2xl font-bold text-center '>Users Blog:{userBlogthisuser?.[0]?.name}</h1> <hr className='w-2/4 mx-auto' /> </div> ) : (<h1 className='text-center'>No Blogs available with the user:{userBlogthisuser?.[0]?.name}</h1>)
    }
    {userblog?.length >0 && userblog?.map(blog=>(
        <div key={blog._id} className='flex flex-col lg:flex-row justify-between gap-3 items-center w-2/4 mx-auto p-5 shadow-lg rounded my-2' > 
        <img src={blog?.imageFile} alt="" className='lg:w-44 w-36 h-36 lg:h-44' />
        <div>
        <h1 className='text-sm text-black lg:font-bold'> {blog?.title} </h1>
        <Link to={`/blog/${blog?._id}`}><p>{excerpt(blog?.description)}see more....</p> </Link>
        </div>
        </div>
    ))}
    

    </div>
  )
}

export default UserBlog