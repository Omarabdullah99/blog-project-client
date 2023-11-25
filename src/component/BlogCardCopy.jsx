/* eslint-disable no-unused-vars */
import React from 'react'
import { FaRegThumbsUp, FaUser } from 'react-icons/fa';
import {
  MDBBtn,
  MDBIcon, MDBTooltip,
 
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import './blogcard.css'
import { likeBlogSlice } from '../reudx/features/BlogSlice';

const BlogCardCopy = ({
    imageFile,
    description,
    title,
    tags,
    _id,
    name,
    likes,
    creator
}) => {
    const excerpt = (str) => {
        if (str?.length > 30) {
          str = str.substring(0, 30) + " ...";
        }
        return str;
      };
    
      const titleexcerpt = (str) => {
        if (str?.length > 20) {
          str = str.substring(0, 20) + " ...";
        }
        return str;
      };
      const dispatch=useDispatch()
      const {user}= useSelector((state)=>({...state.authentication}))
      const userId= user?.result?._id
      console.log("cardcopy",userId)
      

      const Likes = () => {
        if (likes?.length > 0) {
          return likes.find((like) => like === userId) ? (
            <>
              <MDBIcon fas icon="thumbs-up" />
              &nbsp;
              {likes?.length > 2 ? (
                <MDBTooltip
                  tag="a"
                  title={`You and ${likes?.length - 1} other people likes`}
                >
                  {likes?.length} Likes
                </MDBTooltip>
              ) : (
                `${likes?.length} Like${likes?.length > 1 ? "s" : ""}`
              )}
            </>
          ) : (
            <>
              <MDBIcon far icon="thumbs-up" />
              &nbsp;{likes?.length} {likes?.length === 1 ? "Like" : "Likes"}
            </>
          );
        }
        return (
          <>
            <MDBIcon far icon="thumbs-" />
            &nbsp;Like
          </>
        );
      };
    
      const handleLike = () => {
        dispatch(likeBlogSlice({ _id }));
      };
  return (
    <div  className="card-wrapper">
    <div className="p-5 shadow-lg rounded cursor-pointer text-black h-[400px]">
      <div>
        <img src={imageFile} alt="" className="w-full " />
      </div>
      <h3 className="mb-2 font-bold text-sm cursor-pointer">
        {" "}
        {titleexcerpt(title)}{" "}
      </h3>
      <Link to={`/blog/${_id}`}>
        <p className="text-black">
          {" "}
          {excerpt(description)}see more
        </p>
      </Link>
     <Link to={`/userblog/${creator}`}><p className="mb-2 text-sm text-gray-500">
        <FaUser className="inline-flex items-center mr-2" />{" "}
        {name} (see other blogs this user)
      </p> </Link> 
    </div>
    <div className="last flex justify-between place-items-center">
    <MDBBtn
    style={{ float: "right" }}
    tag="a"
    color="none"
    onClick={!user?.result ? null : handleLike}
  >
    {!user?.result ? (
      <MDBTooltip title="Please login to like tour" tag="a">
        <Likes />
      </MDBTooltip>
    ) : (
      <Likes />
    )}
  </MDBBtn>
      <button>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-save-3244517-2701888.png?f=webp"
          alt=""
          className="w-6 items-baseline"
        />
      </button>
    </div>
  </div>
  )
}

export default BlogCardCopy