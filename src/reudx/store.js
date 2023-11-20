import {configureStore} from "@reduxjs/toolkit"
import AuthReducer from './features/AuthSlice'
import BlogReducer from './features/BlogSlice'


export default configureStore({
    reducer:{
        authentication:AuthReducer,
        blog:BlogReducer
       
    }
})