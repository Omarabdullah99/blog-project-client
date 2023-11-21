import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import * as api from '../api'

export const createBlogSlice= createAsyncThunk("blog/createBlog", async({updateBlogData, navigate, toast}, {rejectWithValue})=>{
    try {
        const response= await api.createBlog(updateBlogData)
        console.log('createblog',response)
        toast.success("Blog Added Successfully")
        navigate("/")
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
        
    }
})

export const getBlogsByUserIdSlice = createAsyncThunk(
    "blog/getBlogsByUserIdSlice",
    async (userid, { rejectWithValue }) => {
      try {
        const response = await api.getBlogsByUserId(userid);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  export const updateBlogSlice = createAsyncThunk(
    "blog/updateBlogSlice",
    async (object, { rejectWithValue }) => {
      const {updateBlogData,id,toast,navigate}=object
      console.log(object)
      try {
        const response = await api.updateBlog(updateBlogData, id);
        toast.success("Tour Updated Successfully");
        navigate("/");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

const blogSlice= createSlice({
    name:"blog",
    initialState:{
        blog:{}, //*singleTour
        allblog:[], //*alltours
        userblog:[], //*login user Tou
        error:"",
        loading:false
    },
    extraReducers:{
        [createBlogSlice.pending]:(state,action)=>{
            state.loading =true
        },
        [createBlogSlice.fulfilled]:(state, action)=>{
            state.loading =false;
            state.allblog= [action.payload]
            console.log('createBlog',action)
        },
        [createBlogSlice.rejected]:(state,action)=>{
            state.loading =false;
            state.error= action.payload.message
        },
        [getBlogsByUserIdSlice.pending]:(state,action)=>{
            state.loading =true
        },
        [getBlogsByUserIdSlice.fulfilled]:(state, action)=>{
            state.loading =false;
            state.userblog= [...action.payload]
            console.log('getBlogsByUserId',action.payload)
        },
        [getBlogsByUserIdSlice.rejected]:(state,action)=>{
            state.loading =false;
            state.error= action.payload.message
        },
        [updateBlogSlice.pending]:(state,action)=>{
            state.loading =true
        },
        [updateBlogSlice.fulfilled]:(state, action)=>{
            state.loading =false;
            const {
              arg: { id },
            } = action.meta;
            if (id) {
              state.userblog = state.userblog.map((item) =>
              item._id === id ? action.payload : item
            );    
            }
        },
        [updateBlogSlice.rejected]:(state,action)=>{
            state.loading =false;
            state.error= action.payload.message
        },

    }
})
export default blogSlice.reducer