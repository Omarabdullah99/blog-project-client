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
        // [login.pending]:(state,action)=>{
        //     state.loading =true
        // },
        // [login.fulfilled]:(state, action)=>{
        //     state.loading =false;
        //     localStorage.setItem("blogprofile", JSON.stringify({...action.payload}))
        //     state.user= action.payload
        // },
        // [login.rejected]:(state,action)=>{
        //     state.loading =false;
        //     console.log("loginaction",action.payload)
        //     state.error= action.payload.message
        // },
        // [register.pending]:(state,action)=>{
        //     state.loading =true
        // },
        // [register.fulfilled]:(state, action)=>{
        //     state.loading =false;
        //     localStorage.setItem("blogprofile", JSON.stringify({...action.payload}))
        //     state.user= action.payload
        //     console.log("registeraction",action.payload)
        // },
        // [register.rejected]:(state,action)=>{
        //     state.loading =false;
        //     state.error= action.payload.message
        // }

    }
})
export default blogSlice.reducer