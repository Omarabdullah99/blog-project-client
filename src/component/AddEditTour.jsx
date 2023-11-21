// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBValidationItem,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { createBlogSlice, getBlogsByUserIdSlice, updateBlogSlice } from "../reudx/features/BlogSlice";



const initialState = {
  title: "",
  description: "",
  imageFile:"",
  tags: [],
  category:""
};

const AddEditTour = () => {
  const [tourData, setTourData] = useState(initialState);
  const { title, description,imageFile, tags,category } = tourData;
  const { user } = useSelector((state) => ({ ...state.authentication }));
  const { loading,error,userblog } = useSelector((state) => ({ ...state.blog})); 
  const{id}=useParams()
  console.log("editblog",id)
  const userId=user?.result?._id
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{
    dispatch(getBlogsByUserIdSlice(userId))
},[userId])

useEffect(()=>{
  if(id){
    const singleTour = userblog.find((tour) => tour._id === id);
    console.log("singleTour",singleTour);
    setTourData({ ...singleTour })
  }

},[id])

console.log("editalluser",userblog)
  useEffect(() => {
    //!error handle
    error && toast.error(error);
  }, [error]);

  const handleInputChange = (event, field) => {
    //*every input field controol
    setTourData((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  const handleInputKeyDown = (event) => {
    //*tags er input field er work
    if (event.key === "Enter") {
      event.preventDefault();
      const newTag = tourData.tagsInput.trim();
      if (newTag && !tags.includes(newTag)) {
        setTourData((prevState) => ({
          ...prevState,
          tags: [...prevState.tags, newTag],
        }));
      }
      setTourData((prevState) => ({
        ...prevState,
        tagsInput: "",
      }));
    }
  };

  const handleChipDelete = (tagToDelete) => {
    //*tags filed e tag delete
    setTourData((prevState) => ({
      ...prevState,
      tags: prevState.tags.filter((tag) => tag !== tagToDelete),
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateBlogData= {...tourData, name:user?.result?.name}
        if(!id){
        dispatch(createBlogSlice({updateBlogData, navigate, toast}))
        console.log("addTour",updateBlogData)

      }else{
        const object={
          updateBlogData,id,toast,navigate
        }
        // console.log("dispathc",updateTourData)
        dispatch(updateBlogSlice(object))
      }
    // console.log("updateBlogData",updateBlogData)
    // dispatch(createBlogSlice({updateBlogData,navigate,toast}))
  };
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
      className="container"
    >
      <MDBCard alignment="center">
       {/*  <h5>{id ? "Update Tour" : "Add Tour"}</h5> */}
      {id ? (<h1 className="text-xl font-bold">Update Blogs</h1>) : (<h5>Add Tour</h5>)} 

        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} className="row g-3">
            <MDBValidationItem
              feedback="Please provide title"
              invalid
              className="col-md-12"
            >
              <MDBInput
                placeholder="Enter Title"
                type="text"
                value={title}
                name="title"
                onChange={(e) => handleInputChange(e, "title")}
                className="form-control"
                required
              />
            </MDBValidationItem>

            <MDBValidationItem
              feedback="Please provide description"
              invalid
              className="col-md-12"
            >
              <MDBInput
                placeholder="Enter description"
                type="text"
                value={description}
                name="description"
                onChange={(e) => handleInputChange(e, "description")}
                className="form-control"
                required
              />
            </MDBValidationItem>

            <MDBValidationItem
            feedback="Please provide imageurl"
            invalid
            className="col-md-12"
          >
            <MDBInput
              placeholder="Enter ImageUrl"
              type="text"
              value={imageFile}
              name="imageFile"
              onChange={(e) => handleInputChange(e, "imageFile")}
              className="form-control"
              required
            />
          </MDBValidationItem>

          <MDBValidationItem
          feedback="Please provide Category"
          invalid
          className="col-md-12"
        >
          <MDBInput
            placeholder="Enter Category"
            type="text"
            value={category}
            name="category"
            onChange={(e) => handleInputChange(e, "category")}
            className="form-control"
            required
          />
        </MDBValidationItem>

            <div className="col-md-12">
              {tags?.map(
                (
                  tag //*tagschange tag
                ) => (
                  <Chip
                    key={tag}
                    label={tag}
                    onDelete={() => handleChipDelete(tag)}
                    variant="outlined"
                    sx={{ marginRight: 1, marginBottom: 1 }}
                  />
                )
              )}
              <TextField
                value={tourData.tagsInput}
                onChange={(e) => handleInputChange(e, "tagsInput")}
                onKeyDown={handleInputKeyDown}
                label="Tags"
                variant="outlined"
                fullWidth
                sx={{ marginTop: 1 }}
              />
            </div>

            <div className="col-12">
              <MDBBtn style={{ width: "100%" }}> 
              {loading && (
                <MDBSpinner size="sm" role="status" tag="span" className="me-2" />
              )}
            Submit
              </MDBBtn>
            </div>

          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AddEditTour;
