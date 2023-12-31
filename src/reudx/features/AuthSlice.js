import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import * as api from '../api'

export const login= createAsyncThunk("auth/login", async({formValue,navigate,toast},{rejectWithValue})=>{
    try {
        const response= await api.signIn(formValue)
        toast.success("Login Successfully")
        navigate("/")
        console.log("loginresponse",response)
        return response.data
    } catch (error) {
        console.log("loginerror",error)
        return rejectWithValue(error.response.data)
        
        
    }
})

export const register= createAsyncThunk("auth/register", async({formValue,navigate,toast}, {rejectWithValue})=>{
    try {
        const response= await api.signUp(formValue)
        toast.success("Register Successfully")
        navigate("/")
        console.log("registerresponse",response)
        return response.data
       
    } catch (error) {
        return rejectWithValue(error.response.data)
        
    }
})

export const getAllUserSlice = createAsyncThunk(
    "auth/getAllUserSlice",
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.alluser();
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

const authSlice= createSlice({
    name:"authentication",
    initialState:{
        user:null,
        error:"",
        loading:false,
        allusers:[]
    },
    reducers:{
        //!register/login korar por refresh korle oita chole jay. ai problem solve korar jonno
        setUser:(state,action)=>{
          state.user=action.payload
        },

        //!logout action
        setLogout: (state, action) => {
          localStorage.clear()
          state.user = null;
        },
      },
    extraReducers:{
        [login.pending]:(state,action)=>{
            state.loading =true
        },
        [login.fulfilled]:(state, action)=>{
            state.loading =false;
            localStorage.setItem("blogprofile", JSON.stringify({...action.payload}))
            state.user= action.payload
        },
        [login.rejected]:(state,action)=>{
            state.loading =false;
            console.log("loginaction",action.payload)
            state.error= action.payload.message
        },
        [register.pending]:(state,action)=>{
            state.loading =true
        },
        [register.fulfilled]:(state, action)=>{
            state.loading =false;
            localStorage.setItem("blogprofile", JSON.stringify({...action.payload}))
            state.user= action.payload
            console.log("registeraction",action.payload)
        },
        [register.rejected]:(state,action)=>{
            state.loading =false;
            state.error= action.payload.message
        },
        [getAllUserSlice.pending]: (state, action) => {
            state.loading = true;
          },
          [getAllUserSlice.fulfilled]: (state, action) => {
            state.loading = false;
            state.allusers = action.payload;
          },
          [getAllUserSlice.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },

    }
})

export const {setUser,setLogout} = authSlice.actions
export default authSlice.reducer