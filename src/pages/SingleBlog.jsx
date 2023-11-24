// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBlogbyIdSlice } from "../reudx/features/BlogSlice";
import moment from "moment";
import { SlCalender } from "react-icons/sl";
import RelatedBlog from "../component/RelatedBlog";

const SingleBlog = () => {
  const { id } = useParams();
  console.log("detailsid", id);
  const dispatch = useDispatch();
  const { allblog, blog } = useSelector((state) => ({ ...state.blog }));
  useEffect(() => {
    dispatch(getBlogbyIdSlice(id));
  }, [id]);
  // console.log("detailsidcard", blog);
  // console.log("details-blogall", allblog);

  const relatedblogs = allblog?.filter(
    (blogs) => blogs.category === blog.category
  );
  console.log("relatedblog", relatedblogs);

  return (
    <div className="w-2/4 mx-auto py-5">
      <div>
        <img src={blog?.imageFile} alt="" className="w-fit " />
        <div className="cardbody">
          <h3>{blog?.title}</h3>
          <p className="text-[#F48FB1] font-bold">Created By: {blog?.name}</p>
          <p className=" font-bold">Category: {blog?.category}</p>
          <span className="text-start">
            {blog?.tags?.map((tag) => (
              <Link key={tag} to={`/blog/tag/${tag}`}>
                {" "}
                #{tag}
              </Link>
            ))}
          </span>
          <p className="flex items-center gap-1">
            {" "}
            <SlCalender /> {moment(blog?.createdAt).fromNow()}{" "}
          </p>
          <p> {blog?.description} </p>
        </div>
      </div>
      <div>
      <RelatedBlog relatedblogs={relatedblogs}/>
      </div>
    </div>
  );
};

export default SingleBlog;
